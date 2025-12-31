import Vue from 'vue'
import Vuex from 'vuex'
import HomeStore from './modules/home'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    computed: {},
    modules: {
        home: HomeStore
    },
    strict: debug
})
