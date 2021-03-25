<template>
  <div>
    <p>
      <router-link to="/login">Login</router-link>&nbsp;
      <router-link to="/register">Register</router-link>&nbsp;
    </p>
    <p>
      <router-link :to="{ name: 'Home'}">Home</router-link>&nbsp;
      <router-link :to="{ name: 'User'}">User</router-link>&nbsp;
      <router-link :to="{ name: 'Category'}">Categories</router-link>&nbsp;
      <router-link :to="{ name: 'Post'}">Posts</router-link>&nbsp;
    </p>
    <p>
      <router-link to="/register-customer">Register new customer</router-link>&nbsp;
    </p>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "TopNavigation.component"
}
</script>

<style>
</style>
