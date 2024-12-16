import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import { name } from './package.json';

const port = 7105;

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port,
    strictPort: true, // Garante que o Vite use exatamente o `port` especificado.
    hmr: true, // Habilita Hot Module Replacement (HMR).
    headers: {
      'Access-Control-Allow-Origin': '*', // Permite CORS.
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Cria um alias para a pasta src.
    },
  },
  build: {
    outDir: 'dist', // Define a saída de build como "dist".
    assetsDir: 'static', // Define a pasta de assets como "static".
    cssCodeSplit: true, // Garante hash nos arquivos de estilo.
    rollupOptions: {
      output: {
        format: 'umd', // Define o formato como UMD.
        entryFileNames: `${name}-[name].js`, // Nome dos arquivos com base no package name.
        chunkFileNames: `${name}-[name].js`,
        assetFileNames: `${name}-[name].[ext]`,
      },
    },
  },
});
