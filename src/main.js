import Vue from 'vue'
import App from './App'
import router from './routers'
import store from './stores'
import scroller from '@/components/Scroller'
import axios from 'axios'
import loading from '@/components/Loading'
Vue.prototype.axios  = axios

Vue.component('loading',loading)
Vue.config.productionTip = false

Vue.filter('setWH', (url, arg) =>{
  return url.replace(/w\.h/, arg)
})


Vue.component('scroller',scroller) 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
