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
    Services,    
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
@import '../../node_modules/animate';
</style>
