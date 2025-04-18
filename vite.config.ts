import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// 创建svgIcon插件，相关文档见：https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import UnoCSS from 'unocss/vite'

const { resolve } = path
const pathSrc = resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false
        filepath: './.eslintrc-auto-import.json', // 指定自动导入函数 eslint 规则的文件
      },
      dts: resolve(pathSrc, 'types', 'auto-imports.d.ts'), // 指定自动导入函数TS类型声明文件路径
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({}),
      ],
      vueTemplate: true, // 是否在 vue 模板中自动导入
    }),
    Components({
      dts: resolve(pathSrc, 'types', 'components.d.ts'), // 指定自动导入组件TS类型声明文件路径
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'], // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
        }),
      ],
    }),
    Icons({
      // 自动安装图标库
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]', // dir是以iconDirs作为根目录，下面的子目录。name是文件名
    }),
    UnoCSS(),
  ],
  css: {
    // CSS 预处理器
    preprocessorOptions: {
      //define global scss variable
      scss: {
        javascriptEnabled: true,
        additionalData: `@use "@/styles/index.scss" as *;`,
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://www.path1.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    port: 3001, // 修改为你需要的端口号
  },
})
