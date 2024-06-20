import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// 生成类型文件
import dts from 'vite-plugin-dts';
import { readdirSync } from 'fs';
import { defer, delay, filter, map, includes } from "lodash-es";
// function getDirectoriesSync(basePath: string) {
//   console.log(basePath)
//   const entries = readdirSync(basePath, { withFileTypes: true });
//   console.log(entries)
//   return map(
//     filter(entries, (entry) => entry.isDirectory()),
//     (entry) => entry.name
//   );
// }
const COMP_NAMES = [
  'Button',
  'Icon',
]
export default defineConfig({
	plugins: [
		vue(),
		dts({
      // 读取tsconfig.build.json
			tsconfigPath: '../../tsconfig.build.json',
			// 输出类型声明文件
			outDir: 'dist/types'
		})
	],
	build: {
		outDir: 'dist/es',
		lib: {
			entry: resolve(__dirname, './index.ts'),
			name: 'HlElement',
			fileName: 'index',
			formats: ['es']
		},
		rollupOptions: {
			//
			external: [
				'vue',
				'@fortawesome/fontawesome-svg-core',
				'@fortawesome/free-solid-svg-icons',
				'@fortawesome/vue-fontawesome',
				'@popperjs/core',
				'async-validator'
			],
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
					vue: 'Vue'
				},
				assetFileNames: assetInfo => {
					if (assetInfo.name === 'style.css') return 'index.css';
					return assetInfo.name as string;
				},
        // 分包
        manualChunks(id){
          if(id.includes('node_modules')){
            return 'vendor'
          }
          if(id.includes('/packages/hooks')){
            return 'hooks'
          }
          if(id.includes('/packages/utils')){
            return 'utils'
          }
          // for (const item of getDirectoriesSync("./components.ts")) {
          //   if (includes(id, `/packages/components/${item}`)) return item;
          // }
          for (const item of COMP_NAMES) {
            if (includes(id, `/packages/components/${item}`)) return item;
          }
        }
			}
		}
	}
});
