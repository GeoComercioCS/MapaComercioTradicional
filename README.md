# Geografías del comercio tradicional
## Memoria, transformación y paisajes relacionales en Castellón de la Plana

Aplicación web multipágina para documentar y visualizar el comercio tradicional de Castellón de la Plana.

Versión en línea:
[https://patrunomeister.github.io/MapaComercioTradicional/](https://patrunomeister.github.io/MapaComercioTradicional/)

---

## Descripción

El proyecto integra cartografía, trabajo de campo y documentación visual sobre dos categorías:

- Venta a la porta.
- Comercios históricos.

Los datos proceden de observación directa, entrevistas y fuentes hemerográficas (2016-2026).

---

## Páginas incluidas

- [index.html](index.html): landing.
- [mapa.html](mapa.html): mapa interactivo principal.
- [glosario.html](glosario.html): criterios y terminología.
- [proyecto.html](proyecto.html): marco del proyecto y metodología.
- [contactos.html](contactos.html): información de contacto.

---

## Funcionalidades

- Visualización con Mapbox GL JS.
- Clustering de marcadores con Supercluster.
- Listados laterales por categoría y navegación por fichas.
- Fichas con texto, imágenes y enlaces de referencia.
- Interfaz adaptada a escritorio y móvil.
- Estilos centralizados en [styles.css](styles.css) (sin bloques style inline en las páginas fuente).

---

## Stack técnico

- [Vite](https://vite.dev/)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)
- [Supercluster](https://github.com/mapbox/supercluster)
- [Font Awesome](https://fontawesome.com/)
- [GitHub Pages](https://pages.github.com/)

---

## Desarrollo local

Requisitos:

- Node.js 18+
- npm

Instalación:

```bash
git clone https://github.com/patrunomeister/MapaComercioTradicional.git
cd MapaComercioTradicional
npm install
```

Ejecución en desarrollo:

```bash
npm run dev
```

Scripts disponibles:

- npm run dev
- npm run build
- npm run preview
- npm run deploy

---

## Build y despliegue

Build de producción:

```bash
npm run build
```

Salida principal:

- [dist-pages](dist-pages)

Despliegue GitHub Pages:

```bash
npm run deploy
```

Notas de configuración relevantes:

- Vite usa base /MapaComercioTradicional/ en [vite.config.js](vite.config.js).
- La salida está configurada en dist-pages.
- emptyOutDir está en false para evitar problemas de bloqueo de archivos en Windows/Dropbox durante la limpieza de build.

Carpeta adicional de publicación:

- [dist-deploy](dist-deploy) puede mantenerse sincronizada desde dist-pages cuando se necesite un paquete estático separado.

---

## Estructura del proyecto

```text
mapparaf01/
|- app.js
|- styles.css
|- index.html
|- mapa.html
|- glosario.html
|- proyecto.html
|- contactos.html
|- vite.config.js
|- public/images/
|- dist-pages/
|- dist-deploy/
```

---

## Datos y configuración cartográfica

- Dataset y metadatos de puntos en [app.js](app.js).
- Configuración de mapa (token, estilo, centro, zoom) en el objeto mapConfig de [app.js](app.js).

---

## Licencia

- Código: licencia ISC, ver [LICENSE](LICENSE).
- Contenidos del proyecto (según se indica en las páginas públicas): Creative Commons Atribución-NoComercial 4.0 Internacional (CC BY-NC 4.0).
