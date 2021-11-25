<template>
    <div class="columns absolute-transition">
    <transition appear enter-active-class="animate__animated animate__fadeIn animate__slow">
    <div class="flexify">
    <div class="column is-one-quarter" style="align-items:start">
            <div class="content">
                <transition appear enter-active-class="animate__animated animate__zoomInDown animate__slow ">
                <img src="src\assets\img\iconos\Icono mantenimiento.svg" class="icon-flex" alt="">
                </transition>
            </div>
        </div>
        <div class="column ">
            <div class="content">
                <div class="intro_repair">
                    <h2 class="title">Diagnostiquemos tu pc</h2>
                    <p class="subtitle is-6">Sigue cada punto</p>
                </div>
                <div id="tabs-with-content">
                <div class="tabs">
                    <ul>
                        <!-- v-if=" count[0] == laptop">-->
                   <li ref="model" class="is-active model" @click="Model('modelo')"><a> 1. Información</a></li>
                        <transition name="slide">
                        <div class="tab-content modelo" v-show="showpass == 'modelo'">
                            <p>Los mantenimientos preventivos ayudan a extender el tiempo de vida de tu equipo<br> y se recomienda hacerse cada 6 meses.</p>
                            <p>Los mantenimientos no solucionan necesariamente las fallas.<br>Si tienes dudas mejor solicita un diagnóstico.</p>
                            <div class="buttons">
                                <button class="button-underline" @click="ContactMaintenance()">Solicitar un diagnostico</button>
                                <button class="button button-degrade" @click="Model('fail')">Mantenimiento</button>
                            </div>
                        </div>
                        </transition>
                    <li ref="fail" class= "fail" @click="Model('fail')"><a>2. Escoge tu paquete</a></li>
                    <transition name="slide">
                    <div class="tab-content falla" v-show="showpass == 'fail'">
                        <div class="columns">
                            <div class="is-flex">
                                <div class="column" @click="ContactMaintenance('Basico', 90)">
                                <div class="dark-card">
                                    <div class="content">
                                        <h2 class="title">
                                            Paquete básico
                                        </h2>
                                        <ul>
                                            <li>Limpieza de carcasa.</li>
                                            <li>Limpieza por separado de cada pieza.</li>
                                            <li>Cambio de pasta térmica.</li>
                                            <li>Documento informativo de <br>posibles mejoras a futuro para tu equipo.</li>
                                        </ul>
                                        <br>
                                        <h3 class="title" style="margin-top: 20px;">S/. 90.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="column" @click="ContactMaintenance('Completo', 150)">
                                <div class="dark-card">
                                    <div class="content">
                                        <h2 class="title">
                                            Paquete completo
                                        </h2>
                                        <ul>
                                            <li>Limpieza por separado de cada pieza.</li>
                                            <li>Cambio de pasta térmica.</li>
                                            <li>Documento informativo de posibles<br> mejoras a futuro.</li>
                                            <li>Formateo y reinstalación de Windows.</li>
                                            <li>Instalación de apps a pedido.</li>
                                        </ul>
                                        <h3 class="title">S/. 150.00</h3>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </transition>
                    </ul>
                </div>
                <div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </transition>
    </div>

</template>
<script>
import Back from '../templates/back.vue'

export default ({
    components:{
        Back
    },
    props:{ Contactform: Function },
    data(){
        return{
           modelo: "modelo",
           fail: "fail",
           showpass: "modelo",
           tuto:false,
           service:{ },
           end: false,
        }
    },
    methods:{
        /*Barra de despliegue*/
        Model(e) {
            if(e == 'modelo'){                   
                this.$refs.model.classList.add("is-active");
                this.$refs.fail.classList.remove("is-active");
                this.showpass = 'modelo'
            }
            else{
                this.$refs.model.classList.remove("is-active");
                this.$refs.fail.classList.add("is-active");
                this.showpass = 'fail'
            }
        },
        ContactMaintenance(plan, price){
            this.$store.state.backfase = {
                fase: 'Mantenimiento',
                count: this.$store.state.count,
                plan,
                price,
            };
            this.$store.state.fase = 'Contact';
        },
    },

})
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
@import '../../../node_modules/animate.css';

.dark-card{
    margin: 50px 0px;
    display: ruby-base;
    div{
        padding: 25px;
        border: 2px solid $primary;
        text-align: center;
        border-radius: 20px;
        background: black;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.404);
        transition: .3s transform;
        height: 420px;        
        cursor:pointer
    }
    div:hover{
        transform: scale(0.95);
    }
    
}
.title{
    color:black
}
ul{
    text-align: left !important;
    list-style-type: disc;
}
li{
    display: list-item;
    font-size: 15px;
    margin-bottom: 20px ;
}
ul > li::marker{
    color: $primary;
}
h2.title{
    color: $secundary;
    font-size: 30px;
}
h3.title{
    color: $primary;
    font-size: 40px;
    margin-top: auto;
}
.is-flex{
    width: 100%;
}

.circle-icon{
    height: 2em;
    width: 2em;
}
.submit{
    color:#000;
    background: linear-gradient(45deg,$primary,$color-combinate);
    font-weight: bold;
    border: none;
    padding: 20px 25px;
    border-radius:20px
}
.icon-flex{
    width: 100% ;
    height: 250px;
    margin: 20px 0;
    padding: 10px;
    filter: invert(1);
    @media(max-width:768px){
        display: none;
    }
}
.subtitle{
    color: $secundary;
}
.flexify{
    display: flex;
    width: 80%;
    margin: 50px 5%;
    @media(max-width:768px){
        flex-direction: column;
        width: 95%;
        margin-left: 10px;
    }
}
.title{
    font-size: 30px;
    color: $secundary ;
}
.tabs{
    ul{
            flex-direction: column;
            margin: 20px 0;
            border: none;
            width: 100%;
            li{
                width: 100%;
                a{
                width: 750px;
                color:gray;
                justify-content: left;
                border-bottom-color: $primary;
                font-size: 25px;
                transition: .3s border;
                transition: .3s color;
                @media(max-width:768px){
                        font-size: 18px;
                        width: 100%;
                }
                @media(max-width:768px){
                    width: 90%;
                }
                &:hover{
                    color:$secundary;
                    background: none;
                    border-bottom: 1px solid white
                }
                }
            }
            li.is-active a{
                    color: $secundary
            }
             
    }
}
.modelo{
    width: 100%;
    justify-content: left;
    height: auto;
    margin: 20px 0;
    position: relative;
    @media(max-width:768px){
        width: 100%;
    }
    .is-grid{
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        div{
            @media(max-width:500px){
                color: #000;
                width: 280px !important;
                .title.is-3{
                    font-size: 18px;
                }
                padding: 0 !important;
            }
        }
        @media(max-width:500px){
            padding: 10px !important;
        }
    }
    .content {
        padding: 10px;
        background-color: $secundary;
        width: 750px;
        border: 4px solid $primary;
        border-radius: 20px;
        @media (max-width:768px){
           width: 90%; 
           flex-direction: column;    
        }
        div{
            display: flex;
            padding: 20px;
            flex-direction: column;
            @media(max-width:768px){
                width: 100%;
            }
        }
    }
    h3{
        font-size: 20px;
        color:#000;
    }
    .icon{
        width: 100%;
        height: 150px;        
    }
    
}

.buttons{
    flex-direction: row !important;
    .button{
    color: $secundary;
    background: black;
    padding: 10px 20px;
    margin: 0 10px;
    border: 2px solid $primary;
    border-radius: 5px;
    @media(max-width:768px){
        width: 80%;
    }
    }
    .button-degrade{
        background: linear-gradient(45deg,$primary,$color-combinate) !important;
        color: #000;
    }
    .button-underline{
        background: transparent;
        border: none;
        color: white;
        text-decoration: underline;
    }
    @media (max-width:768px){
        width: 100% !important;
    }
   
}
.falla{
    width: 100%;
    height: 100%;
    @media(max-width:768px){
        width: 100%;
    }
    div.content{
        width: 360px;
        ul li{
            margin-left: 55px;
        }
        @media (max-width:768px){
            width: 90%;
        }
    }
}
.item-0{
    position: relative;
    height: 172px;
    margin:10px;
    background-size: cover;
    border-radius: 20px;
    a.overlay{
    display: flex;
    content-visibility: hidden;
    color: $secundary;
    padding: 20px;
    position: relative;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
    transition: .33s background-color;
    border-radius: 20px;
    .fail-item-title{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h3{
        text-align: center;
        position: relative;
        color:$secundary;
    }
    p{
        position: relative;
    }
    b{
        color:$primary
    }
    &:hover{
        background: black;
        content-visibility: visible;     
        border: 2px solid $primary   
    }
    }
}
.focus-component{
        background: black;
        content-visibility: visible !important;   
        border: 2px solid $primary
}
/*
.focus-component{
    &:before {
	content:'';
	position: absolute;
    top: 0;
	bottom: 0;
	left: 0;
	right: 0;
    border-radius: 20px;
	background-color: rgb(0, 0, 0);
    border: 2px solid $primary;
    }
}*/
</style>
