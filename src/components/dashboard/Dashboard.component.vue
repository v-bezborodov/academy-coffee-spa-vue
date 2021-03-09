<template>
  <div>
    <div>
      <table>
        <tr v-for="user in users" :key="user.id">
          <td>
            {{ user.name }}
          </td>
          <td>
            {{ user.email }}
          </td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import axios from "axios";

export default {
  name: "Dashboard.component",
  setup() {
    const users = ref([])
    const errors = ref([])

    const getAllUsers = (e) => {
      if (e) e.preventDefault()
      axios.get(`${process.env.VUE_APP_API_URL}/api/user/all`).then((res) => {
            if (res.data) users.value = res.data
          }
      ).catch((error) => {
        error?.response?.data && errors.value.push(error.response.data.error)
      })
    }

    getAllUsers()

    return {
      errors,
      users
    }
  }
}
</script>

<style scoped>
table{
  margin: 0 auto;
}

</style>