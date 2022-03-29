<template>
    <div class="column">
        <div class="columns is-vcentered">
            <div class="column pc_layout">
                <div class="columns is-flex-direction-row m-6 p-5 has-background-white rounded-xl">
                    <div class="column is-two-fifths">
                        <div class="pc_carrousel">
                            <Carousel :slides="slides" :interval="3000" controls indicators />
                        </div>
                    </div>
                    <div class="column is-half" style="z-index:1">
                        <div class="pc_model">
                            <h3 class="title is-2 has-text-black mb-2">CLOT 1</h3>
                            <div class="columns is-flex-direction-row">
                                <div class="column is-half py-0">
                                    <p class="subtitle has-text-black is-6">Módica, elegante y compacta</p>
                                </div>
                                <div class="column price py-0"><span class="subtitle is-3 has-text-weight-semibold has-text-black">S/. 2,477.00</span></div>
                            </div>
                        </div>
                        <hr style="border:1px solid #5585C5">
                        <div class="columns is-flex-direction-row gap-1 caracters ">
                            <div class="column is-half ">
                                <h3 class="subtitle has-text-weight-semibold has-text-black">ESTA PC CONTIENE:</h3>
                                <p class="subtitle is-6 has-text-weight-semibold espec has-text-black">PROCESADOR:</p>
                                <p class="subtitle is-6 has-text-black">INTEL CORE I3-10105</p>
                                <p class="subtitle is-6 has-text-weight-semibold espec has-text-black">MEMORIA RAM:</p>
                                <p class="subtitle is-6 has-text-black">RAM 8GB DDR4 2.6 GHZ</p>   
                                <p class="subtitle is-6 has-text-weight-semibold espec has-text-black">ALMACENAMIENTO:</p>
                                <p class="subtitle is-6 has-text-black">SSD 240GB M.2 PCIe NVME</p>  
                                <p class="subtitle is-6 has-text-weight-semibold espec has-text-black">GABINETE:</p>
                                <p class="subtitle is-6 has-text-black">ANTRYX XTREME MICRO XM-310</p>      
                                <p class="subtitle is-6 has-text-weight-semibold espec has-text-black">FUENTE DE PODER:</p>
                                <p class="subtitle is-6 has-text-black">COOLER MASTER ELITE V4 500W 80P+ WHITE 230V</p>                           

                            </div>
                            <div class="column">
                                <h3 class="subtitle">ESTA PC ES IDEAL PARA:</h3>
                                <div class="columns programs_pc ">
                                    <div class="column program" v-for="i in [1,2,3,4,5,6]">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png" alt="" width="80">
                                        <p class="subtitle is-6">120FPS</p>
                                    </div>
                                </div>
                                <h3 class="subtitle">CALIFICACIÓN</h3>
                                <div class="column">
                                    <div class="columns is-flex-direction-row">
                                        <img class="" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Estrella_amarilla.png" width="40" alt="" v-for="i in [1,2,3,4,5]">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="button title is-4 bg-primary button_buy rounded-xl" @click="BuyPC()">Comprar</div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>
<script>
import Carousel from '../components/templates/carrousel/Carousel.vue'
export default ({
    components:{Carousel},
    data(){
        return{
            slides: [
                        "https://lian-li.com/wp-content/uploads/2020/11/O11D-white-front.jpg",
                        "https://lian-li.com/wp-content/uploads/2020/11/PC-O11D-W_.jpg",
                        "https://lian-li.com/wp-content/uploads/2020/11/O11D-white-side45.jpg",
                    ],
        }
    },
    methods:{
        BuyPC(){
            this.$router.push('./complemento')
        }
    },
    mounted(){
    }

})
</script>
<style lang="scss">
@import 'src/assets/sass/index.scss';

.espec{
    margin-bottom:8px !important
}
.pc_layout{
    width: 100%;
    max-width: 90vw;
}
.button_buy {
    position: absolute;
    right: 8%;
    padding: 20px 5%;
    border: none;
    color: black;
}
.caracters div.is-half:first-child{
    border-left: 0 !important;
    border-bottom: 0 !important;
    border-top: 0 !important;
    border: 2px solid #5585C5;
}
.columns.programs_pc{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.price{
    text-align: right;
}
@media (max-width: 765px) {
   .caracters div.is-half:first-child{
       border: none;
    } 
    .price{
    text-align: left;
    }
    .pc_layout{
        > div{
        margin: 20px !important;
        }
        max-width: 100%;
    } 
        
}
@media (min-width:1700px) {
    div > .pc_layout{
        max-width: 1500px;
        margin: auto;
    }
    .button_buy{
        right: 12%;
    }
}




</style>
