import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebaseVue from './firebase'
import ConversionTime from './plugins/conversion-time'
import ConversionCurrency from './plugins/conversion-currency'
import './assets/sass/app.scss'
import 'popper.js/dist/popper'
import 'bootstrap/dist/js/bootstrap'

Vue.use(ConversionTime)
Vue.use(ConversionCurrency)
Vue.use(firebaseVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
