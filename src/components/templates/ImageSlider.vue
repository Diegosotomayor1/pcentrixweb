<template>
    <div class="image-slider">
    <a @click="prev" href='#'><</a>
    <transition enter-active-class="animate__animated animate__fadeIn animate__faster" 
    leave-active-class="animate__animated animate__fadeOut animate__faster" mode="out-in" tag="div" > 
        <div
        v-for="number in [currentNumber]"
        :key='number'
        >
            <img
                :src="currentImage"
                @mouseover="stopRotation"
                @mouseout="startRotation"
                class="image"
                />
            <br>
            <p>{{ description[currentNumber%5] }}</p>
        </div>
    </transition>
    <a @click="next" href='#'>></a>
    </div>
</template>

<script>
export default({
data() {
    return{       
        images: ['../src/assets/img/proceso/Nota 1-01.svg', '../src/assets/img/proceso/Nota 2-01.svg', '../src/assets/img/proceso/Nota 3.svg', '../src/assets/img/proceso/Nota 4-01.svg', '../src/assets/img/proceso/Nota 5-01.svg'],
        description:[
            'Nos mantenemos en contacto mediantecualquiera de nuestros canales y coordinamos tu caso', 
            'Uno de nuestros especialistas se acercará a tu domicilio para recoger tu equipo y llevarlo al taller',
            'Una vez tu equipo esté en el taller se procederá a hacer una revisión de su estado actual y posterior a repararlo. Todo este proceso se te estará notificando por fotos o streaming',
            'Una vez tu equipo esté terminado, uno de nuestros técnicos se dirigirá a tu domicilio a hacer la entrega',
            'Mantendremos un contacto contigo para darle un seguimiento a posibles dudas que puedan surgir a futuro'            
            ],
        currentNumber: 0,
        timer : null
    }
},
 mounted: function () {
    this.startRotation();
 },

methods: {
    startRotation: function() {
        this.timer = setInterval(this.next, 5000);
    },

    stopRotation: function() {
        clearTimeout(this.timer);
        this.timer = null;
    },

    next: function() {
        this.currentNumber += 1
    },
    prev: function() {
        this.currentNumber -= 1
    }
},
    
computed: {
    currentImage: function() {
        return this.images[Math.abs(this.currentNumber) % this.images.length];
    }
}
    
})
</script>

<style lang="scss">
@import '../../../node_modules/animate';
.image-slider{
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    align-items: center;
    a{
        font-size: 40px;
        font-weight: bold;
    }
}
.image{
    width: 300px;
    height: 300px;
    margin: auto;
}
</style>