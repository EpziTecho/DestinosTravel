# Logos originales

Archivos fuente del logo en alta resolución (2750×1536). No los carga la web: sirven para
generar las versiones livianas y para material impreso o redes.

| Archivo | Qué es |
|---|---|
| `bagde.png` | solo el escudo |
| `logo-h.png` | horizontal: escudo + nombre + estrellas |
| `logo-v.png` | vertical: escudo arriba, nombre y estrellas debajo |
| `full-logo.png` | horizontal con el slogan |

Cada uno tiene versión transparente (`.png`) y sobre fondo negro (`-b.jpg`) y blanco (`-w.jpg`).

## Versiones que usa la web (generadas a partir de estos)

| Archivo | Origen | Uso |
|---|---|---|
| `src/assets/logo-horizontal.webp` | `logo-h.png` recortado, 168 px de alto | barra superior y pie de página |
| `public/favicon.png` | `bagde.png`, 64×64 | ícono de la pestaña |
| `public/apple-touch-icon.png` | `bagde.png` sobre fondo oscuro, 180×180 | ícono al guardar la web en el celular |
| `public/og-image.jpg` | `full-logo.png` sobre fondo oscuro, 1200×630 | vista previa al compartir en redes |

Si cambia el logo, hay que regenerar esas versiones.
