import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    resolve: {
        dedupe: ['react', 'react-dom'],
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    build: {
        target: 'chrome140',
        minify: 'oxc',
        outDir: path.resolve(currentDirectory, 'dist'),
        emptyOutDir: true,
        lib: {
            entry: path.resolve(currentDirectory, 'src/index.ts'),
            name: 'PulseSyncWebHostBundle',
            formats: ['iife'],
            fileName: () => 'host.js',
            cssFileName: 'host',
        },
    },
});
