<template>
  <div>
    <label for="email">Email</label>
    <input type="text" id="email" v-model="emailModel">
  </div>
  <div>
    <label for="password">Password</label>
    <input type="text" id="password" v-model="passwordModel">
  </div>
</template>

<script>
export default {
  name: "LoginComponent"
}
</script>

<style scoped>

</style>