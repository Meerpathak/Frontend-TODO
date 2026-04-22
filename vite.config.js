import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const API_URL = 'https://backend-todo-1-z37u.onrender.com'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
      '/socket.io': {
        target: 'http://localhost:5000',
        ws: true
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify(API_URL)
  }
})
