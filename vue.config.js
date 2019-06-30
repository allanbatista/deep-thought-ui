module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Tailwindcss
        // docs: https://tailwindcss.com/
        data: `
        @import "~element-ui/lib/theme-chalk/index.css";
        @import "~tailwindcss/dist/tailwind.min.css";
        `
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
