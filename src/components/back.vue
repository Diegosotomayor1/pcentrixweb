<template>
    <div class="return" v-if="count.length > 0">
        <div class="content">
            <div class="back"  @click="Return">
                <font-awesome-icon icon="caret-left" />
            </div>
            <div class="section" >
                <h3 class="subtitle is-5">{{ count[0] }}</h3>
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
    method:{

    }
})
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.back{
    background: $primary;
    border-radius: 20px 0px 0px 20px ;
    width: 15%;
}
h3{
    color: white;
    margin: 10px;
}
.return{
    background: black;
    border-radius: 20px;
    width: 25%;
    margin: 2.5% 5%;
    .content{
        display:flex;
        div{
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .section{
            width: 70%;
            justify-content: left;
        }
    }
}

</style>
