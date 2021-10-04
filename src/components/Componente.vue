<template>
    <div class="columns absolute-transition">
        <div class="column is-one-third">
            <div class="content">
                <font-awesome-icon icon="cog" />
            </div>
        </div>
        <div class="column">
            <div class="content">
                <div class="intro_repair">
                    <h2 class="title">Diagnostiquemos tu {{ count[0] }}</h2>
                    <p class="subtitle is-6">Sigue cada punto</p>
                </div>
                <div id="tabs-with-content">
                <div class="tabs">
                    <ul>
                    <li class="is-active" v-if="count[0] == laptop"><a>1. Ingresa el modelo exacto</a></li>
                    <li><a>2. ¿Ya la han desarmado antes?</a></li>
                    <li><a>3. ¿Cuál es la falla que has encontrado?</a></li>
                    </ul>
                </div>
                <div>
                    <section class="tab-content">
                        <div class="content is-flex">
                            <div>
                                <h3 class="title is-3">Encuentra tu modelo</h3>

                            </div>
                            <div>
                                <h3 class="title is-3">Ingresa la información de tu laptop</h3>
                                <p>Marca y modelo de laptop</p>
                                <input type="text" name="model-laptop" id="model-laptop" placeholder="Ej: Lenovo Ideapad 330S 15ARR">
                            </div>                            
                        </div>
                    </section>
                    <section class="tab-content">
                        <div class="content">
                                <h3 class="title is-3">¿Tu equipo ha sido desarmado antes?</h3>
                                <div class="buttons is-flex">
                                    <button class="button">Si</button>
                                    <button class="button">No</button>
                                </div>
                        </div>
                    </section>
                    <section class="tab-content">
                        <div class="content">
                            <h3 class="title is-3">3. ¿Cuál es la falla que has encontrado?</h3>
                            
                        </div>
                    </section>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>