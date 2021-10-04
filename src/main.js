import Vue from 'vue'
import App from './App.vue' 
import bulma from '../node_modules/bulma'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faDesktop, faTruck, faCaretLeft} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faWhatsapp, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router' 
import routes from './routes'
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

/* Router */
Vue.use(VueRouter)
const router = new VueRouter({routes})

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  bulma,
  render: h => h(App),
  router
})
