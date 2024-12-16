import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import qiankun from 'vite-plugin-qiankun';
import { name } from './package.json';

const port = 7105;

export default defineConfig({
  plugins: [vue(), qiankun(name, { useDevMode: true })], // Configura o plugin
  server: {
    port,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        format: 'umd',
        name: name,
        entryFileNames: `${name}-[name].js`,
        chunkFileNames: `${name}-[name].js`,
        assetFileNames: `${name}-[name].[ext]`,
      },
    },
  },
});
