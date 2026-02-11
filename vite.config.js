import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // This forces Vite to bundle these dependencies together
    include: ['react', 'react-dom', 'framer-motion'],
  },
})