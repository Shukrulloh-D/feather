import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Алиас @ -> src, чтобы не писать длинные ../../../
    alias: { '@': path.resolve(__dirname, 'src') },
  },
})
