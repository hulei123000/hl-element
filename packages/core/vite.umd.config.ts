import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist/umd',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'HlElement',
      fileName: 'index',
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        /**
         * 配置模块的导出和全局变量。
         * 
         * 此段代码定义了模块的导出方式和全局变量的映射关系，以便在不同的模块系统和运行环境中正确加载和使用Vue.js。
         * - `exports` 关键字指定了模块的导出方式，这里是使用命名导出。
         * - `globals` 对象定义了全局变量的映射，这里将`vue`映射到了全局变量`Vue`，确保在不使用模块加载器的情况下也可以访问到Vue.js。
         */
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string
        },
      },
    }
  },
  
})