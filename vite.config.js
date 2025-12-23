
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './', // raíz del proyecto
  build: {
    outDir: 'dist', // carpeta de salida del build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        sobreMi: path.resolve(__dirname, 'pages/sobre-mi.html'),
        proyectos: path.resolve(__dirname, 'pages/proyectos.html'),
        contacto: path.resolve(__dirname, 'pages/contacto.html'),
        calculadora: path.resolve(__dirname, 'pages/calculadora.html'),
      }
    }
  }
});
