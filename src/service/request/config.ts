let BASE_URL = ''
let TIME_OUT = 0
if (process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://httpbin.org/dev'
  BASE_URL = 'http://httpbin.org'
  TIME_OUT = 5000
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://httpbin.org/prod'
  TIME_OUT = 5000
} else {
  BASE_URL = 'http://httpbin.org/test'
  TIME_OUT = 5000
}

// 不允许这样写
// let name = ''
// export name
// 只能这样直接导出
export const demo = ''
// 或者先定义，然后修改完，export一个对象  （先在上面定义了BASE_URL
// es module语法
export { BASE_URL, TIME_OUT }
