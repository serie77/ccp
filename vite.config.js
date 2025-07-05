import { defineConfig } from 'vite'

export default defineConfig({
  // Use root path for custom domain (CNAME)
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
}) 