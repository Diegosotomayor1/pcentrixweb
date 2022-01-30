<template>
<div class="modal" id="modal" ref="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
      <div class="content">
        <div class="popup-info">
          <img class="icon_popup" src="src\assets\img\popup\Técnico-01.svg" alt="">
          <h3 class="title is-3">Nuestro experto va en camino</h3>
          <p class="subtitle is-5">Tenemos la información necesaria para trabajar en tu caso. Te notificaremos apenas lleguemos a tu domicilio</p>
        </div>
      <div class="popup-buttons is-flex">
          <a class="button" href="../">Entiendo</a>
      </div>
      </div>
  </div>
  <a class="modal-close is-large" aria-label="close" href="../"></a>
</div>
</template>
<script>

</script>
<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
#modal{
  display: flex;
}
.popup-info{
    padding: 5%;
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
  width: 740px;
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
