<template>
  <div>
    Edit post id :{{ $route.params.post }}
    <form @submit.prevent="onSubmit">

      <input-text name="title" v-model="title" label="Title" v-model:value="title" v-model:error="errors.title"/>
      <input-textarea name="body" label="Body" v-model:value="body" v-model:error="errors.body"/>
      <div>
        <input-text name="img" label="Image" v-model:value="img" v-model:error="errors.img"/>
      </div>

      <input-text name="time_read" label="Time Read"  v-model:value="timeRead" v-model:error="errors.timeRead"/>
      <input-text name="is_published" label="Published"  v-model:value="isPublished" v-model:error="errors.isPublished"/>
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
import {onMounted} from "vue";
import {useRoute} from 'vue-router'
import InputTextarea from "@/components/partial/form/input/InputTextarea";

export default {
  name: "PostEdit.component",
  components: {InputTextarea, InputText},
  setup() {
    const route = useRoute()

    // const errors = ref([])



    const simpleSchema = yup.object({
      body: yup.string().required().max(256),
      title: yup.string().required().min(3),
      img: yup.string().required().max(256),
      postTitle: yup.string().required().min(3, 'Не больше 3 символов.'),
      timeRead: yup.number().required(),
      isPublished: yup.number().required(),
    });

    const { errors } = useForm({
      validationSchema: simpleSchema,
    });

    const {value: body} = useField('body');
    const {value: title} = useField('title');
    const {value: img} = useField('img');
    const {value: timeRead} = useField('time_read');
    const {value: isPublished} = useField('is_published');



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
        console.log('error?.response', error.response)
        // error?.response?.data && errors.value.push(error.response.data.error)
      })
    }


    onMounted(() => onLoadPost(route.params.post))

    return {
      title,
      body,
      img,
      timeRead,
      isPublished,
      errors,
      onSubmit,
    }
  }
}
</script>

<style scoped>

</style>