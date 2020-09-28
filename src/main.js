import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// bug
import Bus from "./plugin/bus"
Vue.use(Bus)
// EasyPreview
import EasyPreview from "easy-preview";
Vue.use(EasyPreview);

import Swiper from 'swiper';
import '../node_modules/swiper/css/swiper.min.css';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
