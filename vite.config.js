import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Алиас @ = папка src, чтобы не писать ../../../ в импортах
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
