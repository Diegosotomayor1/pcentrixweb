<template>
    <div class="columns absolute-transition">
    <div class="flexify">
            <div class="column is-one-third" style="align-items:start">
            <div class="content">
                <img class="icon-flex" src="src\assets\img\iconos\Icono cambio de componente-01.svg" alt="">
            </div>
        </div>
        <div class="column">
            <div class="content">
                <div class="intro_repair">
                    <h2 class="title">Diagnostiquemos tu laptop</h2>
                    <p class="subtitle is-6">Sigue cada punto</p>
                </div>
                <div id="tabs-with-content">
                <div class="tabs">
                    <ul>
                        <!-- v-if=" count[0] == laptop">-->
                   <li ref="model" class="is-active model" @click="Model('modelo')"><a> 1. Ingresa el modelo exacto</a></li>
                    <transition name="slide">
                        <div class="tab-content modelo" v-show="showpass == 'modelo'">
                        <div class="content is-flex">
                            <div>
                                <h3 class="title is-3">Encuentra tu modelo <br>y escribelo</h3>
                                <img class="icon" src="src\assets\img\iconos\laptop-model.svg" alt="">
                            </div>
                            <div>
                                <h3 class="title is-3">Ingresa la información de tu laptop</h3>
                                <p>Marca y modelo de laptop</p>
                                <input type="text" v-model="laptop_model" name="model-laptop" id="model-laptop" placeholder="Ej: Lenovo Ideapad 330S 15ARR">
                                <h3 class="subtitle"> ¿Lo han reparado antes?</h3>
                                <div class="is-flex buttons">
                                <button class="button" @click="reparado=true; Model('fail')">Si</button>
                                <button class="button" @click="reparado=false; Model('fail')">No</button>         
                                </div>
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
                                <div class="fail-item item-0" v-for="component in components" v-bind:style="{ 'background-image' : 'url(' + component.image + ')'}">
                                   <a class="overlay" @click="Guardar(component.title)">
                                       <div class="fail-item-title title-contain">
                                        <h3 class="fail-item-title">{{component.title}}</h3>
                                        <p class="dark-parraf">Costo entre: <b class="price">{{component.price}}</b></p>
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
                <button class="button submit" @click="Contact()"> Continuar </button>
            </div>
        </div>
    </div>
    </div>
</template>
<script>

export default ({
    props:{ Contactform: Function },
    data(){
        return{
           modelo: "modelo",
           fail: "fail",
           showpass: "modelo",
           componentes: [],
           laptop_model: "",
           reparado: undefined,
           components:[
               {
                   title: "Batería",
                   price: "150 a 2000",
                   image: '../src/assets/img/reparacionlaptop/Batería-01.png',
               }, 
                              {
                   title: "Bisagras",
                   price: "150 a 2000",
                   image: '../src/assets/img/reparacionlaptop/Bisagras-01.png',
               }, 
               {
                   title: "Cámara",
                   price: "150 a 2000",
                   image: '../src/assets/img/reparacionlaptop/Cámara-01.png',
               }, 
               {
                   title: "Carcasa",
                   price: "150 a 2000",
                   image: '../src/assets/img/reparacionlaptop/Carcasa-01.png',
               },
               {
                   title: "Conectores",
                   price: "150 a 2000",
                   image: '../src/assets/img/reparacionlaptop/Conectores.png',
               },
               {
                   title: "Micrófono",
                   price: "150 a 2000",
                   image: '../src/assets/img/reparacionlaptop/Micrófono-01.png',
               },
               {
                   title: "Mousepad",
                   price: "150 a 2000",
                   image: '../src/assets/img/reparacionlaptop/Mousepad-01.png',
               },
               {
                   title: "Pantalla",
                   price: "150 a 2000",
                   image: '../src/assets/img/reparacionlaptop/Pantalla-01.png',
               },
               {
                   title: "Parlantes",
                   price: "150 a 2000",
                   image: '../src/assets/img/reparacionlaptop/Parlantes-01.png',
               },
               {
                   title: "Puerto de carga",
                   price: "150 a 2000",
                   image: '../src/assets/img/reparacionlaptop/Puerto-de-carga-01.png',
               },
               {
                   title: "Teclado",
                   price: "150 a 2000",
                   image: '../src/assets/img/reparacionlaptop/Teclado-01.png',
               },
               {
                   title: "Wifi",
                   price: "150 a 2000",
                   image: '../src/assets/img/reparacionlaptop/Wifi-01.png',
               },  

           ]     
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
        Contact(){
        this.$store.state.count.push('Contact');
        this.$store.state.fase = 'Contact'; 
        }

    },
    mounted: function(){
        /* Activa el componente para ver los precios */
        for(let i=0; i<document.getElementsByClassName("overlay").length; i++){
            document.getElementsByClassName("overlay")[i].addEventListener("click", (e)=>{
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
.dark-parraf{
  color:$secundary
}
.icon-flex{
    width: 100% ;
    height: 250px;
    margin: 20px 0;
    padding: 10px;
    color: $secundary ;
    filter: invert(1);     

    @media(max-width:768px){
        display: none;
    }
}
.submit{
    color:#000;
    background: linear-gradient(45deg,$primary,#54D2AD,$color-combinate);
    font-weight: bold;
    border: none;
    padding: 20px 25px;
    border-radius:20px
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
    @media(max-width:768px){
        width: 100%;
    }
    .content {
        width: 600px;
        border: 1px solid $secundary;
        border-radius: 20px;
        @media (max-width:768px){
           width: 90%; 
           flex-direction: column;    
        }
        div{
            padding: 20px;
            &:nth-child(1) {
            width:38%;
            @media(max-width:768px){
                width: 100%;
            }
            }
            &:nth-child(2){
            background: $secundary;
            width:62%;
            border-radius: 20px;
            color: black;
            @media(max-width:768px){
                width: 100%;
            }
            h3{
                color: #000;
            }
            .is-flex{
                padding: 0 !important;
            }
            }
        }
    }
    h3{
        font-size: 20px;
        color:$secundary
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
        width: 35%;
    }
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
    height: 172px;
    margin:10px;
    background-size: cover;
    border-radius: 20px;
    a.overlay{
    display: flex;
    content-visibility: hidden;
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
