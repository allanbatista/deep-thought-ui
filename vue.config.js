module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import '~element-ui/lib/theme-chalk/index.css';
        @import "@/assets/scss/_main.scss";
        `
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
