<template>
  <div>
    <label>
      {{ label }}
      <!--      computedValue{{ computedValue }}-->
<!--      valueBag{{ valueBag }}-->
      value2{{ value1 }}
      <multiselect v-model="value2"
                   :options="options"
                   trackBy="value"
                   label="label"
                   mode="single"
      />
    </label>
    <ErrorDirectorPartial v-model:errors="errorsBag"/>
  </div>
</template>

<script>
import ErrorDirectorPartial from "@/components/partial/form/errorDirector/ErrorDirectorPartial";
// import {useVModel} from "@/hooks/useVModel";
// import Multiselect from 'vue-multiselect'
import Multiselect from '@vueform/multiselect'
// import {computed, reactive, toRefs} from "vue";

export default {
  name: "Select",
  components: {
    ErrorDirectorPartial,
    Multiselect
  },
  props: {
    value: {
      type: [Number, String, Boolean],
      required: true,
    },
    options: Object,
    name: String,
    error: String,
    label: String
  },
  // setup(props) {
  //   console.log('props', props)
  //   // const optionsBag = useVModel(props, 'options');
  //   // const valueBag = useVModel(props, 'value');
  //   // const valueBag2 = ref(true);
  //   // const valueProp = useVModel(props, 'value')
  //
  //   const event = reactive({
  //     valueBag: useVModel(props, 'value'),
  //     optionsBag:useVModel(props, 'options'),
  //     valueCompute: computed(() => {
  //       return event.optionsBag.filter(option => option === event.valueBag)
  //     })
  //   });
  //
  //   // const valueCompute = computed(() => {
  //   //   // console.log(value)
  //   //   console.log('optionsBag', optionsBag.value)
  //   //
  //   //   // if (!valueProp.value) return
  //   //   // console.log('valueProp.value', valueProp.value)
  //   //   // console.log('optionsBag.value.filter(option => option.value === valueBag.value)', optionsBag.value)
  //   //   // return 'test';
  //   //
  //   //   console.log('valueBag.value', valueBag.value)
  //   //   return optionsBag.value.filter(option => option.value === valueBag.value)
  //   //
  //   // });
  //
  //   return {
  //     ...toRefs(event),
  //     errorsBag: useVModel(props, 'error'),
  //   }
  //
  // },
  data() {
    return {
      // value1: {value: "false", label: "Hidden"},
      // options2: [
      //   {value: "true", label: "Published"},
      //   {value: "false", label: "Hidden"}
      // ]
    }
  },

  computed: {
    value2: {
      get() {
        if(!this.value) return
        return this.options.filter(option => option.value === this.value)
      },
      set(value) {
        return this.options.filter(option => option.value === value)
      }
    },
  },
}
</script>

<style scoped>

</style>
<style src="@vueform/multiselect/themes/default.css"></style>