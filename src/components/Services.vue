<template>
<div class="container" v-show="true">
<transition name="fade" mode="out-in" > 
  <back :service="service" :Return="Return" ></back>
</transition>
 <transition name="fade" mode="out-in"> 
   <div class="columns" v-if="fase == ''">
        <first-question :componentChange="componentChange"></first-question>  
  </div>
  </transition>
  <transition name="fade" mode="out-in"> 
  <div class="columns" v-if="fase == 'service'">
        <select-service :service="service" :componentChange="componentChange" :rute="rute" ></select-service>  
  </div>
  </transition>
  <transition name="fade" mode="out-in"> 
  <div class="columns" v-if="fase ==  service.reparacion" >
        <reparacion :problem="problem" :solution="solution" :DiagnosticPopup="DiagnosticPopup"></reparacion>
  </div>
  </transition>
  <transition name="fade" mode="out-in"> 
  <div class="columns"  v-if="fase == service.mantenimiento">
    <mantenimiento></mantenimiento>  
  </div>
  </transition>
  <transition name="fade" mode="out-in"> 
  <div class="columns" v-if="fase == service.repotenciamiento">
  <repotenciamiento/>
  </div>
  </transition>
  <transition name="fade" mode="out-in"> 
  <componente-pc v-if="fase == 'Componente averiado pc'"/>
  </transition>
  <transition name="fade" mode="out-in"> 
  <componente-laptop v-if="fase == 'Componente averiado laptop'"/>
  </transition>
  <transition name="fade" mode="out-in"> 
  <contact-form v-if="fase == 'Contact'"/>
  </transition>
  <transition name="fade" mode="out-in">
  <popup-urgency v-if="show_popup == true" :problem="problem" :count="count" :PopupClose="PopupClose" :TalkForExpert="TalkForExpert"/>
  </transition>
</div>

</template>

<script>
//Componentes
import FirstQuestion from './questionary/FirstQuestion';
import SelectService from './questionary/SelectService';
import Reparacion from './questionary/Reparacion';
import Mantenimiento from './questionary/Mantenimiento';
import Repotenciamiento from './questionary/Repotenciamiento.vue';
import PopupUrgency from './templates/PopupUrgency.vue';
import ComponentePc from './questionary/ComponentePc.vue';
import ComponenteLaptop from './questionary/ComponenteLaptop.vue';
import ContactForm from './questionary/ContactService.vue';
import back from './templates/back.vue';
//Vuex Mapstate
import {mapState} from 'vuex';

export default({
  
  components:{FirstQuestion, SelectService, Reparacion, Mantenimiento, Repotenciamiento, PopupUrgency, ComponentePc, ComponenteLaptop, ContactForm, back},
  data(){
    return{
      // Descripcion de la solución en popup
      problem:{title: "", description: "", price: "" },
      //Servicios de ST
      service:{
          reparacion: ["Reparacion", "src/assets/img/iconos/Icono reparar-01.svg"],
          repotenciamiento: ["Repotenciamiento", "src/assets/img/iconos/Icono upgrade-01.svg"],
          mantenimiento: ["Mantenimiento", "src/assets/img/iconos/Icono mantenimiento.svg"]
      },
      //Icono del servicio que se escogera
      icon_service:"",
      //Ver el popup
      show_popup:"false",

      solution:{},
    }
  },
  computed:{
    ...mapState('servicio',['count','fase','diagnostic_problem','popup_finish'])
  },
  methods:{
    //Cambiar Componente en las primeras rutas de elección
    componentChange(seccion ,eleccion, icon){
      this.$store.state.servicio.fase = seccion;
      this.$store.state.servicio.count.push(eleccion);
      if(icon==undefined){ this.icon_service = "" }
      return this.$store.state.servicio.fase
    },
    //Guardar la ruta en las primeras rutas de elección
    rute(eleccion){
      this.$store.state.servicio.backfase = this.$store.state.servicio.fase;
      return this.$store.state.servicio.fase = eleccion
    },
    //Popup de diagnóstico en la fase de reparación
    DiagnosticPopup(problema){
      this.problem = problema;
      if(this.problem == 'unknown'){
        this.problem = {
          title: 'Desconocido',
          description:'Cuando el problema es desconocido lo mejor es acudir a un especialista que tome hacer un diagnóstico a profundidad del equipo, para posteriormente darte las soluciones respectivas.',
          price: 50
        }
        this.show_popup = true
      }
      if(this.problem.price != "" || this.problem != 'unknown'){ this.show_popup = true }
      if(this.problem.title == "Componente averiado") {
        this.show_popup = false;
        this.$store.state.servicio.backfase = this.$store.state.servicio.fase;
        this.$store.state.servicio.fase = "Componente averiado " + this.$store.state.servicio.count[0];
        this.$store.state.servicio.count.push(this.$store.state.servicio.fase);     
      }
    },
    //Accion del boton de llamar a un experto, lo cual se direccionará a Contacto
    TalkForExpert(){
      this.$store.state.servicio.diagnostic_problem = this.problem;
      this.$store.state.servicio.backfase = this.$store.state.servicio.fase;
      this.$store.state.servicio.fase = 'Contact';
      this.$store.state.servicio.count.push(this.$store.state.servicio.fase);
    },
    PopupClose(){
      return this.show_popup = false
    },
    //Boton Retroceder
    Return(){
      this.$store.state.servicio.count.pop();
      if(this.$store.state.servicio.fase[0] == ["service"] ){
        this.$store.state.servicio.fase = [""]
      }
      if(this.$store.state.servicio.fase[0] == "Reparacion" || this.$store.state.servicio.fase == ["Mantenimiento", "img"] || this.$store.state.servicio.fase[0] == "Repotenciamiento" || this.$store.state.servicio.fase[0] == "Mantenimiento"){
           this.$store.state.servicio.fase = ["service"]
      }
      if(this.$store.state.servicio.fase == "Componente averiado pc" || this.$store.state.servicio.fase == "Componente averiado laptop"){
        this.$store.state.servicio.fase = this.service.reparacion;
      }
      return this.$store.state.servicio.fase
    },
  },
 
})
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
@import '../../node_modules/animate.css';
section{
  display: flex;
  align-items: center;
}
#second{
  display: none;
}

.title, .subtitle{
  color: $title-color;
}
.column{
  display: flex;
  align-items: center;
  justify-content: center;
}
.card{
    border-radius: 20px !important;
    transition: transform .3s;
    
}
.card:hover{
  background: $primary;
  transform: scale(1.02);
  cursor: pointer;
}
.card-content {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 25vw;
    height: 300px;
    max-width: 300px;
    
}
@media (max-width:768px){

}
</style>
