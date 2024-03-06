import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import UnoCSS from 'unocss/vite'

import VueImages from 'unplugin-vue-images/vite'


const collectionDirs = [
  'src/assets/images',
  'src/static/dark'
]

const extensions = ['jpg', 'jpeg', 'png', 'svg', 'webp', 'gif']

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
    outDir:'dist',
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
    VueImages({
      dirs: collectionDirs,
      extensions,
      compiler: 'vue3',
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
