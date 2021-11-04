<template>
    <div class="return" v-if="count.length > 0">
        <div class="content" >
            <div class="back" @click="Return">
                <font-awesome-icon class="iconback" icon="caret-left" />
            </div>
            <div class="section" >
                <h3 class="subtitle is-5 capital">{{ count[0] }}</h3>
            </div>
            <div class="icon-section" v-if="fase != [] && fase[0] !='service' ">
                <font-awesome-icon icon="cog"/>
            </div>
        </div>
    </div>    
</template>
<script>


export default({
    props:{ count:Array, fase:Array, service:Object, Return: Function},
})
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
.back{
    background: $primary;
    border-radius: 50px 0px 0px 50px ;
    width: 18%;
    
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
            width: 62%;
            justify-content: left;
        }
    }
    @media(max-width:768px){
        width: 80%;
        margin: 2.5% auto;
    }
}

</style>
