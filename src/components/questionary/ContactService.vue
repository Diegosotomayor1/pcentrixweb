<template>
    <section class="section">
    <div class="columns container">
        <div class="column is-one-third">
            <div class="content has-text-centered">
                <h3 class="title is-3">Nuestro Proceso</h3>
                <p class="subtitle is-6">1 dia aproximadamente</p>
                <div class="slider_process">
                    <image-slider />
                </div>
            </div>
        </div>
        <div class="column contact-bg">
            <h2 class="title">Contacto</h2>
            <div class="content">
                <div class="columns">
                    <div class="column">
                        <input type="text" placeholder="Nombres y apellidos" class="input-contact" name="name">
                        <input type="text" placeholder="Teléfono" class="input-contact" name="tel">
                        <input type="mail" placeholder="Correo Electrónico" class="input-contact" name="mail">
                        <div class="content">
                            <h3 class="subtitle is-3">Detalles de recojo</h3>
                            <button class="button date fecha"><img :src="icon_fecha" alt="">Fecha</button>
                            <button class="button date hora"><img :src="icon_hora" alt="">Hora</button>
                        </div>
                        <input class="input-contact" type="text" placeholder="Introduce la ubicación de recojo">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8920696025893!2d-77.07573878462617!3d-11.98196954396217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cfcf04a6762f%3A0xd776ad6f0d7703c9!2sPcentrix!5e0!3m2!1ses!2spe!4v1634607731401!5m2!1ses!2spe" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        <input class="input-contact" type="text" placeholder="Referencia y nro de departamento o interior">
                    </div>
                    <div class="column">
                        <h3 class="subtitle is-4">Detalles del caso</h3>
                        <!--PC -->
                            <div class="columns" v-if="$store.state.count[0]=='pc'" >
                                <div class="column">
                                    <img src="src\assets\img\iconos\Icono pc-01.svg" alt="">
                                </div>
                                <div class="column" v-if="$store.state.count[3]">
                                    <h5>Diagnostico</h5>
                                    <p>Plazo: 3h</p>
                                    <h5>Especificaciones de pc:</h5>
                                    <p>{{$store.state.count[3][1].procesador}}</p>
                                    <p>{{$store.state.count[3][1].ram}}</p>
                                    <p>{{$store.state.count[3][1].system}}</p>
                                    <h5>Acción</h5>
                                    <p>{{$store.state.count[1]}}</p>
                                    <h5 v-if="$store.state.count[2]">Problema en concreto</h5>
                                    <p>{{$store.state.count[2]}} - <span style="color:#000" v-for="item in $store.state.count[3][0]">{{item}} </span></p>
                                    <h5>Repotenciamiento previo</h5>
                                    <p>{{$store.state.count[3][2]}}</p>

                                </div>
                                <div class="column" v-if="$store.state.backfase.fase == 'Mantenimiento'">
                                    <h5 v-if="!$store.state.backfase.price">Diagnostico</h5>
                                    <h5>Acción</h5>
                                    <p>Mantenimiento</p>    
                                    <p>Plazo: 1d</p>
                                    <h5>Plan:</h5>
                                    <p>{{$store.state.backfase.plan}}</p>
                                </div>
                                <div class="column" v-if="$store.state.backfase.fase == 'Repotenciamiento'">
                                    <h5>Diagnóstico</h5>
                                    <p>Plazo:3h</p>
                                    <h5>Acción</h5>
                                    <p>Repotenciamiento</p>    
                                    <p>Plazo: 1- 3 dias</p>
                                    <h5>Información:</h5>
                                    <p v-for="info in $store.state.backfase.info" :key="info">{{info}}</p>
                                </div>
                                <div class="column" v-if="$store.state.diagnostic_problem.price">
                                    <h5>Diagnostico</h5>
                                    <p>Plazo: 3h</p>
                                    <h5>Problema</h5>
                                    <p>{{$store.state.diagnostic_problem.title}}</p>
                                </div>
                            </div>
                        <!--Laptop-->
                            <div class="columns" v-if="$store.state.count[0]=='laptop'">
                                <div class="column">
                                    <img src="src\assets\img\iconos\Icono laptop-01.svg" alt="">
                                </div>
                                <div class="column" v-if="$store.state.count[3]">
                                    <h5>Diagnostico</h5>
                                    <p>Plazo: 3h</p>
                                    <h5>Marca y modelo:</h5>
                                    <p>{{$store.state.count[3][1]}}</p>
                                    <h5>Acción</h5>
                                    <p>{{$store.state.count[1]}}</p>
                                    <h5 v-if="$store.state.count[2]">Problema en concreto</h5>
                                    <p>{{$store.state.count[2]}} - <span style="color:#000" v-for="item in $store.state.count[3][0]">{{item}} </span></p>
                                    <h5>Repotenciamiento previo</h5>
                                    <p>{{$store.state.count[3][2]}}</p>
                                </div>
                                <div class="column" v-if="$store.state.backfase.fase == 'Mantenimiento'">
                                    <h5>Acción</h5>
                                    <p>Mantenimiento</p>    
                                    <p>Plazo: 1d</p>
                                    <h5>Plan:</h5>
                                    <p>{{$store.state.backfase.plan}}</p>
                                </div>
                                <div class="column" v-if="$store.state.backfase.fase == 'Repotenciamiento'">
                                    <h5>Diagnóstico</h5>
                                    <p>Plazo:3h</p>
                                    <h5>Acción</h5>
                                    <p>Repotenciamiento</p>    
                                    <p>Plazo: 1- 3 dias</p>
                                    <h5>Información:</h5>
                                    <p v-for="info in $store.state.backfase.info">{{info}}</p>
                                </div>
                                <div class="column" v-if="$store.state.diagnostic_problem.price">
                                    <h5>Diagnostico</h5>
                                    <p>Plazo: 3h</p>
                                    <h5>Problema</h5>
                                    <p>{{$store.state.diagnostic_problem.title}}</p>
                                </div>
                            </div>
                            <hr style="background: #000">
                            <div class="content is-grid">
                                <h5>Costo</h5>
                                <p class="price" v-if="!$store.state.backfase.price && !$store.state.diagnostic_problem.price">Por revisar</p>
                                <p class="price" v-if="$store.state.backfase.price">{{'S/.' + $store.state.backfase.price +'.00'}}</p>
                                <p class="price" v-if="$store.state.diagnostic_problem.price">{{'S/.' + $store.state.diagnostic_problem.price + '.00'}}</p>
                            </div>
                            <div class="content">
                                <label ><input class="checkbox" type="checkbox">Acepto los <a href="">términos y condiciones</a> de la empresa Pcentrix S.A.C</label>
                            </div>
                            <button class="button is-fullwidth submit">Enviar</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
</template>
<script>
import ComponentLaptop from '../questionary/ComponenteLaptop.vue';
import ComponentPc from '../questionary/ComponentePc.vue';
import ImageSlider from '../templates/ImageSlider.vue'

export default ({
    components:{ComponentLaptop, ComponentPc, ImageSlider},
    data(){
        return{
            componentes:[],
            icon_fecha:"../src/assets/img/iconos/Icono fecha-01.svg",
            icon_hora:"../src/assets/img/iconos/Icono horario-01.svg"
        }
    },

})
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
.columns.container{
    flex-direction: row;
    gap:50px
}
.column{
    display: block;
}
section{
  display: flex;
  align-items: center;
}
h2,h3,p,span{
    color: $secundary;
}
p {
    margin-bottom: 0 !important;
}
.slider_process{
    display: block;
    margin: 50px 0;
    .icon{
    width: 300px;
    height: 300px;
    }
    @media(max-width:600px){
        display: none;
    }
}
.contact-bg{
    padding: 30px 40px;
    border-radius: 20px;
    background: $secundary;
    color: black;
    .title, .subtitle, p{
        color: black;
    }
    h5{
        font-size: 16px;
        margin: 5px 0;
    }
    p{
        font-size: 14px;
    }
    .subtitle.is-3{
        margin-top: 20px;
    }
    .title{
    margin-bottom: 0;
    }
    .columns{
        flex-direction: row;
    }
    .column{
        align-self: flex-start;
        .columns{
            height: 360px;
        }
    }
}
.date img{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
@media(max-width: 1199px){
    .columns.container{
        flex-direction: column;
    }
}
.icon_contact{
    width: 120px;
    height: max-content;
}
.input-contact{
    width: 100%;
    margin: 10px auto;
}
.checkbox{
    margin-right: 5px;
}
.price{
    text-align: right;
}
.submit{
    color:#000;
    background: linear-gradient(45deg,$primary,$color-combinate);
    font-weight: 600;
    border: none;
    padding: 20px 25px;
    border-radius:20px
}
</style>
