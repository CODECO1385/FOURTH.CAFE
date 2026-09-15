# Fourth Café — sitio web informativo

Estructura del proyecto:

/index.html
/style.css
/script.js
/assets/images/
    IMG-1.jpg
    IMG-2.jpg
    IMG-3.jpg
    IMG-4.jpg
    BG-01.mp4

## Antes de publicar

Coloca tus cinco archivos multimedia dentro de `assets/images/` con
EXACTAMENTE esos nombres (mayúsculas, guiones y extensiones incluidos).
El código ya apunta a esas rutas; no hay que tocar nada más.

- IMG-1.jpg → Producto 01
- IMG-2.jpg → Producto 02
- IMG-3.jpg → Producto 03
- IMG-4.jpg → Producto 04
- BG-01.mp4 → video del Hero

## Qué editar

Nombres, descripciones y precios del menú: bloques `<article class="card">`
en `index.html`. Cada tarjeta tiene `<h3>`, `<p>` y `<span class="price">`.

Colores: variables al inicio de `style.css` (`:root`).

## Publicar

Es un sitio estático. Sube la carpeta completa a GitHub Pages, Netlify o Vercel
sin ningún paso de build.

## Nota sobre el video

El video del Hero no lleva overlay, filtro, gradiente ni capa encima, tal como
se pidió. La legibilidad del texto se resuelve únicamente con sombra aplicada
al propio texto y con botones de fondo sólido, sin alterar el video.
