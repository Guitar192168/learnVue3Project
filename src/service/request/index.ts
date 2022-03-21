import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface HYRequestInterceptor {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch: (error: any) => any
  responseInterceptor: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch: (error: any) => any
}

interface HYRequestConfig extends AxiosRequestConfig {
  interceptor: HYRequestInterceptor
}

class HYRequest {
  // instance: AxiosRequestConfig   axios.create创建的实例的类型 返回的不是这个
  instance: AxiosInstance
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HYRequest
