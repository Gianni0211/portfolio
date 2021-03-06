import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import Transitions from 'vue2-transitions'
import router from "./router";
import VuePageTransition from 'vue-page-transition'
import VueTailwind from 'vue-tailwind'
import {
  TModal,
} from 'vue-tailwind/dist/components'

const settings = {
  't-modal': {
    component: TModal,
    props: {
      fixedClasses: {
        overlay: 'z-40 overflow-auto  scrolling-touch  left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
        wrapper: 'relative mx-auto md:top-56 w-full h-auto  z-50  px-3 py-5',
        
        modal: 'overflow-visible relative h-full   rounded',
        body: 'p-3',
        header: 'border-b p-3 rounded-t',
        footer: ' p-3 rounded-b',
        close: 'flex items-center justify-center rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50'
      },
      classes: {
        overlay: 'bg-black',
        wrapper: '',
        modal: 'bg-white  shadow',
        body: 'p-3',
        header: 'border-gray-100',
        footer: 'bg-gray-100',
        close: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
        closeIcon: 'fill-current h-4 w-4',
        overlayEnterClass: '',
        overlayEnterActiveClass: 'opacity-0 transition ease-out duration-100',
        overlayEnterToClass: 'opacity-100',
        overlayLeaveClass: 'transition ease-in opacity-100',
        overlayLeaveActiveClass: '',
        overlayLeaveToClass: 'opacity-0 duration-75',
        enterClass: '',
        enterActiveClass: '',
        enterToClass: '',
        leaveClass: 'transition ease-in opacity-100 duration-300',
        leaveActiveClass: '',
        leaveToClass: 'opacity-0 duration-75'
      },
      variants: {
        danger: {
          overlay: 'bg-red-100',
          header: 'border-red-50 text-red-700',
          close: 'bg-red-50 text-red-700 hover:bg-red-200 border-red-100 border',
          modal: 'bg-white border border-red-100 shadow-lg',
          footer: 'bg-red-50'
        }
      }
    }
  }
}

Vue.use(VueTailwind, settings)

Vue.use(VuePageTransition)
Vue.use(Transitions)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
