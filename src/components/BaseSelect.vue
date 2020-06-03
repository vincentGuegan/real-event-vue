<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <select :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners"> <!-- When the input event happens, it will trigger the updateValue method which sounds up the payload / with v-on="listeners", now inheriting event listeners here -->
            <option
                v-for="option in options"
                :value="option"
                :key="option.id"
                :selected="option === value" 
                >{{ option }}</option>
        </select>
    </div>
</template>
 
<script>
export default {
    inheritAttrs: false,
    props: {
        options: { // options which can be selected
            type: Array,
            required: true,
        },
        label: {
            type: String, 
            default: ""
        },
        value: [String, Number]
    },
    computed: {
      listeners() {
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