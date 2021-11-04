<template>
    <div class="columns absolute-transition">
    <div class="flexify">
    <div class="column is-one-third">
            <div class="content">
                <back :service="service" :count="count" :fase="fase" :Return="Return"/>
                <font-awesome-icon icon="cog" class="icon-flex" />
            </div>
        </div>
        <div class="column">
            <div class="content">
                <div class="intro_repair">
                    <h2 class="title">Diagnostiquemos tu pc</h2>
                    <p class="subtitle is-6">Sigue cada punto</p>
                </div>
                <div id="tabs-with-content">
                <div class="tabs">
                    <ul>
                        <!-- v-if=" count[0] == laptop">-->
                   <li ref="model" class="is-active model" @click="Model('modelo')"><a> 1. Ingresa la información necesaria</a></li>
                    <!-- Esto va en Repotenciamiento de PC
                        <transition name="slide">
                        <div class="tab-content modelo" v-show="showpass == 'modelo'">
                            <div class="content ">
                                <div class="is-grid">
                                <div>
                                <h3 class="title is-3">Información del sistema</h3>
                                <input type="text" id="model_system" name="model_system" placeholder="Modelo de sistema" v-model="info_model.model_system">
                                <input type="text" id="procesador" name="procesador" placeholder="Procesador" v-model="info_model.procesador">
                                <input type="text" id="system" name="system" placeholder="Sistema operativo" v-model="info_model.system">    
                                <input type="text" id="memory" name="memory" placeholder="Memoria" v-model="info_model.memory">      
                                </div>
                                <div>
                                    <h3 class="title is-3">Pantalla</h3>
                                    <input type="text" name="nombre_video" id="nombre_video" placeholder="Nombre" v-model="info_model.nombre_video">
                                    <input type="text" id="display_memory" name="display_memory" placeholder="Memoria en pantalla" v-model="info_model.display_memory">
                                </div>
                                </div>
                                <button class="despliegue" @click="tuto=!tuto"><font-awesome-icon class="circle-icon" icon="arrow-circle-down"/></button>  
                                <transition name="slide">
                                    <div class="tuto" v-show="tuto == true">
                                    </div>    
                                </transition>                  
                            </div>
                        </div>
                    </transition>-->
                    <transition name="slide">
                        <div class="tab-content modelo" v-show="showpass == 'modelo'">
                            <div class="content ">
                                <div class="is-grid">
                                <div>
                                <h3 class="title is-3">Escribe toda la información posible</h3>
                                <input type="text" id="model_system" name="model_system" placeholder="Procesador" v-model="info_model.procesador">
                                <input type="text" id="procesador" name="procesador" placeholder="Cantida de ram" v-model="info_model.ram">
                                <input type="text" id="system" name="system" placeholder="Sistema operativo" v-model="info_model.system">          
                                </div>
                                </div>               
                            </div>
                            <div>
                                <p class="subtitle is-5">¿ Terminaste de colocar la información solicitada ?</p>
                                <div class="is-grid buttons" style="width:600px">
                                    <button class="button">Si terminé</button>
                                    <button class="button">No sé que colocar</button>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <li ref="fail" class= "fail" @click="Model('fail')"><a>2. ¿Cuál es la falla que has encontrado?</a></li>
                    <transition name="slide">
                    <div class="tab-content falla" v-show="showpass == 'fail'">
                        <div class="content">
                            <p class="subtitle is-6">Los precios varían segun el modelo de tu equipo</p>
                            <div class="grid-content fails">
                                <div class="fail-item item-0">
                                   <a class="overlay" @click="Guardar('pantalla')">
                                       <div class="fail-item-title title-contain">
                                        <h3 class="fail-item-title">Pantalla</h3>
                                        <p>Costo entre: <b class="price">450 a 2000</b></p>
                                        </div>
                                   </a>
                                </div>
                                <div class="fail-item item-0">
                                   <a class="overlay" @click="Guardar('bateria')">
                                       <div class="fail-item-title title-contain">
                                        <h3 class="fail-item-title">Pantalla</h3>
                                        <p>Costo entre: <b class="price">450 a 2000</b></p>
                                        </div>
                                   </a>
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
                <a href="./contacto"><button class="button submit"> Continuar </button></a>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Back from '../templates/back.vue'

export default ({
    components:{
        Back
    },
    data(){
        return{
           modelo: "modelo",
           fail: "fail",
           showpass: "modelo",
           componentes: [],
           tuto:false,
           info_model:{
               procesador:"",
               ram:"",
               system:""               
           },
           count:[],
           service:{ },
           fase:[]
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
        Guardar(str){
            let searchComponent = this.componentes.indexOf(str);
            if(searchComponent == -1){ this.componentes.push(str) }
            else{ this.componentes.splice(searchComponent, 1) }
        },
        Return: function(){

        }
    },
    mounted: function(){
        /* Activa el componente para ver los precios */
        for(let i=0; i<document.getElementsByClassName("overlay").length; i++){
            document.getElementsByClassName("overlay")[i].addEventListener("click", ()=>{
                if(document.getElementsByClassName("overlay")[i].classList[1] == "focus-component"){
                    document.getElementsByClassName("overlay")[i].classList.remove("focus-component")
                }
                else{
                    document.getElementsByClassName("overlay")[i].classList.add("focus-component")
                }
            });
            }
    }
})
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
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
    height: 200px;
    margin: 20px 0;
    padding: 10px;
    color: $secundary ;
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
                width: 600px;
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
        width: 600px;
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
        .despliegue{
        cursor: pointer;
        position: absolute;
        bottom: -3%;
        left: 260px;
        padding: 10px 25px;
        border: none;
        background: linear-gradient(45deg,#03EEFF, #04FF92);
        border-radius:20px;
        font-weight: 500;
        }
        .tuto{
            padding: 0;
            background: url('https://aprende-web.net/css/objetos/caja3.gif');
            height: 300px;
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
        width: 600px;
        border:none;
        div.grid-content.fails{
            display: grid;
            grid-template-columns: 1fr 1fr;
            @media (max-width:768px){
                grid-template-columns: 1fr
            }
        }
        @media (max-width:768px){
            width: 90%;
        }
    }
}
.item-0{
    background-image: url(https://previews.123rf.com/images/weerapat/weerapat1505/weerapat150500119/57450932-personal-computer-burnt-due-to-electricity-short-circuit-threat-to-computer-hardware-concept.jpg);
    position: relative;
    height: 200px;
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
