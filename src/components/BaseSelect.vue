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
import { formFieldMixin } from '../mixins/formFieldMixin';
export default {
    mixins: [formFieldMixin],
    props: {
        options: { // options which can be selected
            type: Array,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>