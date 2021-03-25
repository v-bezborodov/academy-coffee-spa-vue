<template>
  <div>
    <div>
      <table>
        <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Email
          </th>
          <th>
            Phone
          </th>
          <th>
            Role
          </th>
          <th>
            Password
          </th>
          <th>
            Action
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            {{ user.name }}
          </td>
          <td>
            {{ user.email }}
          </td>
          <td>
            {{ user.phone }}
          </td>
          <td>
            {{ user.roles.length ? user.roles.map(role => role.name) : 'user' }}
          </td>
          <td>
            {{ user.one_time_password ?? '****' }}
          </td>
          <td>
            <router-link :to="{name: 'Edit-user', params:{user:user.id} }">
              <button id="myButton" class="foo bar">Edit</button>
            </router-link>
            <button @click="generatePassword(user.id)">Generate password</button>
            <button @click="deleteUser(user.id)">Delete user</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import axios from "axios";

export default {
  name: "DashboardUser.component",
  setup() {
    const users = ref([])
    const errors = ref([])

    const getAllUsers = (e) => {
      if (e) e.preventDefault()
      axios.get(`${process.env.VUE_APP_API_URL}/api/user`).then((res) => {
            if (res.data) users.value = res.data
          }
      ).catch((error) => {
        error?.response?.data && errors.value.push(error.response.data.error)
      })
    }

    const generatePassword = (id) => {
      if (!id) return

      let options = {
        id: id,
      }
      axios.post(`${process.env.VUE_APP_API_URL}/api/password/generate`, options).then(() => {
            getAllUsers()
          }
      ).catch((error) => {
        error?.response?.data && errors.value.push(error.response.data.error)
      })
    }

    const deleteUser = (id) => {
      if (!id) return
      axios.delete(`${process.env.VUE_APP_API_URL}/api/user/${id}`).then(() => {
            getAllUsers()
          }
      ).catch((error) => {
        error?.response?.data && errors.value.push(error.response.data.error)
      })
    }

    getAllUsers()

    return {
      errors,
      users,
      generatePassword,
      deleteUser
    }
  }
}
</script>

<style scoped>
table {
  margin: 0 auto;
}

</style>