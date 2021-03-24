<template>
  <div>
    <header-component/>
    <p>
            <router-link to="/">Home</router-link>&nbsp;
            <router-link to="/login">Login</router-link>&nbsp;
            <router-link to="/register">Register</router-link>&nbsp;
            <router-link to="/dashboard">Dashboard</router-link>&nbsp;
            <router-link to="/register-customer">Register new customer</router-link>&nbsp;
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/topNav/Header.component'

export default {
  name: 'App',
  components: {HeaderComponent},
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
