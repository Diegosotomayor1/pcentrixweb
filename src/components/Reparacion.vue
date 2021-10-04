<template>
    <div class="absolute-transition">
        <div class="is-flex repair ">
        <div class="columns is-mobile">
            <div class="column is-10 is-half">
                <div class="card" @click="DiagnosticPopup(solution.componente_dañado)">
                    <div class="card-content is-flex flex-in-card">
                        <font-awesome-icon class="icon" icon="desktop"></font-awesome-icon>
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
                        <font-awesome-icon class="icon" icon="cog"></font-awesome-icon>
                        <div class="content">
                            <h3 class="title">Errores en programas</h3>
                            <p class="subtitle is-5">Uno o mas programas ya no me abren o se cierran inesperadamente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns is-mobile">
            <div class="column is-10 is-half">
                <div class="card" @click="DiagnosticPopup(solution.windows_error)">
                    <div class="card-content is-flex flex-in-card">
                        <font-awesome-icon class="icon" icon="desktop"></font-awesome-icon>
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
                        <font-awesome-icon class="icon" icon="cog"></font-awesome-icon>
                        <div class="content">
                            <h3 class="title">Lentitud</h3>
                            <p class="subtitle is-5">El rendimiento de mi computadora no es como en un inicio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="columns mt-2">
        <div class="column is-mobile is-centered">
            <div class="container">
                <div class="content has-text-centered is-flex">
                    <h5 class="subtitle is-5 ">¿ No encuentras tu problema ?<a href="" class="c-secundary"> haz click aquí</a></h5>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

export default ({
    props:{DiagnosticPopup : Function, solution:Object, problem:Object}
})
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
    .card-content{
        height: auto !important;
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
    @media (min-width:752px) and (max-width:1198px){
        .flex-in-card{
            display: block !important;
        }
    }

    @media (max-width:1198px){
        .title{
            margin-top:15px !important;
        }
    }
    @media(max-width:768px){
        .repair{
            margin-top: 220%;
            align-items: center;
        }
        .columns{
            margin: 0 !important;
        }
    }

</style>
