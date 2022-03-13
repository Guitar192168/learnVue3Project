import { createApp, App } from 'vue'
import routeApp from './App.vue'
import router from '../router'
import './service/index.ts'
import { globalRegister } from './global/index'

const app: App<Element> = createApp(routeApp)

// app.use(ElementPlus)
// app.use(function (app: App): void {

// })

//  app.use()传入一个函数，那么会默认给函数内传入一个app做参数
//  app.use如果传入一个对象, 那么这个对象会默认帮你执行install的
// app.use({
//   install: function (app: App): void {}
// })

console.log(process.env.VUE_APP_BASE_URL)
// globalRegister(app)
app.use(globalRegister)
app.use(router)
app.mount('#app')

// // 全局引入
// // import { ElementPlus } from 'element-plus'
// import ElementPlus from 'element-plus'
// // 默认没有样式 需要引入样式
// // import 'element-plus/lib/theme-chalk/index.css'  // 旧语法
