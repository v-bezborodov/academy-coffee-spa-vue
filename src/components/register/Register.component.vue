<template>
  <div>
    <form
        id="app"
        @submit="checkForm"
        method="post"
    >
      <div>
        <label for="name">Email</label>
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
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      </p>
    </div>
  </div>

</template>

<script>
export default {
  name: "RegisterComponent",
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: [],
    }
  },
  methods: {
    checkForm: function (e) {
      if (e) e.preventDefault()
    }
  }
}
</script>

<style scoped>

</style>