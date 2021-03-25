<template>
  <div>
    <form
        id="app"
        @submit="checkForm"
        method="post"
    >
      <div>
        <label for="phone">Phone</label>
        <input type="text" id="phone" v-model="phone">
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
import ErrorHandler from '@/components/ErrorHandler/Errorhandler.component'

export default {
  name: "RegisterCustomerComponent",
  components: {ErrorHandler},
  setup() {

    const phone = ref('')
    const errors = ref([])

    const checkForm = (e) => {
      if (e) e.preventDefault()

      let options = {
        phone: phone.value,
      }

      axios.post(`${process.env.VUE_APP_API_URL}/api/customer/register`, options).then((res) => {
            res.data && alert(res.data.message)
          }
      ).catch((error) => {
        errors.value.push(error.data.message)
      })
    }
    return {
      checkForm,
      phone,
      errors
    }
  }
}
</script>

<style scoped>

</style>