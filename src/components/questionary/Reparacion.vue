<template>
    <div class="absolute-transition">
        <div class="is-flex repair ">
        <div class="columns is-mobile">
            <div class="column is-10 is-half">
                <div class="card" @click="DiagnosticPopup(solution.componente_dañado)">
                    <div class="card-content is-flex flex-in-card">
                        <img :src="solution.componente_dañado.img" alt="" class="icon_repair">
                        <div class="content">
                            <h3 class="title ">{{solution.componente_dañado.title}}</h3>
                            <p class="subtitle is-5">Uno o mas componentes impiden que mi computadora funcione correctamente.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-10"> 
                <div class="card" @click="DiagnosticPopup(solution.programas)">
                    <div class="card-content is-flex flex-in-card">
                        <img :src="solution.programas.img" alt="" class="icon_repair"> 
                        <div class="content">
                            <h3 class="title">Errores en programas</h3>
                            <p class="subtitle is-5">Uno o mas programas ya no me abren o se cierran inesperadamente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns is-mobile" style="align-items: flex-end;">
            <div class="column is-10 is-half">
                <div class="card" @click="DiagnosticPopup(solution.windows_error)">
                    <div class="card-content is-flex flex-in-card">
                        <img :src="solution.windows_error.img" alt="" class="icon_repair">
                        <div class="content">
                            <h3 class="title ">Errores de Windows</h3>
                            <p class="subtitle is-5">Windows no funciona de la manera correcta. Pantallazos azules, reinicios, etc.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="column is-10">
                <div class="card" @click="DiagnosticPopup(solution.lentitud)">
                    <div class="card-content is-flex flex-in-card">
                        <img :src="solution.lentitud.img" alt="" class="icon_repair">
                        <div class="content">
                            <h3 class="title">Lentitud</h3>
                            <p class="subtitle is-5">El rendimiento de mi computadora no es como en un inicio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="">
        <div class="is-mobile is-centered">
            <div class="">
                <div class="content has-text-centered is-flex center-flex">
                    <h5 class="subtitle is-5 ">¿ No encuentras tu problema ?<b class="c-secundary" @click="DiagnosticPopup('unknown')"> haz click aquí</b></h5>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

export default ({
    props:{DiagnosticPopup : Function, problem:Object},
    data(){
        return{
        // Soluciones para Popup
        solution:
        {
            lentitud: 
            {
                title: "Lentitud",
                description: "Pueden ser varios los  motivo por el que un computador disminuye su rendimiento. Es necesario hacer un descarte.",
                price: 50,
                img: "src/assets/img/iconos/Icono Lentitud-01.svg"
            },
            componente_dañado:
            {
                title: "Componente dañado",
                description: "",
                price: "",
                img: "src/assets/img/iconos/Icono cambio de componente-01.svg"
            },
            windows_error:
            {
                title: "Error Windows",
                description: "En este punto, la opción mas recomendable es formatear y reinstalar Windows desde cero. Se hará un backup de tu información.",
                price: 50,
                img: "src/assets/img/iconos/Icono Falla con windows-01.svg"
            },
            programas:
            {
                title: "Errores en programas",
                description: "El equipo puede haber estado expuesto a virus de distintos tipos. Es necesario hacer un descarte ",
                price: 50,
                img: "src/assets/img/iconos/Icono  Errores de programas-01.svg"
            }
            }
        }
    }
})
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
    .center-flex{
        justify-content: center;
    }
    .card-content{
        height: auto !important;
        width: 100%;
        max-width: 100%;
    }
    .subtitle{
        font-size: 17px;
    }
    .title{
       font-size: 30px;
        padding-right: 20%;
        margin-bottom: 2rem;
    }
    .content{
        margin-left: 20px;
    }
    .subtitle, .title{
        color:#4a4a4a;
        text-align: left;
    }
    .icon{
        width: 150px;
        height: 150px;
        padding: 15px;
    }
    .icon_repair{
        width: 150px;
        height: 150px;
    }
    .columns{
        align-items: flex-start;
    }
    b.c-secundary{
        cursor: pointer;
    }
    @media (min-width:752px) and (max-width:1198px){
        .flex-in-card{
            display: block !important;
        }
        .columns{
            align-items: center;
        }
    }

    @media (max-width:1198px){
        .title{
            margin-top:15px !important;
            font-size:25px
        }
        .subtitle{
            font-size: 16px;
        }
    }
    @media(max-width:768px){
        .repair{
            align-items: center;
        }
        .columns{
            margin: 0 !important;
            align-items: center;
        }
    }
    @media (max-width:420px){
        h3.title{
            font-size: 21px;
        }
    }

</style>
