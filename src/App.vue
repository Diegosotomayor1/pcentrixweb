<template>
  <div id="app">
      <p-header/>
      <transition appear name="fade">
      <router-view/>
      </transition>
      <p-footer/>
  </div>
</template>

<script>
import PHeader from './components/layout/header.vue';
import PFooter from './components/layout/footer.vue';


export default {
  name: 'app',
  components:{
    PHeader,
    PFooter
  },
}
</script>
<style lang="scss">
@import './assets/sass/main.scss';
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
