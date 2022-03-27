import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HYRequestConfig, HYRequestInterceptor } from './type'

class HYRequest {
  // instance: AxiosRequestConfig   axios.create创建的实例的类型 返回的不是这个   // 一开始是规定有什么类型，才能传什么类型，这样做可以拓展类型
  instance: AxiosInstance
  interceptors?: HYRequestInterceptor //可选要加在这里
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // this.interceptors.requestInterceptor((config) => {
    //   config
    // })

    // 从config中取出的拦截器，是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加全局的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局的请求成功拦截', 'config')
        return config
      },
      (err) => {
        console.log('全局的请求失败的拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局的响应成功拦截', res)
        return res
      },
      (err) => {
        console.log('全局的响应失败拦截', err)
        return err
      }
    )
    // 如何单独给某个请求加拦截？
  }

  // request(config: AxiosRequestConfig): void {
  request(config: HYRequestConfig): void {
    // 单独给某个请求加拦截
    if (config.interceptors?.requestInterceptor) {
      // 这里会给config转换一下，然后把config返回了
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      console.log(res)
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
    })
  }
}

export default HYRequest
