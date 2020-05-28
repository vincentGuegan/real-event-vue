<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <input :value="value" @input="updateValue" v-bind="$attrs"> <!-- When the input event happens, it will trigger the updateValue method which sounds up the payload -->
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
    methods: {
        updateValue(event) {
            this.$emit("input", event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>