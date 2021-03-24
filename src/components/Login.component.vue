<template>
  <div>
    <form
        id="app"
        @submit="checkForm"
        method="post"
    >
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password">
      </div>
      <div>
        <p>
          <input
              type="submit"
              value="Submit"
          >
        </p>
      </div>
    </form>
    <div>
      <error-handler :errors="errors"/>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";
import {useRouter} from 'vue-router'
import { useStore } from 'vuex'
import ErrorHandler from "@/components/ErrorHandler/Errorhandler.component";

export default {
  name: "LoginPageComponent",
  components: {ErrorHandler},
  setup() {
    const email = ref('')
    const password = ref('')
    const errors = ref([])
    const router = useRouter()
    const store = useStore()

    const checkForm = (e) => {
      if (e) e.preventDefault()

      let options = {
        email: email.value,
        password: password.value,
      }

      axios.post(`${process.env.VUE_APP_API_URL}/api/auth/login`, options).then((res) => {
            if(res.data){
              alert(JSON.stringify(res.data))
              setUser(res.data)
            }
            localStorage.removeItem("access_token");
            localStorage.setItem('access_token', res.data.access_token)

            return router.push('/dashboard')
          }
      ).catch((error) => {
        error.data.message && errors.value.push(error.data.message)
      })
    }

    const setUser=(user)=>{
      if(user.user) store.dispatch('user/setUser', user.user)
    }
    return {
      checkForm,
      email,
      password,
      errors
    }
  }
}
</script>

<style scoped>

</style>