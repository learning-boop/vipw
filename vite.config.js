import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' keeps asset paths relative, so the built site works
// from a domain root or a sub-folder on cPanel without changes.
export default defineConfig({
  plugins: [react()],
  base: './',
});
