<template>
    <div>
    <div class="columns absolute-transition">
        <div class="column is-8 ">
            <h3 class="subtitle">Los mantenimientos preventivos ayudan a extender el tiempo de
        vida útil de tu equipo y se recomiendo hacerse cada 6 a 10 meses.</h3>
        </div>
        
    </div>
    <div class="columns">
        <div class="is-flex">
            <div class="column">
            <div class="dark-card">
                <div class="content">
                    <h2 class="title">
                        Paquete básico
                    </h2>
                    <ul>
                        <li>Limpieza de carcasa.</li>
                        <li>Limpieza por separado de cada pieza.</li>
                        <li>Cambio de pasta térmica.</li>
                        <li>Documento informativo de posibles mejoras a futuro para tu equipo.</li>
                    </ul>
                    <h3 class="title">S/. 90.00</h3>
                </div>
            </div>
        </div>
        <div class="column ">
            <div class="dark-card">
                <div class="content">
                    <h2 class="title">
                        Paquete completo
                    </h2>
                    <ul>
                        <li>Limpieza por separado de cada pieza.</li>
                        <li>Cambio de pasta térmica.</li>
                        <li>Documento informativo de posibles mejoras a futuro.</li>
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
</template>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
.dark-card{
    margin: 50px 15%;
    display: ruby-base;
    div{
        display: grid;
        padding: 25px;
        border: 2px solid $primary;
        text-align: center;
        border-radius: 20px;
        background: black;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.404);
        transition: .3s transform;
        height: 500px;
        width: 350px;
        
    }
    div:hover{
        transform: scale(1.05);
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
    font-size: 18px;
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
</style>