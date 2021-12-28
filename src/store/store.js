import {createStore} from 'vuex'

export default createStore ({
    state() {
        return {
            happy: 0,
            sad: 0,
            heart: 0,
            clientCounter: 1
        }
    },

    mutations: {
        addHappy(state) {
            state.happy++
            state.clientCounter++
        },

        addSad(state) {
            state.sad++
            state.clientCounter++
        },

        addHeart(state) {
            state.heart++
            state.clientCounter++
        },

        retry(state) {
            state.heart = 0
            state.happy = 0
            state.sad = 0
            state.clientCounter = 1
        }

    },

    getters: {
        getHappy(state) {
            return state.happy
        },

        getSad(state) {
            return state.sad
        },

        getHeart(state) {
            return state.heart
        },

        getClientCounter(state) {
            return state.clientCounter
        }
    }
})