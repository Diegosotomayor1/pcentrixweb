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
                            <button class="button date fecha"><font-awesome-icon icon="cog" />Fecha</button>
                            <button class="button date fecha"><font-awesome-icon icon="cog" />Hora</button>
                        </div>
                        <input class="input-contact" type="text" placeholder="Introduce la ubicación de recojo">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8920696025893!2d-77.07573878462617!3d-11.98196954396217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cfcf04a6762f%3A0xd776ad6f0d7703c9!2sPcentrix!5e0!3m2!1ses!2spe!4v1634607731401!5m2!1ses!2spe" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        <input class="input-contact" type="text" placeholder="Referencia y nro de departamento o interior">
                    </div>
                    <div class="column">
                        <h3 class="subtitle is-4">Detalles del caso</h3>
                            <div class="columns">
                                <div class="column">
                                    <font-awesome-icon class="icon_contact" icon="desktop"/>
                                </div>
                                <div class="column">
                                    <h5>Diagnostico</h5>
                                    <p>Plazo: 3h</p>
                                    <h5>Marca y modelo</h5>
                                    <p>Lenovo - MLZ 530</p>
                                    <h5>Acción</h5>
                                    <p>Repotenciar</p>
                                    <h5>Repotenciamiento previo</h5>
                                    <p>No</p>
                                </div>
                            </div>
                            <div class="content is-grid">
                                <h5>Costo</h5>
                                <p>Por revisar</p>
                            </div>
                            <div class="content">
                                <label ><input class="checkbox" type="checkbox">Acepto los términos y condiciones de la empresa Pcentrix S.A.C</label>
                            </div>
                            <button class="button">Enviar</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
</template>
<script>
import ComponentLaptop from './ComponenteLaptop.vue';
import ComponentPc from './ComponentePc.vue';
import ImageSlider from '../templates/ImageSlider.vue'

export default ({
    components:{ComponentLaptop, ComponentPc, ImageSlider},
    data(){
        return{
            componentes:[]
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
section{
  display: flex;
  align-items: center;
}
h2,h3,p,span{
    color: $secundary;
}
.slider_process{
    display: block;
    .icon{
    width: 300px;
    height: 300px;
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
            height: 400px;
        }
    }
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
</style>
