import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/dist-deploy/', // Configura il percorso base per GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        proyecto: resolve(__dirname, 'proyecto.html'),
        contactos: resolve(__dirname, 'contactos.html'),
      },
    },
  },
});
