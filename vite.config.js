import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client

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
    jsxFactory: 'React.createElement' // Specify the JSX factory function
  }
});
