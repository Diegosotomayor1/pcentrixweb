<template>
    <div class="columns is-centered">
        <div class="is-flex absolute-transition">
        <div class="column is-one-third">
            <div class="content laptop-model">
                <h2 class="title">Encuentra el modelo de tu laptop</h2>
                <div class="bar">
                    <font-awesome-icon class="icon" icon="desktop"/>
                <p class="subtitle is-6">Con el modelo encontrado en el sticker es suficiente.<br>
                Pero si cuentas con la otra información solicitada en el recuadro estaría perfecto.</p>
                </div>
                
            </div>
        </div>
        <div class="column is-centered">
            <div class="content form-laptop">
                <h2 class="title">Ingresa la información de tu laptop</h2>
                <p class="subtitle is-5">Marca y modelo de tu laptop</p>
                <input type="text" class="subtitle is-5 input-form" placeholder="Ej: Lenovo Ideapad 330 15ARR">
                <p class="subtitle is-5">¿Tu equipo ha sido repotenciado antes?</p>
                <div class="is-flex">
                    <button class="button">Si</button>
                    <button class="button">No</button>
                </div>

            </div>
        </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
.icon{
    display: block;
    width: 100px;
    height: auto;
    margin: 20px auto;
}
.laptop-model{
    border:2px solid $primary;
    padding: 7%;
    border-radius: 20px;
}
.form-laptop{
    background: $secundary;
    padding: 7%;
    border-radius: 20px;
}
.input-form{
    width: 50%;
    border:none;
    border-bottom: 1px solid gray;
    padding: 10px 0;
    font-size: 15px;
    color: black;
}:focus{
    outline: none;
}
p.is-5{
    color: black;
}
.button{
    background: black;
    border:2px solid $primary;
    color:$secundary;
    margin: 10px;
    border-radius: 10px;
    padding: 20px 30px;
}
.bar{
    border-left: 2px solid $primary;
    margin-left: 2px;
    padding: 0 10px;
}
</style>