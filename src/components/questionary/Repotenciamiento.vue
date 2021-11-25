<template>
    <div class="columns absolute-transition">
    <transition appear enter-active-class="animate__animated animate__fadeIn animate__slow">
    <div class="flexify">
    <div class="column is-one-quarter" style="align-items:start">
            <div class="content">
                <transition appear enter-active-class="animate__animated animate__zoomInDown animate__slow ">
                <img src="src\assets\img\iconos\Icono upgrade-01.svg" class="icon-flex" alt="">
                </transition>
            </div>
        </div>
        <div class="column ">
            <div class="content">
                <div class="intro_repair">
                    <h2 class="title">Repotencia tu equipo</h2>
                    <p class="subtitle is-6">Sigue cada punto</p>
                </div>
                <div id="tabs-with-content">
                <div class="tabs">
                    <ul>
                        <!-- v-if=" count[0] == laptop">-->
                   <li ref="model" class="is-active model" @click="Model('modelo')"><a> 1. Información</a></li>
                        <transition name="slide">
                        <div class="tab-content modelo" v-show="showpass == 'modelo'">
                            <p v-if="$store.state.count[0] == 'laptop'">Los repotenciamientos en laptops pueden variar dependiendo de la computadora que tengas <br> sea la marca, gama de producto y antiguedad.</p>
                            <p v-if="$store.state.count[0] == 'laptop'">El precio podría variar desde los 180 soles </p>
                            <p v-if="$store.state.count[0] == 'pc'">Los repotenciamientos en pcs pueden variar dependiendo de la computadora que tengas <br> sea la marca, gama de producto y antiguedad.</p>
                            <p v-if="$store.state.count[0] == 'pc'">El precio podría variar desde los 140, 200 o 350 soles dependiendo de la tecnología<br> que use tu computadora</p>

                            <div class="buttons">
                                <button class="button button-degrade" @click="Model('fail')">Estoy de acuerdo</button>
                            </div>
                        </div>
                        </transition>
                    <li ref="fail" class= "fail" @click="Model('fail') " v-if="$store.state.count[0] == 'laptop'"><a>2. ¿Cuál es el modelo de tu laptop?</a></li>
                    <li ref="fail" class= "fail" @click="Model('fail')" v-if="$store.state.count[0] == 'pc'"><a>2. Ingresa la información necesaria</a></li>
                    <transition name="slide">
                    <div class="tab-content falla" v-show="showpass == 'fail'">
                        <div class="columns" v-if="$store.state.count[0] == 'laptop'">
                            <div class="is-flex">
                                <div class="content upgrade-model is-flex">
                                    <div class="model-image">
                                        <h2 class="subtitle is-5">Encuentra el modelo</h2>
                                        <img src="src\assets\img\iconos\laptop-model.svg" alt="">
                                    </div>
                                    <div class="model-info">
                                        <h2 class="subtitle is-5">
                                            Información de la laptop
                                        </h2>
                                        <p class="subtitle is-6">Marca y modelo de laptop</p>
                                        <input type="text" name="model" class="model-info" placeholder="Lenovo Ideapad 330S" v-model="info_laptop.model_laptop">
                                        <p class="subtitle is-6"><br>¿Tu equipo ha sido repotenciado antes?</p>
                                        <div class="buttons">
                                            <button ref="yes" class="button" @click="info_laptop.repotenciado='Si'; Check(true)">Si</button>
                                            <button ref="no"class="button" @click="info_laptop.repotenciado='No'; Check(false)">No</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="columns" v-if="$store.state.count[0] == 'pc'">
                            <div class="is-flex">
                                <div class="content pc-upgrade">
                                    <div class="pc-info columns">
                                        <div class="column">
                                        <h2 class="subtitle is-5">
                                            Información de sistema
                                        </h2>
                                        <input type="text" name="model" class="model-info" placeholder="Modelo de sistema " v-model="info_pc.model_system">
                                        <input type="text" name="model" class="model-info" placeholder="Procesador" v-model="info_pc.procesador">
                                        <input type="text" name="model" class="model-info" placeholder="Sistema operativo" v-model="info_pc.system">
                                        <input type="text" name="model" class="model-info" placeholder="Memory" v-model="info_pc.memory">            
                                        </div>
                                        <div class="column">
                                        <h2 class="subtitle is-5">
                                            Pantalla
                                        </h2>
                                        <input type="text" name="model" class="model-info" placeholder="Nombre" v-model="info_pc.name_graphic">
                                        <input type="text" name="model" class="model-info" placeholder="Memory VRAM" v-model="info_pc.memory_graphic">                                                                           
                                        </div>
                                    </div>
                                    <transition name="slide">
                                    <div class="tuto" v-show="tuto">
                                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/Rr7Z_H1BnVM" title="" frameborder="0" allow="accelerometer; autoplay; autobuffer; preload ;encrypted-media; gyroscope; " allowfullscreen></iframe>
                                    </div>
                                    </transition>
                                    <div class="desplegable">
                                        <button class="button submit btn-desplegable" @click="tuto=!tuto" v-show="tuto==true"><font-awesome-icon icon="arrow-circle-up"/></button>
                                        <button class="button submit btn-desplegable" @click="tuto=!tuto" v-show="tuto==false"><font-awesome-icon icon="arrow-circle-down"/></button>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </transition>
                    </ul>
                </div>
                <button class="button submit" @click="ContactUpgrade()"> Continuar </button>
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
    data(){
        return{
           modelo: "modelo",
           fail: "fail",
           showpass: "modelo",
           tuto:false,
           service:{ },
           info_pc:{
               model_system:"",
               procesador:"",
               system:"",
               memory:"",
               name_graphic:"",
               memory_graphic:""
           },
           info_laptop:{
            model_laptop:"",
            repotenciado:"",
           },
           end: true,
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
        Check(boolean){
            if(boolean){
                this.$refs.yes.classList.add("active-button")
                this.$refs.no.classList.remove("active-button")
            }
            else{
                this.$refs.yes.classList.remove("active-button")
                this.$refs.no.classList.add("active-button")
            }
        },
        ContactUpgrade(){
            let valid=[];
            if(this.$store.state.count[0]=='pc'){
                for (let val in this.info_pc){
                    if(this.info_pc[val] == "" || this.info_pc[val] == undefined){
                            this.end = false;
                            valid.push(false) 
                    }
                    else{
                        valid.push(true)
                    }
                }
            }
            if(this.$store.state.count[0]=='laptop'){
                for (let val in this.info_laptop){
                    if(this.info_laptop[val] == "" || this.info_laptop[val] == undefined){
                            this.end = false;
                            valid.push(false) 
                    }
                    else{
                        valid.push(true)
                    }
                }
            }
            console.log(valid)
            if(valid.indexOf(false) == -1){   
                    if(this.$store.state.count[0]=='pc'){
                    this.$store.state.backfase = {
                        fase: 'Repotenciamiento',
                        count: this.$store.state.count,
                        info: this.info_pc
                    }
                    }
                    if(this.$store.state.count[0]=='laptop'){
                        this.$store.state.backfase = {
                        fase: 'Repotenciamiento',
                        count: this.$store.state.count,
                        info: this.info_laptop
                    }
                    }
                    this.$store.state.fase = 'Contact';
                }
            else{
                alert('Llena la información')
            }
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
    .active-button{
        background: white !important;
        color: black !important;
    }
   
}
.falla{
    width: 100%;
    height: 100%;
    margin: 20px;
    @media(max-width:768px){
        width: 100%;
    }
    div.content{
        background: black;
        color: black;
        border: 2px solid $secundary;
        border-radius: 20px;
        margin-left: 20px;
        .model-image{
            width: 33.3%;
            display: grid;
            color: $primary;
            padding: 20px 25px;
        }
        .model-info{
            width: 100%;
            background: $secundary;
            padding: 20px 25px;
            border-radius: 15px;
            border:2px solid $secundary
        }
        @media (max-width:768px){
            width: 90%;
        }
        h2,p,input{
            color: inherit;
        }
        input{
            border-bottom: 1px solid black !important;
            border-radius: 0 !important;
            padding: 10px 15px !important;
        }
    }
    .pc-upgrade{
            position: relative;
            background: $secundary !important;
            border: 4px solid $primary !important;
            .columns{
                flex-direction: row;
                align-items: start;
                .column{
                    flex-direction: column;
                    padding: 2.5em;
                    align-items: start;
                }
            }
            .tuto{
                height: 300px;
                iframe{
                    border-radius: 15px;
                }
            }
            .btn-desplegable{
                svg{
                    width: 30px;
                    height: 30px;
                }
                position: absolute;
                bottom: -20px;
                left: 40%;
                padding: 20px 30px;
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
</style>
