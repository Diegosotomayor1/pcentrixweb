<template>
<div class="modal is-active" id="modal" ref="modal" v-if="$store.state.computadora.category_select != null">
  <div class="modal-background"></div>
  <div class="modal-content program_popup">
      <div class="content p-6">
        <div class="popup-info">
          <h3 class="title is-3 text-uppercase" >Categoría {{ $store.state.computadora.category_select.title }}</h3>
          <p class="subtitle is-6">Escoge los programas que desees</p>
        </div>
        <div class="column is-flex-direction-row  has-text-centered is-centered mx-6 ">
                <div class="columns is-flex-direction-row gap-4 has-text-centered is-centered is-flex-wrap-wrap is-three-quarters">
                    <div ref="program" class="column has-background-white	has-text-black py-5 px-0 my-3 rounded-xl select-option is-one-fifth mx-auto " :class="{active:program.isActive }" v-for="program in $store.state.computadora.programs" v-show ="program.category_program_id == $store.state.computadora.category_select.id" :key="program.category_programs_id"  @click="SelectProgram(program)" >
                        <img class="img-program" :src="program.img"  alt="">
                        <h3 class="subtitle">{{program.title}}</h3>
                    </div>
                </div>
                <button class="button" @click="$store.state.computadora.popup_active=false"> Seguir seleccionando </button>  
        </div>

      </div>
  </div>
  <a class="modal-close is-large" aria-label="close" href="../"></a>
</div>
</template>
<script>
export default ({
  props:{  SelectProgram: Function},
  methods:{
    
  }
})
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
#modal{
  display: flex;
}
.program_popup{
  max-height: calc(90vh - 50px);
  overflow-x: hidden;
}
.active{
  border: 2px solid #000;
  transform: scale(1.05);
  background-color: #29B88D !important;
  color: white !important;
}
.popup-info{
    padding-bottom: 5%;
}
.modal-content{
  background: white;
  border-radius: 20px;
  color: black;
  text-align: center;
}
.title,.subtitle{
  color: black;
}
.icon_popup{
 width: 100%;
 height: 100px;
}
.popup-buttons{
    width: 100%;
    justify-content: center;
    background: #04110D;
    padding: 20px;
    margin-bottom: 40px;
    
}
.modal-background {
    background-color: #29b88da8;
    backdrop-filter: blur(3px);
}
.modal-content{
  width: 80%;
}
.button{
  background: linear-gradient(45deg, $primary, $color-combinate);
  font-weight: 600;
  padding:15px 35px ;
  border: none;
  border-radius: 20px ;
  color: #000;
  &:hover{
  background: white;
  }
}
</style>
