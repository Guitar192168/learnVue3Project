// service 统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const HyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求拦截成功', config)
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log(error, 'error请求失败，拦截成功')
      return error
    },
    responseInterceptor: (config) => {
      console.log(config, '响应拦截成功')
      return config
    },
    responseInterceptorCatch: (error) => {
      console.log(error, '响应失败 拦截成功')
      return error
    }
  }
})
// hyRequest({})
export default HyRequest
