<template>
  <div>
   <p>
    <span v-if="user && user.name">Hi, {{ user.name }}</span> &nbsp;
    <a href="#" @click="logOut()">Logout</a>
    </p>
<!--    {{JSON.stringify(user)}}-->
  </div>

</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
name: "Header.component",
  setup() {
    const store = useStore()
    const user = computed(() => store.getters['user/getUser'])

    const beforeCreate=() =>{ store.commit('user/initialiseStore')};


    const logOut=()=>{
      store.commit('user/clearStore')
      localStorage.clear();
      location.reload();
    }

    beforeCreate()

    return{
      user,
      logOut
    }
  }

}
</script>

<style scoped>

</style>