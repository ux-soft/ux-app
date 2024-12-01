import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: path.resolve(__dirname, 'app'),  // Define el root de Vite como `web/app`
    build: {

        rollupOptions: {
            input: path.resolve(__dirname, 'app/public/index.html'),
        },

        outDir: path.resolve(__dirname, 'dist'),    // Carpeta de compilación para los archivos finales
        emptyOutDir: true,                          // Limpia el directorio de salida antes de construir
        sourcemap: true,                            // Incluye los source maps
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'app/src/components'),
            '@common-shell': path.resolve(__dirname, '../../common/web-components/shell'),
        },
    },

    server: {
        port: 3000, // Puerto para desarrollo
        open: true, // Abre automáticamente el navegador
    }
});