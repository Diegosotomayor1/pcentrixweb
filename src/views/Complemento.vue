<template>
    <div class="column">
        <div class="column is-flex-direction-row pop_programs p-4 has-background-white rounded-xl" v-if="$store.state.computadora.complement_select.length != 0">
            <button class="button has-background-primary has-text-weight-semibold mx-2 gap-1 " v-for="selected in $store.state.computadora.complement_select" :key="selected.category_programs_id"  @click="SelectComplement(selected)">
                <img :src="selected.img_url" width="20" alt="">
                <p class="subtitle is-7"> {{selected.model_name}}</p>
            </button>
        </div>
        <transition name="fade" mode="out-in">
        <popup-complements :SelectComplement="SelectComplement" v-show="$store.state.computadora.popup_active == true"></popup-complements>
        </transition>
        <div class="columns ">
            <div class="mt-6 ">
            <h2 class="title has-text-white is-uppercase">¿DESEAS COMPLEMENTAR TU COMPUTADORA?</h2>
            <p class="description has-text-centered">Encuentra los complementos perfectos para tu computadora</p>
            </div>
            <div class="column is-four-fifths mt-6">
                <div class="columns is-flex-direction-row gap-4 has-text-centered is-centered is-flex-wrap-wrap">
                    <div class="column has-background-white	has-text-black py-6 px-0 my-5 rounded-xl select-option is-one-fifth mx-auto" v-for="category in $store.state.computadora.category_complements" :key="category.id"  @click="SelectCategory(category)">
                        <img class="img-program" :src="category.img"  alt="">
                        <h3 class="subtitle">{{category.title}}</h3>
                    </div>
                </div>
                <div class="columns is-flex p-4">
                    <button id="cotiza" class="button has-background-primary p-5 rounded-xxl ">
                        <router-link class="has-text-black has-text-weight-bold" to="/"> Seleccionar y pagar</router-link> 
                    </button>    
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
import PopupComplements from '../components/templates/PopupComplements.vue'
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default({
    components:{PopupComplements},
    data(){
        return {
        }
    },
    computed:{
        ...mapState('computadora', ['category_select']),

    },
    methods:{
        AddComplement(complement){
            this.$store.state.computadora.eleccion.push(complement)          
        },
        SelectCategory(cat){
            console.log(cat.title)
            this.$store.state.computadora.category_complements_select = cat;
            this.$store.state.computadora.popup_active = true;
        },
        SelectComplement(compl){
        this.$store.commit('computadora/ProgramSelected', compl)
            if( this.$store.state.computadora.selected == -1 ){
                this.$store.commit('computadora/AddComplement', compl)
            }
            else{
                let el = this.$store.state.computadora.complement_select
                                .map(p => p.title)
                                .indexOf(prog.title)
                this.$store.state.computadora.complement_select.splice(el ,1) 
                }
                compl.isActive = !compl.isActive;

        }
        },
    mounted(){
       /* if( this.$store.state.computadora.eleccion.length != 2 ){
                        this.$router.push('./')
    }*/
    }
})
</script>

<style lang="scss">
@import 'src/assets/sass/main.scss';

@import 'src/assets/sass/index.scss';
.img-program{
    width: 80px;
    height: 80px;
}
#cotiza{
    border: none;
    transition: .3s transform;
    &:hover{
        transform: scale(1.1);  
    }
}
.pop_programs{
    position: fixed;
    left: 5%;
    bottom: 5%;
    z-index: 1;
    button{
        border: none;
        &::before{
        content: 'X';
        position: absolute;
        width: 20px;
        height: 20px;
        background: red;
        border-radius: 100%;
        right: -5%;
        top: -10%;
        color: white;
        font-family: cursive;
        font-size: 12px;
    }
    }
}
</style>
