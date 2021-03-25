<template>
  <div>
    123
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";

export default {
  name: "Post.component",
  setup() {
    const posts = ref([])
    const errors = ref([])

    const getAllPosts = (e) => {
      if (e) e.preventDefault()
      axios.get(`${process.env.VUE_APP_API_URL}/api/blog/post`).then((res) => {
            if (res.data) posts.value = res.data
          }
      ).catch((error) => {
        error?.response?.data && errors.value.push(error.response.data.error)
      })
    }

    getAllPosts()

    return {
      posts,
      errors
    }
  }
}
</script>

<style scoped>

</style>