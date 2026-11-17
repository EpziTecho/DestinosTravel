# Reservas en línea — configuración

El formulario de **Reserva en línea** tiene dos botones:

- **Enviar reserva** → `POST /api/reservas` (función de Vercel en [`api/reservas.js`](../api/reservas.js)). Pide correo o teléfono.
- **Reservar por WhatsApp** → abre WhatsApp con el mensaje armado (no usa backend).

La función valida los datos y entrega la reserva por dos vías independientes. Basta con que **una** funcione para que la reserva quede registrada:

| Vía | Qué hace | Variables |
|---|---|---|
| Correo (Resend) | Avisa a la empresa con todos los datos; "Responder" va directo al cliente | `RESEND_API_KEY`, `BOOKING_EMAIL_TO`, `BOOKING_EMAIL_FROM` |
| Google Sheet | Agrega una fila por reserva (registro y seguimiento) | `SHEETS_WEBHOOK_URL`, `SHEETS_WEBHOOK_SECRET` |
| Correo al cliente | Confirmación automática "Recibimos tu reserva" | `SEND_CUSTOMER_EMAIL=true` (requiere dominio propio) |

Si no hay ninguna vía configurada, en producción el botón responde "no disponible" (el cliente aún puede usar WhatsApp). En `npm run dev`, sin configuración, las reservas solo se imprimen en la terminal (modo prueba).

---

## 1. Correo con Resend

1. Crea una cuenta en <https://resend.com> con el correo de la empresa (**destinostravel5eirl@gmail.com**).
2. **API Keys → Create API Key** (permiso *Sending access*). Copia la clave (`re_...`).
3. Mientras no tengas dominio, Resend **solo deja enviar al correo con el que creaste la cuenta**, así que `BOOKING_EMAIL_TO` debe ser ese mismo correo. El remitente será `onboarding@resend.dev` (deja `BOOKING_EMAIL_FROM` vacío).

Plan gratuito: 3.000 correos/mes, 100/día.

## 2. Google Sheet (registro de reservas)

1. Crea una hoja de cálculo nueva en Google Drive, por ejemplo "Reservas Destinos Travel".
2. **Extensiones → Apps Script**. Borra lo que haya y pega este código. Cambia `SECRET` por una frase larga inventada:

```js
const SECRET = 'cambia-esto-por-una-frase-larga-y-secreta';
const HEADERS = ['Registrado', 'Código', 'Servicio', 'Fecha', 'Hora', 'Pasajeros', 'Maletas',
  'Recojo en', 'Destino', 'Vuelo', 'Nombre', 'Correo', 'Teléfono', 'Notas', 'Estado'];

function doPost(e) {
  const out = (o) => ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return out({ ok: false }); }
  if (d.secret !== SECRET) return out({ ok: false, error: 'unauthorized' });

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Reservas') || ss.insertSheet('Reservas');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  // A leading ' stops values like "=..." from being read as formulas.
  const safe = (v) => (typeof v === 'string' && /^[=+\-@]/.test(v) ? "'" + v : v ?? '');
  sheet.appendRow([new Date(), d.id, d.service, d.date, d.time, d.passengers, d.bags,
    d.from, d.to, d.flight, d.name, d.email, d.phone, d.notes, 'Pendiente'].map(safe));
  return out({ ok: true });
}
```

3. **Implementar → Nueva implementación** → tipo **Aplicación web**:
   - *Ejecutar como*: **Yo**
   - *Quién tiene acceso*: **Cualquier usuario**
4. Autoriza los permisos que pide Google y copia la **URL de la aplicación web** (termina en `/exec`).
5. Esa URL va en `SHEETS_WEBHOOK_URL` y la frase de `SECRET` en `SHEETS_WEBHOOK_SECRET`.

> Si más adelante editas el script, usa **Implementar → Gestionar implementaciones → editar → Nueva versión** para que la misma URL tome los cambios.

La columna **Estado** sirve para que el equipo marque *Confirmada*, *Realizada*, *Cancelada*…

## 3. Variables en Vercel

Vercel → proyecto → **Settings → Environment Variables** → agrega (entorno *Production*, y *Preview* si quieres probar ahí):

```
RESEND_API_KEY=re_xxxxxxxx
BOOKING_EMAIL_TO=destinostravel5eirl@gmail.com
SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/xxxx/exec
SHEETS_WEBHOOK_SECRET=la-misma-frase-del-script
```

Luego **Deployments → … → Redeploy** para que las tome.

Para probar en local con envíos reales, copia `.env.example` a `.env.local`, rellénalo y reinicia `npm run dev`. `.env.local` no se sube a git.

## 4. Cuando tengas dominio propio

1. Resend → **Domains → Add domain** → agrega los registros DNS (SPF/DKIM) que te muestra en el panel de tu proveedor de dominio y espera a que quede *Verified*.
2. En Vercel agrega:
   ```
   BOOKING_EMAIL_FROM=Destinos Travel <reservas@tudominio.pe>
   SEND_CUSTOMER_EMAIL=true
   ```
   Ahora también puedes poner varios destinatarios en `BOOKING_EMAIL_TO` (separados por coma).
3. Conecta el dominio a la web en Vercel → **Settings → Domains**, y actualiza la URL en `index.html`, `public/robots.txt` y `public/sitemap.xml` (ver README).

## Seguridad y spam

- Validación en el servidor (tipo de traslado, fecha de hoy en adelante en hora de Perú (UTC-5; para exigir anticipación se cambia con `MIN_DAYS_AHEAD` en `src/config/bookingServices.js`), hora, límites de pasajeros/maletas, largo de campos, correo/teléfono). El extremo "aeropuerto" de Transfer IN/OUT se fija en el servidor.
- Campo trampa oculto (*honeypot*) para bots.
- Límite de 5 envíos cada 10 minutos por IP (aproximado en serverless).
- Las claves solo viven en variables de entorno; nunca llegan al navegador.
- Si aparece spam real, el siguiente paso es Cloudflare Turnstile (captcha invisible, gratuito).
