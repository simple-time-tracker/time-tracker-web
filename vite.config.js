import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8180',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './vite-tests-setup.js',
  },
});
