// import shop from '../../api/shop'

// initial state
const state = {
    isPublishedOptionsStatic: [
        {value: "true", label: "Published"},
        {value: "false", label: "Hidden"}
    ],
}

// getters
const getters = {
    getIsPublishedOptionsStatic: (state) => {
        return state.isPublishedOptionsStatic
    },
}

// actions
const actions = {
}

// mutations
const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}