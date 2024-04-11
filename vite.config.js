import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createRoot } from 'react-dom'; // Correct import path

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      external: ['axios']
    }
  },
  esbuild: {
    jsxFactory: 'createRoot' // Correct JSX factory function
  }
});
