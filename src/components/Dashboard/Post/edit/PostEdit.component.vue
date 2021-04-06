<template>
  <div>
    Edit post id :{{ $route.params.post }}
    <form @submit.prevent="onSubmit">

      <input-text name="title" v-model="title" label="Title" v-model:value="title" v-model:error="errors.title"/>
      <input-textarea name="body" label="Body" v-model:value="body" v-model:error="errors.body"/>

      <div>
        <input-text name="img" label="Image" v-model:value="img" v-model:error="errors.img"/>
      </div>

      <input-text name="time_read" label="Time Read" v-model:value="timeRead" v-model:error="errors.timeRead"/>
      <select-component v-if="isPublished!='undefined'" name="is_published" label="Published" v-model:options="isPublishedOptionsStatic" v-model:value="isPublished" v-model:error="errors.isPublished"/>
      <input-text name="created_by" label="Created by" v-model:value="createdBy" v-model:error="errors.createdBy"/>

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
import SelectComponent from "../../../partial/form/input/Select";
import { computed } from 'vue'
import {useStore} from "vuex";

export default {
  name: "PostEdit.component",
  components: {
    SelectComponent,
    InputTextarea,
    InputText},
  setup() {
    const route = useRoute()
    const store = useStore()
    const isPublishedOptionsStatic = computed(() => store.getters['post/getIsPublishedOptionsStatic'])

    // const errors = ref([])


    const simpleSchema = yup.object({
      body: yup.string().required().max(256),
      title: yup.string().required().min(3),
      img: yup.string().required().max(256),
      postTitle: yup.string().required().min(3, 'Не больше 3 символов.'),
      timeRead: yup.number().required(),
      isPublished: yup.boolean().required(),
    });

    const {errors} = useForm({
      validationSchema: simpleSchema,
    });

    const {value: body} = useField('body');
    const {value: title} = useField('title');
    const {value: img} = useField('img');
    const {value: timeRead} = useField('time_read');
    const {value: isPublished} = useField('is_published');
    const {value: createdBy} = useField('created_by');


    function onSubmit() {
      onUpdatePost(route.params.post)
    }

    function onUpdatePost(id) {
      if (!id) return
      let options = {
        title: title.value,
        body: body.value,
        is_published: isPublished.value,
        time_read: timeRead.value,
        created_by: createdBy.value
      }

      axios.put(`${process.env.VUE_APP_API_URL}/api/blog/post/${id}`, options).then((res) => {
        console.log(res)
            // if (res.data) {
            // }
          }
      ).catch((error) => {
        console.log('error?.response', error.response)
        // error?.response?.data && errors.value.push(error.response.data.error)
      })
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
              createdBy.value = res.data.created_by
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
      createdBy,
      isPublishedOptionsStatic,
      errors,
      onSubmit,
    }
  }
}
</script>

<style scoped>

</style>