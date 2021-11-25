import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import bulma from '../node_modules/bulma'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faDesktop, faTruck, faCaretLeft, faArrowCircleUp, faArrowCircleDown} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faWhatsapp, faInstagram, faLinkedin, faYoutube,  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import routes from './routes'
import EventBus from './plugins/EventBus'
import store from "./store/index"

/* Iconos */
library.add(faCog);
library.add(faDesktop);
library.add(faFacebookF);
library.add(faWhatsapp);
library.add(faInstagram);
library.add(faLinkedin);
library.add(faYoutube);
library.add(faTruck);
library.add(faCaretLeft);
library.add(faArrowCircleUp);
library.add(faArrowCircleDown);


/* Router */
Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(Vuex)

const router = new VueRouter({
  routes,
  mode: 'history'
})


Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  bulma,
  store,
  render: h => h(App),
  router
})


