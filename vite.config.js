import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRoot } from 'react-dom/client';

export default defineConfig({
  plugins: [
    react(),
  ],
  // Your Vite configuration settings go here
});
