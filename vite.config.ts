// vite.config.ts
// import { defineConfig } from 'vite';
// import { resolve } from 'path';
//
// export default defineConfig({
//     root: 'src', // Directorio raíz donde se encuentran tus archivos
//     build: {
//         outDir: '../dist', // Directorio de salida
//         rollupOptions: {
//             input: {
//                 main: resolve(__dirname, 'src/index.html'), // Archivo de entrada principal
//             },
//         },
//     },
//     server: {
//         open: true, // Abrir el navegador automáticamente al iniciar el servidor
//     },
//     resolve: {
//         alias: {
//             '@': resolve(__dirname, 'src'), // Alias para facilitar las importaciones
//         },
//     },
// });