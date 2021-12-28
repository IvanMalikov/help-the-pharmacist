<template>

    <div class="container">
        <div class="circle">
            <div class="text">
                <h3>Добро пожаловать в игру</h3>
                <h1>Помоги <br>ФАРМАЦЕВТУ</h1>
            </div>
            
            <router-link to="/main" custom v-slot="{navigate}">
                <button @click="navigate" class="btn-r">Начать</button>
            </router-link>

        </div>
    </div>
       
</template>

<script>
export default {
    


}
</script>

<style scoped>

    

    .container {
        background-image: url(../assets/images/home-bg.jpeg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        position: relative;
    }

    .circle {

        position: absolute;
        top: -30px;
        left: 110px;

        background-image: url(../assets/images/home-circle-bg.jpeg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        height: 700px;
        width: 700px;
        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;

    }

    h3 {
        font-size: 35px;
        line-height: 41px;
        letter-spacing: 0.02em;
        font-weight: 100;
        margin-bottom: 30px;
    }

    h1 {
        font-size: 60px;
        line-height: 66px;
        letter-spacing: 0.02em;
        font-weight: 600;
        margin-bottom: 80px;
    }

    .btn-r {
        background-color: #fff;
        border: none;
        width: 380px;
        height: 90px;
        color: #8E9AD5;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
        border-radius: 2em;
    }


    @media screen and (max-width: 768px) {
        .circle {
            left: 40px;
        }
    }
</style>