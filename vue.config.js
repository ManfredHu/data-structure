module.exports = {
  configureWebpack: {
    devServer: {
      // 启动时打开浏览器
      open: true,
      // 打开浏览器时的路径
      openPage: 'index',
      // 服务端口
      port: 8080,
      // 设置代理
      proxy: null
    },
    devtool: 'source-map'
  },
  publicPath: '/data-structure/'
}
