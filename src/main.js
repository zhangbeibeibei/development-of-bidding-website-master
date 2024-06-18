import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/route'
import store from './store/index'
const app=createApp(App)
app.use(ElementPlus).use(store).use(router).mount('#app')
