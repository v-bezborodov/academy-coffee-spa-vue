<template>
  <div>
    Edit post id :{{ $route.params.post }}
    <form @submit.prevent="onSubmit">

      <input-text name="title" label="Title" v-model:error="titleError" v-model:value="title"/>
      <input-textarea name="body" label="Body" v-model:error="bodyError" v-model:value="body"/>
      <div>
        <input-text name="img" label="Image" v-model:error="imgError" v-model:value="img"/>
      </div>

      <input-text name="time_read" label="Time Read" v-model:error="timeReadError" v-model:value="timeRead"/>
      <input-text name="is_published" label="Published" v-model:error="isPublishedError" v-model:value="isPublished"/>
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

    const errors = ref([])


    const {value: body, errorMessage: bodyError} = useField('body');
    const {value: title, errorMessage: titleError} = useField('title');
    const {value: img, errorMessage: imgError} = useField('img');
    const {value: timeRead, errorMessage: timeReadError} = useField('time_read');
    const {value: isPublished, errorMessage: isPublishedError} = useField('is_published');

    const simpleSchema = yup.object({
      body: yup.string().required().max(256),
      title: yup.string().required().max(256),
      img: yup.string().required().max(256),
      postTitle: yup.string().required().min(3, 'Не больше 3 символов.'),
      timeRead: yup.number().required(),
      isPublished: yup.number().required(),
    });

    function onSubmit() {

    }

    function onLoadPost(id) {
      if (!id) return

      axios.get(`${process.env.VUE_APP_API_URL}/api/blog/post/${id}`).then((res) => {
            if (res.data) {
              body.value = res.data.body
              img.value = res.data.img
              title.value = res.data.title
              timeRead.value = res.data.time_read
              isPublished.value = res.data.is_published
            }
          }
      ).catch((error) => {
        error?.response?.data && errors.value.push(error.response.data.error)
      })
    }

    useForm({
      validationSchema: simpleSchema,
    });



    onMounted(() => onLoadPost(route.params.post))

    return {
      title,
      body,
      img,
      timeRead,
      isPublished,
      titleError,
      bodyError,
      timeReadError,
      isPublishedError,
      imgError,
      onSubmit,
    }
  }
}
</script>

<style scoped>

</style>