<template>
<div class="container" v-show="true">
<transition name="fade" mode="out-in" > 
  <back :service="service" :Return="Return" ></back>
</transition>
 <transition name="fade" mode="out-in"> 
   <div class="columns" v-if="$store.state.fase == ''">
        <first-question :componentChange="componentChange"></first-question>  
  </div>
  </transition>
  <transition name="fade" mode="out-in"> 
  <div class="columns" v-if="$store.state.fase == 'service'">
        <select-service :service="service" :componentChange="componentChange" :rute="rute" ></select-service>  
  </div>
  </transition>
  <transition name="fade" mode="out-in"> 
  <div class="columns" v-if="$store.state.fase ==  service.reparacion" >
        <reparacion :problem="problem" :solution="solution" :DiagnosticPopup="DiagnosticPopup"></reparacion>
  </div>
  </transition>
  <transition name="fade" mode="out-in"> 
  <div class="columns"  v-if="$store.state.fase == service.mantenimiento">
    <mantenimiento></mantenimiento>  
  </div>
  </transition>
  <transition name="fade" mode="out-in"> 
  <div class="columns" v-if="$store.state.fase == service.repotenciamiento">
  <repotenciamiento/>
  </div>
  </transition>
  <transition name="fade" mode="out-in"> 
  <componente-pc v-if="$store.state.fase == 'Componente dañado pc'"/>
  </transition>
  <transition name="fade" mode="out-in"> 
  <componente-laptop v-if="$store.state.fase == 'Componente dañado laptop'"/>
  </transition>
  <transition name="fade" mode="out-in"> 
  <contact-form v-if="$store.state.fase == 'Contact'"/>
  </transition>
  <transition name="fade" mode="out-in">
  <popup-urgency v-if="show_popup == true" :problem="problem" :count="count" :PopupClose="PopupClose" :TalkForExpert="TalkForExpert"/>
  </transition>
</div>

</template>

<script>
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

export default({
  
  components:{FirstQuestion, SelectService, Reparacion, Mantenimiento, Repotenciamiento, PopupUrgency, ComponentePc, ComponenteLaptop, ContactForm, back},
  data(){
    return{
      // Descripcion de la solución en popup
      problem:{
        title: "",
        description: "",
        price: ""        
      },
      // Recorrido de cuestionario
      //Fase de cuestionario
      //Servicios de ST
      service:{
          reparacion: ["Reparación", "src/assets/img/iconos/Icono reparar-01.svg"],
          repotenciamiento: ["Repotenciamiento", "src/assets/img/iconos/Icono upgrade-01.svg"],
          mantenimiento: ["Mantenimiento", "src/assets/img/iconos/Icono mantenimiento.svg"]
      },
      icon_service:"",
      show_popup:"false",
      solution:{},
    }
  },
  methods:{
    componentChange(seccion ,eleccion, icon){
      this.$store.state.fase = seccion;
      this.$store.state.count.push(eleccion);
      if(icon==undefined){
      this.icon_service = ""; 
      }
      return this.$store.state.fase
    },
    rute(eleccion){
      this.$store.state.backfase = this.$store.state.fase;
      return this.$store.state.fase = eleccion
    },
    DiagnosticPopup(problema){
      this.problem = problema;
      if(this.problem == 'unknown'){
        this.problem = {
          title: 'Desconocido',
          description:'Cuando el problema es desconocido lo mejor es acudir a un especialista que tome hacer un diagnóstico a profundidad del equipo, para posteriormente darte las soluciones respectivas.',
          price: 50
        },
        this.show_popup = true;
      }
      if(this.problem.price != "" || this.problem != 'unknown'){
        this.show_popup = true;
      }
      if(this.problem.title == "Componente dañado" && this.problem.price == "" && this.problem != 'unknown') {
        this.show_popup = false;
        this.$store.state.backfase = this.$store.state.fase;
        this.$store.state.fase = "Componente dañado " + this.$store.state.count[0];
        this.$store.state.count.push(this.$store.state.fase);     
      }
    },
    TalkForExpert(){
      this.$store.state.diagnostic_problem = this.problem;
      this.$store.state.backfase = this.$store.state.fase;
      this.$store.state.fase = 'Contact';
      this.$store.state.count.push(this.$store.state.fase);
    },
    PopupClose(){
      return this.show_popup = false
    },
    Return(){
      this.$store.state.count.pop();
      if(this.$store.state.fase[0] == ["service"] ){
        this.$store.state.fase = [""]
      }
      if(this.$store.state.fase[0] == "Reparación" || this.$store.state.fase == ["Mantenimiento", "img"] || this.$store.state.fase[0] == "Repotenciamiento" || this.$store.state.fase[0] == "Mantenimiento"){
           this.$store.state.fase = ["service"]
      }
      if(this.$store.state.fase == "Componente dañado pc" || this.$store.state.fase == "Componente dañado laptop"){
        this.$store.state.fase = this.service.reparacion;
      }
      return this.$store.state.fase
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
