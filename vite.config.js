import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/tarun-portfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})