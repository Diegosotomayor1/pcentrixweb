<template>
    <div class="return" v-if="$store.state.count.length > 0 && $store.state.fase!='Contact'">
        <div class="content" >
            <div class="back" @click="Return">
                <font-awesome-icon class="iconback" icon="caret-left" />
            </div>
            <div class="section" >
                <h3 class="subtitle is-5 capital">{{ $store.state.count[0] }}</h3>
            </div>
            <div class="icon-section" v-if="$store.state.fase != [] && $store.state.fase[0] !='service' ">
                <img :src="$store.state.fase[1]" alt="">
            </div>
        </div>
    </div>    
</template>
<script>


export default({
    props:{ service:Object, Return: Function}
})
    
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
.back{
    background: $primary;
    border-radius: 50px 0px 0px 50px ;
    width: 18%;    
}
.icon-section img{
    width: 30px;
    justify-content: start;
    filter: invert(45%) sepia(53%) saturate(250%) hue-rotate(100deg) brightness(125%) contrast(138%);
}
.iconback{
    width: 100%;
    height: 35px;
    color: #1E1B1B;
}
h3{
    color: white;
    margin: 10px;
}
.return{
    background: #1E1B1B;
    border-radius: 50px;
    width: 22%;
    margin: 2.5% 0;
    .content{
        display:flex;
        div{
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .section{
            width: 57%;
            justify-content: left;
        }
    }
    @media(max-width:768px){
        width: 80%;
        margin: 2.5% auto;
    }
}

</style>
