# Geografías del comercio tradicional
## Memoria, transformación y paisajes relacionales en Castellón de la Plana

Mapa interactivo que documenta los puntos de venta a la porta y las tiendas históricas del comercio tradicional en Castellón de la Plana.

🌐 **Versión en línea:** [patrunomeister.github.io/MapaComercioTradicional](https://patrunomeister.github.io/MapaComercioTradicional/)

---

## Descripción

Esta aplicación web permite explorar geográficamente dos tipos de puntos de interés relacionados con el comercio tradicional de Castellón de la Plana:

- **Venta a la porta** — Puntos de venta directa en la puerta del domicilio del productor, donde agricultores de la huerta venden sus productos directamente al consumidor.
- **Tiendas históricas** — Establecimientos comerciales con una larga trayectoria en la ciudad, parte del patrimonio comercial y cultural de Castellón.

Los datos se basan en trabajo de campo y entrevistas realizadas entre 2016 y 2026.

---

## Funcionalidades

- Mapa interactivo con Mapbox GL JS
- Marcadores personalizados con agrupación por proximidad (clustering)
- Sidebar con lista filtrable de puntos de interés
- Ficha detallada con descripción e imágenes para cada punto
- Diseño adaptable a dispositivos móviles

---

## Tecnologías utilizadas

- [Vite](https://vite.dev/) — Herramienta de build
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) — Mapa interactivo
- [Supercluster](https://github.com/mapbox/supercluster) — Clustering de marcadores
- [Font Awesome](https://fontawesome.com/) — Iconos
- [GitHub Pages](https://pages.github.com/) — Alojamiento

---

## Instalación y desarrollo local

### Requisitos previos

- [Node.js](https://nodejs.org/) (v18 o superior)
- Cuenta en [Mapbox](https://mapbox.com/) con un access token

### Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/patrunomeister/MapaComercioTradicional.git
   cd MapaComercioTradicional
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea el archivo `.env` en la raíz del proyecto con tu token de Mapbox:
   ```
   VITE_MAPBOX_TOKEN=pk.ey...tu_token_aqui
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Build y despliegue

```bash
# Generar la versión de producción
npm run build

# Desplegar en GitHub Pages
npm run deploy
```

---

## Estructura del proyecto

```
mapparaf01/
├── app.js          # Lógica principal (datos, mapa, UI)
├── index.html      # Página principal
├── styles.css      # Estilos
├── vite.config.js  # Configuración de Vite
├── public/
│   └── images/     # Imágenes de los puntos de interés
└── .env            # Variables de entorno (no incluido en el repositorio)
```

---

## Licencia

Este proyecto está bajo la licencia ISC. Véase el archivo [LICENSE](LICENSE) para más detalles.
