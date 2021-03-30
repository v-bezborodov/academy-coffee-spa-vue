<template>
  <div>
    <label>
      {{ label }}
      <input type="text" v-model="valueBag" :name="name"/>
    </label>
    <ErrorDirectorPartial v-model:errors="errorsBag"/>
  </div>
</template>

<script>
// import useInputValidator from "@/features/useInputValidator";
// import {minLength} from "@/validators";
import ErrorDirectorPartial from "@/components/partial/form/errorDirector/ErrorDirectorPartial";

// import {toRefs} from "vue";
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
    // const {input, errors} = useInputValidator(
    //     props.value,
    //     [minLength(3)],
    //     value => emit("input", value)
    // );

    // const errorsBag = toRefs(props).error
    // const valueBag = toRefs(props).value
    // const nameBag = toRefs(props).value
    return {
      errorsBag: useVModel(props, 'error'),
      valueBag: useVModel(props, 'value'),
    }
  }
}
</script>

<style scoped>

</style>