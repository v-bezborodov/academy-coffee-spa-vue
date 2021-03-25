<template>
  <div>
    <div>
      <table>
        <thead>
        <tr>
          <th>
            Img
          </th>
          <th>
            Title
          </th>
          <th>
            Body
          </th>
          <th>
            Time read
          </th>
          <th>
            Published
          </th>
          <th>
            Comments enabled
          </th>
          <th>
            Comments
          </th>
          <th>
            Created
          </th>
          <th>

          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>
            <img v-if="post.img" :src="post.img "/>
          </td>
          <td>
            {{ post.title }}
          </td>
          <td>
            {{ post.body ? post.body.substring(0, 40) + '...' : '' }}
          </td>
          <td>
            {{ post.time_read ? post.time_read + ' min' : '' }}
          </td>
          <td>
            {{ post.is_published ? 'yes' : 'no' }}
          </td>
          <td>
            {{ post.is_comment ? 'yes' : 'no' }}
          </td>
          <td>
            -
          </td>
          <td>
            {{ post.created_at }}
          </td>
          <td>
            <router-link :to="{name: 'Edit-post', params:{post:post.id} }">
              <button id="myButton" class="foo bar">Edit Post</button>
            </router-link>
            <button @click="deletePost(post.id)">Delete post</button>
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
    const deletePost = (id) => {
      if (!id) return
      axios.delete(`${process.env.VUE_APP_API_URL}/api/blog/post/${id}`).then(() => {
            getAllPosts()
          }
      ).catch((error) => {
        error?.response?.data && errors.value.push(error.response.data.error)
      })
    }


    getAllPosts()

    return {
      posts,
      errors,
      deletePost
    }
  }
}
</script>

<style scoped>
td > img {
  width: 40px;
  height: auto;
}

</style>