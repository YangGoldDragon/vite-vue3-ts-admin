import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入注册脚本，相关文档：https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md
import 'virtual:svg-icons-register';
import 'virtual:uno.css'
import { setupStore } from "@/store/index";
import { setupRouter } from "@/router/index";


const app = createApp(App)

setupStore(app)
setupRouter(app)

app.mount('#app')

