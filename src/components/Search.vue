<template>
  <main>
      <section class="section">
        <services/>
      </section>
  </main>
</template>

<script>
import Services from './Services.vue';

export default {
  name: 'app',
  components:{
    Services
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss';

section{
  display: flex;
  height: 90vh;
  align-items: center;
}
#app {
  font-family: 'Inria Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left  ;
  color: white;
}
.columns{
  flex-flow: column;
  align-items: center;
}

</style>
