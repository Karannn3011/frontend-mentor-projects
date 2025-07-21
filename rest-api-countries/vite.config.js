import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Proxying API requests to the Node.js server
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    }
  }
})
