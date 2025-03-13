// vite.base.ts
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths()],
    build: {
        target: 'esnext',
        outDir: 'dist',
    },
    resolve: {
        alias: {
            '@common': '/packages/common/src', // Ajusta según tu estructura
        },
    },
});
