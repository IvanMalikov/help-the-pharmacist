<template>
    <div class="card" :class="{
            'swipe-left': $store.state.left,
            'swipe-right': $store.state.right,
            'swipe-top': $store.state.top,
        }">
        <div class="drug" v-if="$store.state.drugNumber" :style="{color: $store.state.color}">
            Препарат {{$store.state.drugNumber}}
        </div>
        <img src="../assets/images/clients/4.png" alt="">
        <div class="info">
            <div class="name">
                Олександр, 20 років
            </div>
            <div class="description">
                Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

    .drug {
        position: absolute;
        left: 10%;
        top: 40%;
        font-size: 52px;
        line-height: 52px;
        font-weight: 600;
        border: 4px solid;
        padding: 20px 50px;
        border-radius: .1em ;
        transform: rotate(15deg);
    }

    .card {
        position: relative;
        width: 540px;
        height: 590px;
        border-radius: 3em;
        margin: 0 auto;
        box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
        margin-top: 130px;
    }

    .swipe-left {
        position: relative;
        transform: rotate(315deg);
        z-index: -1;
        animation-name: swipe-left;
        animation-duration: .5s;
        animation-fill-mode: forwards;
    }

    .swipe-right {
        position: relative;
        transform: rotate(45deg);
        z-index: -1;
        animation-name: swipe-right;
        animation-duration: .5s;
        animation-fill-mode: forwards;
    }

    .swipe-top {
        position: relative;
        transform: rotate(45deg);
        z-index: -1;
        animation-name: swipe-top;
        animation-duration: .5s;
        animation-fill-mode: forwards;
    }

    @keyframes swipe-left {
        0%  {right:0px; top:0px;}
        100% {right:500px; top:0px;}
    }

    @keyframes swipe-right {
        0%  {left:0px; top:0px;}
        100% {left:500px; top:0px;}
    }

    @keyframes swipe-top {
        0%  {right:0px; bottom:0px;}
        100% {right:0px; bottom:500px;}
    }

    .info {
        margin: 15px 50px;
    }

    .name {
        color: #8E9AD5;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 15px;
    }

    .description {
        font-size: 18px;
        line-height: 25px;
    }
</style>