<template>

    <div class="main">
        <div class="sidebar">
            <div class="sidebar-buttons">
                <router-link to="/home">
                    <button class="home">

                    </button>
                </router-link>

                <button class="retry" @click="$store.commit('retry')">

                </button>
            </div>

            <div class="params">
                <p class="params-text">Параметри: </p>
                <div class="counters">
                    <button class="counter">
                        <img class="counter-img" src="../assets/images/sad-icon.png" alt=""> 
                        <span class="counter-value"><b>{{$store.getters.getSad}}</b></span>
                    </button>

                    <button class="counter">
                        <img class="counter-img" src="../assets/images/happy-icon.png" alt=""> 
                        <span class="counter-value"><b>{{$store.getters.getHappy}}</b></span>
                    </button>

                    <button class="counter">
                        <img class="counter-img" src="../assets/images/heart-icon.png" alt=""> 
                        <span class="counter-value"><b>{{$store.getters.getHeart}}</b></span>
                    </button>
                </div>
            </div>

            <div class="clients">
                <p class="clients-text">Осталось в очереди: </p>
                <p class="clients-rest"> <b>{{restClients}}</b> / 5 </p>
            </div>
        </div>

        <div class="choice">

            <component
                v-touch:swipe.left="onLeftSwipe"
                v-touch:swipe.right="onRightSwipe"
                v-touch:swipe.top="onTopSwipe"
                :is="layout"
            ></component>
            

            <div class="choice-buttons">
                <button class="choice-button violet" @click="$store.commit('addSad')">Препарат 1</button>
                <button class="choice-button blue" @click="$store.commit('addHappy')">Препарат 2</button>
                <button class="choice-button yellow" @click="$store.commit('addHeart')">Препарат 3</button>
            </div>
        </div>

    </div>


</template>

<script>

import ClientFirst from '../components/ClientFirst.vue';
import ClientSecond from '../components/ClientSecond.vue';
import ClientThird from '../components/ClientThird.vue';
import ClientFourth from '../components/ClientFourth.vue';
import ClientFifth from '../components/ClientFifth.vue';

export default {
    data() {
        return {
            clientNumber: [
                {id: 1, value: 'first'},
                {id: 2, value: 'second'},
                {id: 3, value: 'third'},
                {id: 4, value: 'fourth'},
                {id: 5, value: 'fifth'},
            ],
        }
    },

    methods: {
        onLeftSwipe() {
            this.$store.commit('addSad')
        },

        onRightSwipe() {
            this.$store.commit('addHeart')
        },

        onTopSwipe() {
            this.$store.commit('addHappy')
        },
    },

    components: {
        ClientFirst, ClientSecond,
        ClientThird, ClientFourth,
        ClientFifth
    },

    computed: {
    
        layout() {
            if(this.clientCounter <= 5) {
                return 'client-' + this.clientNumber.find((item) => {
                    return item.id === this.clientCounter
                }).value
            } else {
                this.$router.push('./result')
            }
        },

        restClients() {
            return this.clientNumber.length - this.clientCounter
        },

        clientCounter() {
            return this.$store.getters.getClientCounter
        }

    },

}
</script>

<style scoped>

    .main {
        display: grid;
        grid-template-columns: 1fr 2fr;
        min-height: 100vh;
    }

    .sidebar {
        background-image: url(../assets/images/sidebar-bg.jpeg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .sidebar-buttons {
        margin-top: 50px;
    }

    .home {
        background-image: url(../assets/images/sidebar-btn-home.jpeg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        width: 70px;
        height: 70px;
        border: none;
        border-radius: 100%;
        margin-right: 30px;
        margin-left: 30px;
    }

    .retry {
        background-image: url(../assets/images/sidebar-btn-retry.jpeg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        width: 70px;
        height: 70px;
        border: none;
        border-radius: 100%;
    }

    .params-text {
        margin-bottom: 30px;
        margin-left: 30px;
        font-size: 30px;
        line-height: 40px;
        color: white;
        font-weight: 600;
    }

    .counters {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        text-align: center;
        align-items: center;
    }

    .counter {
        height: 80px;
        width: 190px;

        border: none;
        border-radius: 5em;
        margin-bottom: 30px;

        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
    }

    .counter-img {
        margin-left: 7px;
    }

    .counter-value {
        font-size: 48px;
        line-height: 59px;
        margin-right: 30px;
    }

    .clients {
        text-align: center;
        margin: 15px 0;
    }

    .clients-text {
        color: white;
        font-size: 30px;
        line-height: 40px;
    }

    .clients-rest {
        color: white;
        font-size: 30px;
        line-height: 40px;
    }

    .choice {
        display: grid;
        grid-template-rows: 5fr 1fr;
    }

    .client-card {
        display: flex;
        justify-content: space-between;
    }

    .choice-buttons {
        display: flex;
        justify-content: space-around;
    }

    .choice-button {
        width: 280px;
        height: 90px;

        border: none;
        border-radius: 5em;

        color: white;
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
    }

    .violet {
        background-image: url(../assets/images/violet.jpeg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .blue {
        background-image: url(../assets/images/blue.jpeg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .yellow {
        background-image: url(../assets/images/yellow.jpeg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media screen and (max-width: 1024px) {
        .main {
            display: grid;
            grid-template-columns: 1fr 4fr;
            min-height: 100vh;
        }

        .sidebar {
            justify-content: space-around;
        }

        .sidebar-buttons {
            margin: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .home {
            margin: 0;
        }

        .retry {
            margin: 0;
        }

        .params-text {
            display: none;
        }

        .choice {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
        }

        .card {
            margin-top: 0;
        }

        .choice-buttons {
            display: flex;
            flex-wrap: wrap;
        }

        .choice-button {
            width: 210px;
            height: 60px;
        }

    }

    @media screen and (max-width: 768px) {

        .main {
            display: grid;
            grid-template-columns: 1fr 4fr;
            min-height: 100vh;
        }

        .sidebar {
            justify-content: space-around;
        }

        .sidebar-buttons {
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        .home {
            margin: 0;
            margin-bottom: 30px;
        }

        .retry {
            margin: 0;
        }

        .params-text {
            display: none;
        }

        .counter {
            width: 100px;
            justify-content: space-around;
        }

        .counter-value {
            font-size: 32px;
            line-height: 42px;
            margin: 0;
        }

        .counter-img {
            margin: 0;
        }

        .clients-text {
            display: none;
        }

        .choice {
            grid-template-rows: 3fr 1fr;
        }

        .choice-buttons {
            flex-wrap: wrap;
        }

        .choice-button {
            width: 280px;
            height: 90px;
            margin-bottom: 10px;
        }
    }

    
</style>