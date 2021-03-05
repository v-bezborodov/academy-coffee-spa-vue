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
        <input type="text" id="password" v-model="password">
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
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ JSON.stringify(error) }}</li>
      </ul>
      </p>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";

export default {
  name: "LoginComponent",
  setup() {

    const email = ref('')
    const password = ref('')
    const errors = ref([])

    const checkForm = (e) => {
      if (e) e.preventDefault()

      let options = {
        email: email.value,
        password: password.value,

      }
      axios.post('https://coffee.slawek.dev/api/auth/login', options).then((res) => {
            res.data && alert(JSON.stringify(res.data))
          }
      ).catch((error) => {
        errors.value.push(error.response.data.error)
      })
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