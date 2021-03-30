<template>
  <div>
    Edit post id :{{ $route.params.post }}

    <form @submit.prevent="onSubmit">
      <input-text name="email" label="Email" v-model:error="emailError" v-model:value="email"/>
      <input-text name="title" label="Title" v-model:error="emailError" v-model:value="post.title"/>
      <input-textarea name="body" label="Body" v-model:error="bodyError" v-model:value="post.body"/>
      <!--      <InputName v-model="postTitle"/>-->
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
// import InputName from "@/components/partial/form/input/InputName";
import {useForm, useField} from "vee-validate";
import * as yup from "yup";
import InputText from "@/components/partial/form/input/InputText";
import axios from "axios";
import {onMounted, ref} from "vue";
import {useRoute} from 'vue-router'
import InputTextarea from "@/components/partial/form/input/InputTextarea";

export default {
  name: "PostEdit.component",
  components: {InputTextarea, InputText},
  setup() {
    const route = useRoute()

    const post = ref({})
    const errors = ref([])

    const simpleSchema = yup.object({
      email: yup.string().required().email(),
      body: yup.string().required().max(256),
      postTitle: yup.string().required().min(3, 'Не больше 3 символов.'),
    });

    function onSubmit() {

    }

    function onLoadPost(id) {
      // let id = route.params.post
      if (!id) return
      console.log(id)
      console.log('route.params.post', route.params.post)

      axios.get(`${process.env.VUE_APP_API_URL}/api/blog/post/${id}`).then((res) => {
            if (res.data) post.value = res.data
            console.log('res.data', res.data)
          }
      ).catch((error) => {
        error?.response?.data && errors.value.push(error.response.data.error)
      })
    }

    useForm({
      validationSchema: simpleSchema,
    });

    const {value: email, errorMessage: emailError} = useField('email');
    const {value: body, errorMessage: bodyError} = useField('body');
    const {value: postTitle, errorMessage: postTitleError} = useField('postTitle');


    onMounted(() => onLoadPost(route.params.post))

    return {
      postTitle,
      post,
      body,
      email,
      emailError,
      postTitleError,
      bodyError,
      onSubmit,
    }
  }
}
</script>

<style scoped>

</style>