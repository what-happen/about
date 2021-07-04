import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './assets/js/router.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/styles/iconfont.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import jquery from 'jquery'
Vue.prototype.$ = jquery
Vue.use(VueAwesomeSwiper)


Vue.use(VueRouter)
Vue.use(MintUI)
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router:router
})
