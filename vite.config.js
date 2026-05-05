import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/MapaComercioTradicional/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        proyecto: resolve(__dirname, 'proyecto.html'),
      },
    },
  },
});
