import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      external: ['axios']
    }
  }
});
