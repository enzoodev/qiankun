import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun';
import { name } from './package.json';

export default defineConfig({
  plugins: [
    vue({ 
      template: { transformAssetUrls },
    }),
    qiankun(name, { useDevMode: true }),
    quasar({
      sassVariables: '/src/styles/_quasar-variables.scss'
    }),
  ],
  server: {
    port: 7105,
  },
})
