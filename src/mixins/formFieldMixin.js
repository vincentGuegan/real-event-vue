export const formFieldMixin = {
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