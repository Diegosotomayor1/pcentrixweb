<template>
    <div class="column contenedor-full">
        <div class="columns contenido-full">
            <div class="mt-6 ">
            <h2 class="title has-text-white is-uppercase">Selecciona los programas</h2>
            </div>
            <div class="column is-four-fifths mt-6">
                <div class="columns is-flex-direction-row gap-4 has-text-centered is-centered">
                    <div class="column has-background-white	has-text-black py-6 px-0 my-5 rounded-xl select-option is-one-fifth" @click="AddProgam(program.basic)">
                        <img class="img-program" src="src\assets\img\basic.png"  alt="">
                        <h3 class="subtitle">Programas básicos</h3>
                    </div>
                    <div class="column has-background-white	has-text-black py-6 px-0 my-5 rounded-xl select-option is-one-fifth" @click="AddProgam(program.adobe)">
                        <img class="img-program" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1789px-Adobe_Systems_logo_and_wordmark.svg.png"  alt="">
                        <h3 class="subtitle">Pack Adobe</h3>
                    </div>
                    <div class="column has-background-white	has-text-black py-6 px-0 my-5 rounded-xl select-option is-one-fifth" @click="AddProgam(program.programacion)">
                        <img class="img-program" src="https://w7.pngwing.com/pngs/1013/1010/png-transparent-web-development-computer-programming-logo-others-angle-web-design-text.png"  alt="">
                        <h3 class="subtitle">Pack programacion</h3>
                    </div>
                    <div class="column has-background-white	has-text-black py-6 px-0 my-5 rounded-xl select-option is-one-fifth" @click="AddProgam(program.autocad)">
                        <img class="img-program" src="https://img2.freepng.es/20190429/tww/kisspng-autocad-computer-icons-autodesk-logo-adobe-illustr-5cc69fcfdf1481.8664286615565209119137.jpg"  alt="">
                        <h3 class="subtitle">Autocad</h3>
                    </div>
                </div>
                <div class="columns is-flex-direction-row gap-4 has-text-centered is-centered">
                    <div class="column has-background-white	has-text-black py-6 px-0 my-5 rounded-xl select-option is-one-fifth">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/LOGO-CORELDRAW-GRAPHICS-SUITE.svg/1200px-LOGO-CORELDRAW-GRAPHICS-SUITE.svg.png" width="80" alt="">
                        <h3 class="subtitle">Corel Draw</h3>
                    </div>
                    <div class="column has-background-white	has-text-black py-6 px-0 my-5 rounded-xl select-option is-one-fifth">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/640px-Google_Chrome_icon_%28September_2014%29.svg.png" width="80" alt="">
                        <h3 class="subtitle">Programas básicos</h3>
                    </div>
                    <div class="column has-background-white	has-text-black py-6 px-0 my-5 rounded-xl select-option is-one-fifth">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/640px-Google_Chrome_icon_%28September_2014%29.svg.png" width="80" alt="">
                        <h3 class="subtitle">Programas básicos</h3>
                    </div>
                    <div class="column has-background-white	has-text-black py-6 px-0 my-5 rounded-xl select-option is-one-fifth">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/640px-Google_Chrome_icon_%28September_2014%29.svg.png" width="80" alt="">
                        <h3 class="subtitle">Programas básicos</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default({
    data(){
        return {
            program:{
                adobe:{title:'Adobe'},
                basic:{title:'Programas básicos'},
                programacion:{title:'Programación'},
                autocad:{title:'Autocad'}
            }
        }
    },
    methods:{
        AddProgram(programa){
            this.$store.state.computadora.eleccion.push(programa)
        }
    },
    mounted(){

    }
})
</script>

<style lang="scss">
@import 'src/assets/sass/index.scss';
.img-program{
    width: 80px;
    height: 80px;
}
</style>
