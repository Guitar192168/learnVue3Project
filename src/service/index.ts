import axios, { AxiosResponse } from 'axios'
console.log(111)

// axios的实例对象
// axios
//   .get('http://123.207.32.32:8000/home/multidata')
//   .then((res: AxiosResponse<any>) => {
//     console.log(res)
//   })

// 3.axios的配置选择
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 5000
// 1. 模拟get请求
axios
  // .get('http://httpbin.org/get', {
  .get('get', {
    params: {
      name: 'yjq约基奇',
      age: 18
    },
    timeout: 3000 //可以单独做配置
  })
  .then((res) => {
    console.log(res.data)
  })

// 2. 发送post请求
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'yjq',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })
// promise本身也有类型
new Promise<string>((resolve) => {
  // 这里的泛型类型，决定了.then的回调函数的值的类型
  resolve('123')
}).then((res) => {
  console.log(res.length)
})

// 4. axios.all

// axios.all([])
// 5. axios的拦截器
// axios.interceptors.request
