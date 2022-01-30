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
@media (max-width:768px){
      .icon-select{
        width: 100px;
      }
      .card-content{
        height: 260px !important;
        width: 280px !important;
        padding: 30px 40px !important;
      }
      .is-flex{
        flex-direction: column;
      }
      #app::before{
        top: -98% !important;
          left: -55% !important;
          width: 200vw !important;
          height: 140vh !important;
      }
      .columns{
        margin: 0 !important;
      }
}
.columns{
      .is-flex{
        width: 100%;
        .column{
          justify-content: space-between;
        }
        @media (max-width:768px){
          .column{
            justify-content: center;
          }
        }
      }
      width: 100%;
  }
</style>
