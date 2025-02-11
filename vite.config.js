import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
  },
  server: {
    // host: "0.0.0.0",
    port: 6002,
    strictPort: true,
  },
})