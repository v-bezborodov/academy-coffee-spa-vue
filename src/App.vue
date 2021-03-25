<template>
  <div>
    <user-navigation-component/>
    <top-navigation-component/>
<!--    <router-view></router-view>-->
  </div>
</template>

<script>
import UserNavigationComponent from '@/components/Navigation/UserNavigation.component'
import TopNavigationComponent from '@/components/Navigation/TopNavigation.component'

export default {
  name: 'App',
  components: {UserNavigationComponent, TopNavigationComponent},
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
