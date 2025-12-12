import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/liquid-glass/',
  server: {
    port: 9986
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/css/common/index.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
