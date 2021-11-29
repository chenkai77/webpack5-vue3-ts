import { createApp } from 'vue'
import App from './App.vue'
import './styles/reset.scss'
import './styles/elementPlus.scss'
import router from '@/router/index'
import store from '@/store/index'
import introduceElement from '@/utils/vue/element-plus'
import registeredDirective from '@/utils/directive'
import svgIconRegistered from '@/utils/vue/svg-component'
const app = createApp(App)
// 按需引入element ui组件
introduceElement(app)
// 注册指令
registeredDirective(app)
// svg Sprites图
svgIconRegistered(app)
app.use(router)
app.use(store)
app.mount('#app')
