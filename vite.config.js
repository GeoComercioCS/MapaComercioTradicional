import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/MapaComercioTradicional/', // Percorso pubblico del repo su GitHub Pages
  build: {
    emptyOutDir: false,
    outDir: 'dist-pages',
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        mapa: resolve(__dirname, 'mapa.html'),
        glosario: resolve(__dirname, 'glosario.html'),
        proyecto: resolve(__dirname, 'proyecto.html'),
        contactos: resolve(__dirname, 'contactos.html'),
      },
    },
  },
});
