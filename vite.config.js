import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['4577ba38cbf3.ratio1.link']
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: ['4577ba38cbf3.ratio1.link']
  }
})
