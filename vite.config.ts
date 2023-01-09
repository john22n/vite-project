/// <refernce type="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'

const vitestConfig: VitestUserConfigInterface = {
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setup.ts']
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    test: vitestConfig.test,
    plugins: [react()],
    base: '/vite-project/',
})
