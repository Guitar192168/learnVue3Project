import { createApp, App } from 'vue'
import routeApp from './App.vue'
import router from '../router'
// import './service/axios.demo.ts'
import { globalRegister } from './global/index'
import HyRequest from './service'
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
HyRequest.request({
  // url: 'http://httpbin.org/post',
  url: 'get',
  method: 'GET',
  params: {
    name: '约基奇'
  },
  interceptors: {
    requestInterceptor: (config) => {
      console.log('该请求单独的  请求完成的拦截', config)
      return config
    },
    responseInterceptor: (err) => {
      console.log('该请求单独的，响应完成的拦截', err)
      return err
    }
  }
})
// // 全局引入
// // import { ElementPlus } from 'element-plus'
// import ElementPlus from 'element-plus'
// // 默认没有样式 需要引入样式
// // import 'element-plus/lib/theme-chalk/index.css'  // 旧语法
