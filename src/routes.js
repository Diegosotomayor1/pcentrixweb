import Search from './components/Search.vue'
import Computadora from './views/Computadora.vue'
import Presupuesto from './views/Presupuesto.vue'
import Programas from './views/Programas.vue'
import Pc from './views/Pc.vue'
import Complemento from './views/Complemento.vue'
import Error404 from './views/Error404.vue'

/*
import ComponentePc from './components/views/ComponentePc.vue'
import ComponenteLaptop from './components/views/ComponenteLaptop.vue'
import ContactService from './components/views/ContactService.vue'
*/
const routes = [
{ path: '/reparacion', component: Search, name: 'search'},
{ path: '/computadora/', component:Computadora, name:'computadora'},
{ path: '/computadora/presupuesto', component:Presupuesto, name:'presupuesto'},
{ path: '/computadora/programas', component:Programas, name:'programas'},
{ path: '/computadora/pc', component:Pc, name:'pc'},
{ path: '/computadora/complemento', component:Complemento, name:'complemento'},
{ path: '/:default', component: Error404, name:''}
]
export default routes