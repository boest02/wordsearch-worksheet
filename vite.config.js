import { defineConfig } from 'vite'

export default defineConfig({
    
    define: {
      // By default, Vite doesn't include shims for NodeJS/
      // necessary for segment analytics lib to work
      global: {},
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      strictPort: true,
      hmr: {
          port: 443,
      },
  },
  })