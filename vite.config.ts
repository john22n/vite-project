/// <refernce type="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/// <refernce types="vitest" />
export default defineConfig({
    plugins: react(),
    base: '/vite-project/',
})
