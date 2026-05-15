import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/MapaComercioTradicional/', // Percorso pubblico del repo su GitHub Pages
  build: {
    emptyOutDir: false,
    outDir: 'dist-pages',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        proyecto: resolve(__dirname, 'proyecto.html'),
        contactos: resolve(__dirname, 'contactos.html'),
      },
    },
  },
});
