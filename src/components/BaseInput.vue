<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <input :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners"> <!-- When the input event happens, it will trigger the updateValue method which sounds up the payload; to add the v-on="listeners" to our BaseInput component’s select element so it can inherit the blur event listener from the parent scope; to note that here the listener is an object because -->
    </div>
</template>
 
<script>
import { formFieldMixin } from '../mixins/formFieldMixin';
export default {
    mixins: [formFieldMixin]
}
</script>

<style lang="scss" scoped>

</style>