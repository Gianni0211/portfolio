import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import Transitions from 'vue2-transitions'
import router from "./router";
import VuePageTransition from 'vue-page-transition'

 
Vue.use(VuePageTransition)
Vue.use(Transitions)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
