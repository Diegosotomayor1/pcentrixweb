<template>
    <div class="is-flex absolute-transition">
        <div class="column is-two-fifths">
            <div>
                <h2 class="subtitle">Para empezar </h2>
                <h3 class="title">Selecciona tu equipo</h3>
                <span class="subtitle is-5">Escoge las opciones que tengan relación con 
                tu caso en particular. 
            </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content" @click="componentChange(['service'], machine.pc)">
                <div class="content">
                  <h2 class="title">{{machine.pc}}</h2>
                  <img class="icon-select" src="../assets/img/computer.svg" alt="" width="150px">
                </div>
              </div>
            </div>
          </div>
              
          <div class="column">
            <div class="card" @click="componentChange(['service'], machine.laptop)">
              <div class="card-content">
                <div class="content">
                  <h2 class="title">{{machine.laptop}}</h2>
                  <img class="icon-select" src="../assets/img/laptop.svg" alt="" width="150px">
                </div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>

export default({
    props:{machine:Object, componentChange: Function}
})
</script>
