const path = require('path')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-element-plus/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  outputDir: 'build',
  // publicPath: './',
  // 通过webpack-merge合并入最终的配置
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
    // plugins: [
    //   // require('unplugin-element-plus/webpack')({
    //   //   useSource: false
    //   // }),
    // ],
    // plugins:[
    //   AutoImport({
    //     resolvers: [ElementPlusResolver()],
    //   }),
    //   Components({
    //     resolvers: [ElementPlusResolver()],
    //   }),
    // ],
  }
  // 这种是覆盖的
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 链式的操作
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
