<template>
  <div>
    <p>
     {{ errorsBag }}
    </p>
  </div>
</template>

<script>
import {useVModel} from '@/hooks/useVModel';

export default {
  name: "ErrorDirectorPartial",
  props: {
    errors: String
  },
  setup(props) {

    return {
      errorsBag: useVModel(props, 'errors')
    }
  },
}
</script>

<style scoped>
p {
  color: red;
}

</style>