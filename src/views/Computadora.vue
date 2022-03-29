<template>
<div class="column contenedor-full">
    <div class="columns is-vcentered contenido-full">
        <div class="mt-6">
            <h2 class="title has-text-white is-uppercase">¿Qué uso le darás?</h2>
        </div>
        <div class="column is-four-fifths mt-6">
            <div class="columns is-flex-direction-row gap-4 option-selects">
                <div class="column has-background-white	has-text-black py-6 my-5 rounded-xl select-option" @click="map(ofimatica)">
                    <h3 class="subtitle has-text-black has-text-centered">Ofimática</h3>
                    <figure class="image is-128x128 mx-auto ">
                        <img src="\src\assets\img\pc\HOME.svg">
                    </figure>
                </div>
                <div class="column has-background-white	has-text-black py-6 my-5 rounded-xl select-option" @click="map(gaming)">
                    <h3 class="subtitle has-text-black has-text-centered">Gaming/Streaming</h3>
                    <figure class="image is-128x128 mx-auto ">
                        <img src="\src\assets\img\pc\GAME.svg">
                    </figure>
                </div>
                <div class="column has-background-white	has-text-black py-6 my-5 rounded-xl select-option" @click="map(profesional)">
                    <h3 class="subtitle has-text-black has-text-centered">Profesional</h3>
                    <figure class="image is-128x128 mx-auto ">
                        <img src="\src\assets\img\pc\WORK.svg">
                    </figure>
                </div>                
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
export default {
    data(){
        return{
            ofimatica:{ title:'ofimatica'},
            gaming:{ title:'gaming'},
            profesional:{ title:'profesional'}

        }
    },
    computed:{
        ...mapState('computadora', ['eleccion','fases','fase']),
        ...mapGetters('computadora', ['eleccion','fase'])
    },
    methods:{
        ...mapMutations('computadora', ['aumentar', 'disminuir']),
        ...mapActions('computadora', ['next','prev']),
        map( eleccion ){
            this.$store.dispatch('computadora/next')
            this.$store.state.computadora.eleccion.push(eleccion)
            this.$router.push(__dirname + 'computadora/presupuesto')
        }
    },
    mounted(){
        this.$store.commit('computadora/reset', 0)
        this.$store.state.computadora.eleccion = []
    }

}
</script>
<style lang="scss">
@import 'src/assets/sass/index.scss';

</style>