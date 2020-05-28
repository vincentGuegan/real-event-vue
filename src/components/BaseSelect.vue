<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <select :value="value" @input="updateValue" v-bind="$attrs"> <!-- When the input event happens, it will trigger the updateValue method which sounds up the payload -->
            <option
                v-for="option in options"
                :value="option"
                :key="option"
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
    methods: {
        updateValue(event) {
            this.$emit("input", event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>