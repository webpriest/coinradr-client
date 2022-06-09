import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state() {
    return {
        authenticated: false,
        user: null,
        stint: null,
        coins: null,
        darkMode: localStorage.getItem('dark')
    }
},

getters: {
    authenticated(state) {
        return state.authenticated
    },

    user(state) {
        return state.user
    },

    stint(state) {
        return state.stint
    },

    coins(state) {
        return state.coins
    },

    dark(state) {
        return state.darkMode
    }
},

mutations: {
    SET_AUTHENTICATED(state, authenticated) {
        state.authenticated = authenticated
    },
    SET_USER(state, user) {
        state.user = user
    },
    SET_STINT(state, stint) {
        state.stint = stint
    },
    SET_COINS(state, coins) {
        state.coins = coins
    },
    SET_DARK(state, mode) {
        state.darkMode = mode
    }
},

actions: {
    async authenticate({ commit }) {
        return await axios.get('/api/user').then((response) => {
            commit('SET_AUTHENTICATED', true)
            commit('SET_USER', response.data)
            commit('SET_STINT', response.data.stint)
        }).catch(() => {
            commit('SET_AUTHENTICATED', false)
            commit('SET_USER', null)
            commit('SET_STINT', null)
        })
    },

    setmode({ commit, dispatch }, mode) {
        localStorage.setItem('dark', mode)
        commit('SET_DARK', mode)
        dispatch('switchmode')
    },
    
    switchmode(state) {
        if(state.getters.dark) {
            document.querySelector('body').classList.add('dark')
        }
        else {
            document.querySelector('body').classList.remove('dark')
        }
    },

    async login({ dispatch }, credentials) {
        axios.defaults.withCredentials = true
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/login', credentials)
        
        dispatch('authenticate')
    },
    
    async register({ dispatch }, credentials) {
        axios.defaults.withCredentials = true
        await axios.post('/register', credentials).then((response) => {
            dispatch('login', {'email': response.data.email, 'password': response.data.password})
        }).catch((e) => {
            // console.log(e.response.data)
        })
    },

    logout({ dispatch }) {
        axios.defaults.withCredentials = true
        axios.post('/logout').then(() => {
            dispatch('authenticate')
            console.log('Logged out')
        })
    }
},
  modules: {
    
  }
})
