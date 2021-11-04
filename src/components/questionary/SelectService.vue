<template>
    <div class="is-flex absolute-transition">
        <div class="column">
            <div class="card" @click="componentChange(rute(service.reparacion),service.reparacion[0])">
              <div class="card-content">
                <div class="content">
                  <h2 class="title">{{ service.reparacion[0] }}</h2>
                  <img class="icon-select" src="../../assets/img/simbolo-de-destornillador-y-llave.svg" alt="" width="150px">
                </div>
              </div>
            </div>
          </div>
                  <div class="column">
            <div class="card" @click="componentChange(rute(service.mantenimiento), service.mantenimiento[0])">
              <div class="card-content">
                <div class="content">
                  <h2 class="title">{{ service.mantenimiento[0] }}</h2>
                  <img class="icon-select" src="../../assets/img/escoba.svg" alt="" width="150px">
                </div>
              </div>
            </div>
          </div>
              
          <div class="column">
            <div class="card" @click="componentChange(rute(service.repotenciamiento), service.repotenciamiento[0])">
              <div class="card-content">
                <div class="content">
                  <h2 class="title">{{ service.repotenciamiento[0] }}</h2>
                  <img class="icon-select" src="../../assets/img/boton-de-flecha-hacia-arriba.svg" alt="" width="150px">
                </div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>

export default({
    props:{
        service: Object,
        rute: Function,
        componentChange: Function
    }, 
})
</script>
<style lang="scss" scoped>
@import 'src/assets/sass/main.scss';
h2{
  color: #000;
}
@media (max-width:1024px){
  h2.title{
    font-size: 1.5em;
  }
}
</style>
