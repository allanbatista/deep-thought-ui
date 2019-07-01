import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Tailwindcss
// docs: https://tailwindcss.com/
import 'tailwindcss/dist/tailwind.min.css'

// ElementUI
// docs: https://element.eleme.io/
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/pt-br'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
