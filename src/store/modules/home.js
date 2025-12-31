const state = () => ({
    exp_list: []
})

const mutations = {
    set_exp_list(state, list) {
        state.exp_list = list
    }
}

const actions = {
    setExpList({ commit }, list) {
        commit('set_exp_list', list)
    }
}

const getters = {
    getExpList(state) {
        return state.exp_list
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
