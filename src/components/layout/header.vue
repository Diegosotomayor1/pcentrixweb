<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <h1 class="title">PCENTRIX</h1>
    </router-link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

 <div id="navbarBasicExample" class="navbar-menu" >
    <div class="navbar-start">
    </div>

    <div class="navbar-end">
      <router-link to="/reparacion/componente-laptop" class="navbar-item">Inicio</router-link>
      <router-link to="/view" class="navbar-item">Example View</router-link>
      <a href="" class="navbar-item">Nuestro proceso</a>
      <a href="" class="navbar-item">Preguntas frecuentes</a>
      <div class="navbar-item has-dropdown is-hoverable">
        
        <a href="" class="navbar-link">Cotizar</a>
        <div class="navbar-dropdown">
            <a href="" class="navbar-item is-flex"><font-awesome-icon class="icon" style="color:white;stroke: black;
              stroke-width: 8%;" icon="cog"/><p class="item-text">Computadora</p></a>
            <a href="/reparacion" class="navbar-item is-flex"><font-awesome-icon  class="icon" icon="desktop"/><p class="item-text">Reparación</p></a>
        </div>

      </div>
    </div>
 </div>

</nav>
</template>
<script>
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>


<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
img{
    width: 90px;
    height: 80px;
    max-width: 100%;
    max-height: 100%;
}
.navbar{
    background: transparent;
    padding: 15px 5%;
}
router-link{
  @extend a;
}
a{
  color: white;
}
.navbar-item:focus, .navbar-item:focus-within, .navbar-item:hover, .navbar-item.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, .navbar-link.is-active{
  background: transparent;
  color:$primary
}
h1{
  color:$secundary
}
.navbar-dropdown .navbar-item{
  color: black

}
.navbar-link{
  font-weight: bold;
  background: $primary;
  color: #000;
  border-radius: 5px;
  margin-left:10px
}:not(.is-arrowless)::after{
  border-color:#000
}
.icon{
  margin-right: 10px ;
  text-align: left;
  width: 18px;
}
.item-text{
  display: flex;
  text-align: left;
}
.is-flex{
  flex-direction: row;
}
@media (max-width:1064px){
  .navbar-item, .navbar-link{
    color: #000;
  }
  .navbar-link{
  color: $primary;
  border:none;
  margin-left:0 ;
  background: $secundary;
  }:not(.is-arrowless)::after{
  border-color:$primary
  }
}
</style>