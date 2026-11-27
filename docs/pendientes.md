# Pendientes

Ideas acordadas que todavía no se implementan.

## Idiomas (hecho)

La web está en español (por defecto), inglés, francés, ruso y chino, con el selector arriba a la derecha.

- **Textos en español:** la interfaz en `src/i18n/es.js`; el contenido largo en `src/content/` (preguntas, términos, clientes, fotos) y los servicios en `src/config/bookingServices.js`.
- **Traducciones:** `src/i18n/locales/en.js`, `fr.js`, `ru.js` y `zh.js`, con las mismas claves. Lo que falte en una traducción se muestra en español.
- **Al cambiar un texto en español, hay que cambiarlo también en los cuatro idiomas.** Si se agrega una pregunta o una cláusula, va en la misma posición en cada traducción.
- Los mensajes que recibe la empresa (WhatsApp de la reserva y correo) siguen en español, con el idioma del cliente.
- Google indexa la versión en español. Para posicionar cada idioma en Google habría que darle su propia dirección (por ejemplo `/en/`); queda como mejora futura.

