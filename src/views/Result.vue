<template>
    <div class="background"></div>

    <div class="result">

        <div class="home-btn">
            <router-link to="/home"> <button @click="$store.commit('retry')" class="home"></button> </router-link>
        </div>

        <div class="result-info">
            <div class="percents">
                <div class="percent">
                    <p class="percent-value">{{sadPercent}}%</p>
                    <p class="percent-name">Препарат 1</p>
                </div>

                <div class="percent">
                    <p class="percent-value">{{happyPercent}}%</p>
                    <p class="percent-name">Препарат 2</p>
                </div>

                <div class="percent">
                    <p class="percent-value">{{heartPercent}}%</p>
                    <p class="percent-name">Препарат 3</p>
                </div>
            </div>

            <hr>

            <div class="result-text">
                <p>Ваш результат:</p>
                <p class="result-text-question">«Что я здесь делаю?»</p>
            </div>

            <div class="result-description">
                <p>Это тестовое задание, так что не будем <br>углубляться в глубины проблем фармацевтов.</p>
            </div>

            <div class="try-again">
                <button class="again" @click="retry">
                    Попробовать еще
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        happyPercent() {
            return (this.$store.getters.getHappy / 5) * 100
        },
        sadPercent() {
            return (this.$store.getters.getSad / 5) * 100
        },
        heartPercent() {
            return (this.$store.getters.getHeart / 5) * 100
        }
    },

    methods: {
        retry() {
            this.$store.commit('retry')
            this.$router.push('/main')
        }
    }
}
</script>

<style scoped>
    .background {
        background-image: url(../assets/images/result-bg.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
       
        height: 700px;
        width: 700px;

        position: absolute;
        right: 0;
    }

    .result {
        display: flex;
    }

    .home-btn {
        min-height: 100vh;
    }

    .home {
        background-image: url(../assets/images/result-btn-home.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        display: inline-block;
        width: 70px;
        height: 70px;

        border: none;
        border-radius: 100%;
        margin-left: 50px;
        margin-top: 70px;
    }

    .result-info {
        margin: 260px 0 85px 0;
        width: 580px;
    }

    .percents {
        display: flex;
        justify-content: space-around;
        margin-bottom: 50px;
    }

    .percent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 180px;
        height: 100px;
    }

    .percent-value {
        font-size: 48px;
        line-height: 58px;
    }

    .percent-text {
        font-weight: 600;
    }

    hr {
        margin-bottom: 40px;
    }

    .result-text {
        color: #8E9AD5;
        font-size: 40px;
        line-height: 44px;
        margin-bottom: 20px;
    }

    .result-text-question {
        font-weight: 600;
    }

    .result-description {
        margin-bottom: 250px;
    }

    .again {
        background-image: url(../assets/images/result-btn-again.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        border: none;
        border-radius: 5em;

        color: white;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;

        width: 270px;
        height: 60px;
    }

    @media screen and (max-width: 1024px) {
        .background {
            height: 380px;
            width: 380px;
        }

        .result-info {
            margin-top: 200px;
        }
        
        .result-description {
            margin-bottom: 50px;
        }
    }

    @media screen and (max-width: 768px) {
        .background {
            height: 350px;
            width: 350px;
        }
        
        .result-info {
            margin-top: 400px;
        } 
    }
</style>