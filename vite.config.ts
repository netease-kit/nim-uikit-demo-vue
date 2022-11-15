import * as path from 'path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@xkit-yx', replacement: path.resolve(__dirname, './node_modules/@xkit-yx') },
    ]
  },
  server: {
    host: '127.0.0.1',
    port: 8111,
  },
  base: './',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
})
