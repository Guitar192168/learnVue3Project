let baseURL = ''
let baseTitle = ''
if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://httpbin.org/dev'
  baseTitle = 'yjq'
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://httpbin.org/prod'
  baseTitle = 'jams'
} else {
  baseURL = 'http://httpbin.org/test'
  baseTitle = '我是name'
}

// 不允许这样写
// let name = ''
// export name
// 只能这样直接导出
export const demo = ''
// 或者先定义，然后修改完，export一个对象
// es module语法
export { baseURL, baseTitle }
