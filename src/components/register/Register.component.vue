<template>
  <div>
    <form
        id="app"
        @submit="checkForm"
        method="post"
    >
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name">
      </div>
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="text" id="password" v-model="password">
      </div>
      <div>
        <label for="password_confirmation">Confirm Password</label>
        <input type="text" id="password_confirmation" v-model="password_confirmation">
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
import axios from "axios";

import {ref} from 'vue'

export default {
  name: "RegisterComponent",
  setup() {

    const name = ref('')
    const email = ref('')
    const password = ref('')
    const password_confirmation = ref('')
    const errors = ref([])

    const checkForm = (e) => {
      if (e) e.preventDefault()

      let options = {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value

      }
      axios.post('https://coffee.slawek.dev/api/auth/register', options).then((res) => {
            res.data && alert(JSON.stringify(res.data))
          }
      ).catch((error) => {
        errors.value.push(error.response.data.error)
      })
    }
    return {
      checkForm,
      name,
      email,
      password,
      password_confirmation,
      errors
    }
  }
}
</script>

<style scoped>

</style>