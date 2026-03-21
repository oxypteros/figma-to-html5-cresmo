import { defineConfig } from 'vite';

export default defineConfig({
  // Root directory of the project
  root: './',

  // Base public path when served in production
  base: './',

  build: {
    // Output directory for the production build
    outDir: 'dist',

    // Minify the output (default is esbuild)
    minify: 'esbuild',

    // Generate source maps for debugging
    sourcemap: true,
  },
  server: {
    // Port for the development server
    port: 3000,

    // Open the browser on server start
    open: true,
  },
});
