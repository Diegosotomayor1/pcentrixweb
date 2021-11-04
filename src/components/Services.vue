<template>
<div class="container">
  <back :service="service" :count="count" :fase="fase" :Return="Return"></back>
 <transition appear enter-active-class="animate__animated animate__fadeIn animate__faster" leave- 
    active-class="animate__animated animate__zoomOut animate__faster" mode="out-in"> 
   <div class="columns" v-if="fase == ''">
        <first-question :componentChange="componentChange"></first-question>  
  </div>
  </transition>
  <transition appear enter-active-class="animate__animated animate__fadeIn animate__faster" leave- 
    active-class="animate__animated animate__zoomOut animate__faster" mode="out-in"> 
  <div class="columns" v-if="fase == 'service'">
        <select-service :service="service" :componentChange="componentChange" :rute="rute"></select-service>  
  </div>
  </transition>
  <transition appear enter-active-class="animate__animated animate__fadeIn animate__faster" leave- 
    active-class="animate__animated animate__zoomOut animate__faster" mode="out-in"> 
  <div class="columns" v-if="fase ==  service.reparacion" >
        <reparacion :problem="problem" :solution="solution" :DiagnosticPopup="DiagnosticPopup"></reparacion>
  </div>
  </transition>
  <transition appear enter-active-class="animate__animated animate__fadeIn animate__faster" leave- 
    active-class="animate__animated animate__zoomOut animate__faster" mode="out-in"> 
  <div class="columns"  v-if="fase == service.mantenimiento">
    <mantenimiento></mantenimiento>  
  </div>
  </transition>
  <transition appear enter-active-class="animate__animated animate__fadeIn animate__faster" leave- 
    active-class="animate__animated animate__zoomOut animate__faster" mode="out-in"> 
  <div class="columns" v-if="fase == service.repotenciamiento">
  <repotenciamiento/>
  </div>
  </transition>
  <transition name="fade">
  <popup-urgency v-if="show_popup == true" :problem="problem" :count="count" :PopupClose="PopupClose"/>
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
import back from './templates/back.vue';

export default({
  components:{FirstQuestion, SelectService, Reparacion, Mantenimiento, Repotenciamiento, PopupUrgency, back},
  data(){
    return{
      // Descripcion de la solución en popup
      problem:{
        title: "",
        description: "",
        price: ""        
      },
      // Recorrido de cuestionario
      count: [],
      //Fase de cuestionario
      fase: [],
      //Servicios de ST
      service:{
        reparacion: ["Reparación", "img"],
        repotenciamiento: ["Repotenciamiento", "img"],
        mantenimiento: ["Mantenimiento", "img"]
      },
      show_popup:"false",
      // Soluciones para Popup
      solution:
      {
        lentitud: 
        {
          title: "Lentitud",
          description: "Pueden ser varios los  motivo por el que un computador disminuye su rendimiento. Es necesario hacer un descarte.",
          price: 50
        },
        componente_dañado:
        {
          title: "Componente dañado",
          description: "",
          price: ""
        },
        windows_error:
        {
          title: "Error Windows",
          description: "En este punto, la opción mas recomendable es formatear y reinstalar Windows desde cero. Se hará un backup de tu información.",
          price: 50
        },
        programas:
        {
          title: "Errores en programas",
          description: "El equipo puede haber estado expuesto a virus de distintos tipos. Es necesario hacer un descarte ",
          price: 50
        }
      }
    }
  },
  computed:{
  },
  methods:{
    componentChange(seccion ,eleccion){
      this.fase = seccion;
      this.count.push(eleccion); 
      return this.fase
    },
    rute(eleccion){
      this.backfase = this.fase;
      return this.fase = eleccion
    },
    DiagnosticPopup(problema){
      this.problem = problema;
      if(this.problem.price != ""){
        return this.show_popup = true
      }
      else if(this.problem.title == "Componente dañado") {
        window.location.href = "reparacion/componente-" + this.count[0];
      }
    },
    PopupClose(){
      return this.show_popup = false
    },
    Return(){
      this.count.pop();
      if(this.fase[0] == ["service"] ){
        this.fase = [""]
      }
      if(this.fase[0] == "Reparación" || this.fase == ["Mantenimiento", "img"] || this.fase[0] == "Repotenciamiento" || this.fase[0] == "Mantenimiento"){
           this.fase = ["service"]
      }
      return this.fase
    },
  },
 
})
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
@import '../../node_modules/animate';
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
