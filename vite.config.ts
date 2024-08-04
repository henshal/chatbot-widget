import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: () => 'everything.js', // Combine all chunks into a single file
        entryFileNames: 'assets/[name].js', // Customize the output directory and filename
        chunkFileNames: 'assets/[name].js', // Ensure all chunks have the same name pattern
        assetFileNames: 'assets/[name][extname]', // Ensure assets are named consistently
      },
    }
  }
});
