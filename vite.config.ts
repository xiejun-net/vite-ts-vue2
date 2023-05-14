import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';
import vue2Jsx from '@vitejs/plugin-vue2-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'h5_001',
    rollupOptions: {
      input: {
        index: 'index.html',
        setting: 'static/setting.html'
      },
    },
  },
  plugins: [
    vue2(),
    vue2Jsx(),
    legacy({
      targets: ['ie >= 8'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
