import { createStore } from "vuex"
import user from './modules/user'
import post from './modules/post'

const store = createStore({
    modules: {
        user,
        post
    },
})

export default store