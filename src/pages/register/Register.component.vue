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
        <label for="phone">Phone</label>
        <input type="text" id="phone" v-model="phone">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password">
      </div>
      <div>
        <label for="password_confirmation">Confirm Password</label>
        <input type="password" id="password_confirmation" v-model="password_confirmation">
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
    <div v-if="errors.length">
      <error-handler :errors="errors"/>
    </div>
  </div>

</template>

<script>
import axios from "axios";

import {ref} from 'vue'
import ErrorHandler from "@/components/ErrorHandler/Errorhandler.component";

export default {
  name: "RegisterComponent",
  components: {ErrorHandler},
  setup() {

    const name = ref('')
    const email = ref('')
    const phone = ref('')
    const password = ref('')
    const password_confirmation = ref('')
    const errors = ref([])

    const checkForm = (e) => {
      if (e) e.preventDefault()

      let options = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        password_confirmation: password_confirmation.value
      }

      axios.post(`${process.env.VUE_APP_API_URL}/api/auth/register`, options).then((res) => {
            res.data && alert(res.data.message)
          }
      ).catch((error) => {
        errors.value.push(error.data.message)
      })
    }
    return {
      checkForm,
      name,
      email,
      phone,
      password,
      password_confirmation,
      errors
    }
  }
}
</script>

<style scoped>

</style>