<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <input :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners"> <!-- When the input event happens, it will trigger the updateValue method which sounds up the payload; to add the v-on="listeners" to our BaseInput component’s select element so it can inherit the blur event listener from the parent scope; to note that here the listener is an object because -->
    </div>
</template>
 
<script>
export default {
    inheritAttrs: false,
    props: {
        label: {
            type: String, 
            default: ""
        },
        value: [String, Number]
    },
    computed: {
      listeners() { //both our input events can exist alongside each other within a listeners object, which our computed property returns
        return {
          ...this.$listeners,
          input: this.updateValue
        }
      }
    },
    methods: {
        updateValue(event) {
            this.$emit("input", event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>