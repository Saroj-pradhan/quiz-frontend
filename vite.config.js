import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Allows access from any device on the network
    port: 5173,       // Optional: Change if needed
  },
  plugins: [
    tailwindcss(),
    react()],
})
