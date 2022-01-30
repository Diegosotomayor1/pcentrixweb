import Search from './components/Search.vue'
import Computadora from './views/Computadora.vue'
import Presupuesto from './views/Presupuesto.vue'
import Programas from './views/Programas.vue'
/*
import ComponentePc from './components/views/ComponentePc.vue'
import ComponenteLaptop from './components/views/ComponenteLaptop.vue'
import ContactService from './components/views/ContactService.vue'
*/
const routes = [
{ path: '/reparacion', component: Search, name: 'search'},
{ path: '/computadora/', component:Computadora, name:'computadora'},
{ path: '/computadora/presupuesto', component:Presupuesto, name:'presupuesto'},
{ path: '/computadora/programas', component:Programas, name:'programas'}


]
export default routes