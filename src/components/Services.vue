<template>
<div class="container">
  <back :service="service" :count="count" :fase="fase" :Return="Return"></back>
  <transition name="fade">
  <div class="columns" v-if="fase == ''">
        <first-question :machine="machine" :componentChange="componentChange"></first-question>  
  </div>
  </transition>
  <transition name="fade">
  <div class="columns" v-if="fase == 'service'">
        <select-service :service="service" :componentChange="componentChange" :rute="rute"></select-service>  
  </div>
  </transition>
  <transition name="fade">
  <div class="columns" v-if="fase ==  service.reparacion" >
        <reparacion :problem="problem" :solution="solution" :DiagnosticPopup="DiagnosticPopup"></reparacion>
  </div>
  </transition>
  <transition name="fade">
  <div class="columns"  v-if="fase == service.mantenimiento">
    <mantenimiento></mantenimiento>  
  </div>
  </transition>
  <transition name="fade">
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
import FirstQuestion from './FirstQuestion';
import SelectService from './SelectService';
import Reparacion from './Reparacion';
import Mantenimiento from './Mantenimiento';
import Repotenciamiento from './Repotenciamiento.vue';
import PopupUrgency from '../templates/PopupUrgency.vue';
import back from './back.vue';

export default({
  components:{FirstQuestion, SelectService, Reparacion, Mantenimiento, Repotenciamiento, PopupUrgency, back},
  data(){
    return{
      machine:{
        laptop: "LAPTOP",
        pc: "PC"
      },
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
      return this.fase = eleccion
    },
    DiagnosticPopup(problema){
      this.problem = problema;
      if(this.problem.price != ""){
        return this.show_popup = true
      }
      else if(this.problem.title == "Componente dañado") {
        window.location.href = "/"
      }
    },
    PopupClose(){
      return this.show_popup = false
    },
    Return(){
      this.count.pop();
      this.fase = count[count.length - 1];
      return count
    }
  }
  
})
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
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
    height: 350px;
    padding: 20px 50px;
    
}
@media (max-width:768px){

}
</style>
