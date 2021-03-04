<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <div><router-link to="/login">Login</router-link></div>
  <div><router-link to="/register">Register</router-link></div>
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
