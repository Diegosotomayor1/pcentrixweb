<template>
    <footer class="footer">
    <div class="content has-text-centered">
        <div class="footer-grid">
            <div class="description-footer">
                <h2 class="title">PCENTRIX</h2>
                <p class="subtitle is-8">PCENTRIX S.A.C. es una empresa peruana dedicada al ensamblaje personalizado, mantenimiento y venta de computadoras constituida por un grupo de jóvenes apasionados a la informática, el diseño y los videojuegos.</p>
            </div>
            <div class="buttons-footer">
                <div class=" content menu-footer">
                    <a href="" class="menu-item">Inicio </a>
                    <a href="" class="menu-item">Compra una pc</a>
                    <a href="" class="menu-item">Conócenos </a>
                </div>
                <div class="content social-links">
                    <a class="social-link" href=""><font-awesome-icon class="icon" :icon="['fab','facebook-f']"/></a>
                    <a class="social-link" href=""><font-awesome-icon class="icon" :icon="['fab','whatsapp']"/></a>
                    <a class="social-link" href=""><font-awesome-icon class="icon" :icon="['fab','instagram']"/></a>
                    <a class="social-link" href=""><font-awesome-icon class="icon" :icon="['fab','linkedin']"/></a>
                    <a class="social-link" href=""><font-awesome-icon class="icon" :icon="['fab','youtube']"/></a>
                </div>
            </div>
        </div>
    </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
.footer-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.social-links{
    display: flex;
    justify-content: end;
    width: 100%;
}
.social-link{
    width: 80px;
}
.icon{
    width: 50px;
}
a.menu-item {
    margin: 0 20px;
}
.menu-footer{
    display: flex;
    width: 100%;
    justify-content: end;
}
.is-8{
    font-size: 15px;
}
.description-footer{
    display: block;
    align-items: center;
    text-align: left;
}
.title{
    padding: 10px 0;
    color: $secundary;
}
.buttons-footer{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

@media (max-width:768px){
    .footer-grid{
        display: block;
    }
    .description-footer{
        margin-bottom: 50px;
    }
}
</style>