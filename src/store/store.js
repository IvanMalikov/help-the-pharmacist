import {createStore} from 'vuex'

export default createStore ({
    state() {
        return {
            happy: 0,
            sad: 0,
            heart: 0,
            clientCounter: 1,
            left: false,
            right: false,
            top: false,
            drugNumber: null,
            color: ''
        }
    },

    mutations: {
        
        addHappy(state) {
            state.happy++
            state.drugNumber = 2
            state.color = '#169AE4'
        },

        addSad(state) {
            state.sad++
            state.drugNumber = 1
            state.color = '#8049C7'
        },

        addHeart(state) {
            state.heart++
            state.drugNumber = 3
            state.color = '#FFB903'
        },

        retry(state) {
            state.heart = 0
            state.happy = 0
            state.sad = 0
            state.clientCounter = 1
        },

        addClientCounter(state) {
            state.clientCounter++
            state.drugNumber = null
            state.color = ''
        },

        noSwipe(state) {
            state.left = false
            state.top = false
            state.right = false
        },

        swipeLeft(state) {
            state.left = true
            state.drugNumber = 1
            state.color = '#8049C7'
        },

        swipeRight(state) {
            state.right = true
            state.drugNumber = 3
            state.color = '#FFB903'
        },

        swipeTop(state) {
            state.top = true
            state.drugNumber = 2
            state.color = '#169AE4'
        }

    },

    actions: {
        addClientCounterAsync(context) {
            setTimeout(() => {
                context.commit('noSwipe')
                context.commit('addClientCounter')
            }, 600)
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