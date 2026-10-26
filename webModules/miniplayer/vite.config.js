import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
    base: './',
    plugins: [react()],
    build: {
        target: 'chrome140',
        outDir: path.resolve(import.meta.dirname, '../../src/main/lib/miniplayer/renderer'),
        emptyOutDir: true,
        rolldownOptions: {
            output: {
                entryFileNames: 'renderer.js',
                chunkFileNames: '[name].js',
            },
        },
    },
})
