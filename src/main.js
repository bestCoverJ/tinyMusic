import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.less'
import '@/assets/css/custom.less'
import '@/assets/css/fonts.css'
import 'lib-flexible'
import Cookies from 'js-cookie'
import { Lazyload } from 'vant'

// import './build/utils'
Vue.use(Lazyload)

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true
})

Vue.prototype.$cookies = Cookies
Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
