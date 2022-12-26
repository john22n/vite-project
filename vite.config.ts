/// <refernce type="vitest" />
/// <refernce type="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/vite-project/',
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setup.ts']
    },
})
