<template>
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
  <ul>
    <li v-for="error in errors" v-bind:key="error">{{ JSON.stringify(error) }}</li>
  </ul>
  </p>
</template>

<script>
import {toRefs} from "vue";

export default {
  name: "Errorhandler.component",
  props: {
    errors: Object
  },
  setup(props) {
    const errorsBag = toRefs(props).errors
    return {errorsBag}
  }
}
</script>

<style scoped>
li {
  color: red;
}

</style>