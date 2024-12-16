import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun';
import { name } from './package.json';

export default defineConfig({
  plugins: [vue(), qiankun(name, { useDevMode: true })],
  server: {
    host: true,
    port: 7105,
  },
  root: __dirname,
})