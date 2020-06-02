<template>
  <form @submit.prevent="submit">
    <input
      type="email"
      placeholder="What's your email"
      v-model="email"
      :class="{ error: $v.email.$error }"
      @blur="$v.email.$touch()"> <!-- the blur effect will be on if the vuelidate email has been touch but not finished by the user, the below v-if will take action -->

    <div v-if="$v.email.$error">
      <p v-if="!$v.email.email" class="errorMessage">
        Please enter a valid email
      </p>
      <p v-if="!$v.email.required" class="errorMessage">Email is required</p>
    </div>

    <button :disabled="$v.$invalid" type="submit">Submit</button> <!-- if email vuelidate is invalid, the button is disabled -->
    <p v-if="$v.$anyError" class="errorMessage">
      Please fill out the required fields
    </p>
  </form>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: null
    };
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) { // if our form is not invalid, we will submit it
        console.log("Form Submission:", this.email);
      }
    }
  }
}
</script>
