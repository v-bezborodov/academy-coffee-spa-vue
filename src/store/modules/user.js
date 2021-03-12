// import shop from '../../api/shop'

// initial state
// shape: [{ id, quantity }]
const state = {
    user: null,
}

// getters
const getters = {
    getUser: (state) => {
        return state.user
    },
}

// actions
const actions = {
    setUser({commit}, user) {
        commit('pushUserToLocalStorage', user)
    }
}

// mutations
const mutations = {
    initialiseStore(state) {
        if (localStorage.getItem('user')) {
            state.user = JSON.parse(localStorage.getItem('user'));
        }
    },
    clearStore(state) {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            state.user = {}
        }
    },
    pushUserToLocalStorage(state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        state.user=user;
    },
    pushUser(state, user) {
        state.user = user
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}