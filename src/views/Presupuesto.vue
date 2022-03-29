<template>
<div class="column contenedor-full">
    <div class="columns is-vcentered contenido-full">
        <div class="mt-6 ">
            <h2 class="title has-text-white is-uppercase">¿Cuál es tu presupuesto?</h2>
        </div>
        <div class="column is-four-fifths mt-6">
            <div class="columns is-flex-direction-row gap-4 option-selects">
                <div class="column has-background-white	has-text-black py-6 px-0 my-5 rounded-xl select-option ">
                    <div class="titulo-presupuesto py-5 my-4 ">
                    <h3 class="title has-text-black has-text-centered is-uppercase">Básico</h3>
                    </div>
                    <div class="px-5 py-5 has-text-centered">
                        <p class="subtitle is-5 has-text-black ">Desde</p>
                        <h3 class="title has-text-black  is-uppercase is-2">S/. 2500.00</h3>
                        <button class="button px-6 py-5 btn-primary" @click="Addprice(Bajo)"> Seleccionar </button>
                    </div>
                </div>
                <div class="column bg-primary has-text-white py-6 px-0 my-5 rounded-xl select-option ">
                    <div class="titulo-presupuesto has-background-white	 py-5 my-4 ">
                    <h3 class="title c-primary has-text-centered is-uppercase">Medio</h3>
                    </div>
                    <div class="px-5 py-5 has-text-centered ">
                        <p class="subtitle is-5 has-text-white">Desde</p>
                        <h3 class="title has-text-white	  is-uppercase is-2">S/. 4500.00</h3>
                        <button class="button px-6 py-5 has-background-white has-text-black" @click="Addprice(Medio)"> Seleccionar </button>
                    </div>
                </div>
                <div class="column has-background-white	has-text-black py-6 px-0 my-5 rounded-xl select-option ">
                    <div class="titulo-presupuesto py-5 my-4 ">
                    <h3 class="title has-text-black has-text-centered is-uppercase">Alto</h3>
                    </div>
                    <div class="px-5 py-5 has-text-centered">
                        <p class="subtitle is-5 has-text-black ">Desde</p>
                        <h3 class="title has-text-black  is-uppercase is-2">S/. 6500.00</h3>
                        <button class="button px-6 py-5 btn-primary" @click="Addprice(Alto)"> Seleccionar </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
</template>
<script>
import BackComputer from '../components/templates/BackComputer.vue';
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
    components:{ BackComputer },
    data(){
        return{
            Alto:{ title: "Alto", precio: 6500 },
            Medio: { title: "Medio", precio: 4500 },
            Bajo: { title: "Bajo", precio: 2500 },
        }
    },
    computed:{
        ...mapState('computadora', ['eleccion','fases','fase']),
        ...mapGetters('computadora', ['eleccion','fase'])
    },
    methods:{
        Addprice(eleccion){
            this.$store.state.computadora.fase++;
            this.$store.state.computadora.eleccion.push(eleccion);
            console.log(this.$store.state.computadora.eleccion);
            this.$router.push(__dirname + 'computadora/programas');
        }
    },
    mounted(){
        console.log(this.$store.state.computadora.eleccion)
        if( this.$store.state.computadora.eleccion.length == 0 || this.$store.state.computadora.eleccion.length > 2 ){
            this.$router.push('./')
        }
        this.$store.commit('computadora/reset', 1);
        this.$store.state.computadora.eleccion = [this.$store.state.computadora.eleccion[0]]

    }


}
</script>
<style lang="scss">
@import 'src/assets/sass/index.scss';
.titulo-presupuesto{
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.39);
}
.btn-primary{
    background: $primary;
    color: $secundary;
&:hover{
    background: $secundary;
    color: $primary;
}
}

</style>