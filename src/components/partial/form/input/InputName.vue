<template>
  <div>
    <label>
      Name
      <input type="text" v-model="input" name="name"/>
    </label>
    <ErrorDirectorPartial v-model:errors="errors"/>
  </div>
</template>

<script>
import useInputValidator from "@/features/useInputValidator";
import {minLength} from "@/validators";
import ErrorDirectorPartial from "@/components/partial/form/errorDirector/ErrorDirectorPartial";

export default {
  name: "InputName",
  components: {ErrorDirectorPartial},
  props: {
    value: String
  },
  setup(props, {emit}) {
    const {input, errors} = useInputValidator(
        props.value,
        [minLength(3)],
        value => emit("input", value)
    );
    return {
      input,
      errors
    }
  }
}
</script>

<style scoped>

</style>