import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import './assets/style/global.scss'

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
