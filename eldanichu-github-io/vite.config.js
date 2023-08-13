import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import UnoCSS from 'unocss/vite'
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen:false,
  server:{
    host:true,
    port:7777,
    // to exit if port is already in use
    strictPort:true,
    https:false
  },
  build:{
    assetsDir:'static',
    outDir:'dist',
    chunkSizeWarningLimit:'200',
    rollupOptions:{
      output:{
        // manualChunks:{
        //   vue:['vue'],
        //   pinia:['pinia'],
        //   vueRouter:['vue-router'],
        // },
        manualChunks(id) {
            if (id.includes('node_modules')) {
                return id
                    .toString()
                    .split('node_modules/')[1]
                    .split('/')[0]
                    .toString();
            }
        }
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS({

    }),
    ViteYaml()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
