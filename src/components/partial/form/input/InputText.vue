<template>
  <div>
    <label>
      {{ label }}
      {{valueBag}}
      <input type="text" v-model="valueBag" :name="name"/>
    </label>
    <ErrorDirectorPartial v-model:errors="errorsBag"/>
  </div>
</template>

<script>
import ErrorDirectorPartial from "@/components/partial/form/errorDirector/ErrorDirectorPartial";
import {useVModel} from "@/hooks/useVModel";

export default {
  name: "InputText",
  components: {ErrorDirectorPartial},
  props: {
    value: String,
    name: String,
    error: String,
    label: String
  },
  setup(props) {
    return {
      errorsBag: useVModel(props, 'error'),
      valueBag: useVModel(props, 'value'),
    }
  }
}
</script>

<style scoped>

</style>