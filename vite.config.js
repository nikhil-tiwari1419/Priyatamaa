import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  server: {
    historyApiFallback: true,
  },
   build: {
    outDir: 'dist', // ✅ ensure build output goes to dist/
  },
});
