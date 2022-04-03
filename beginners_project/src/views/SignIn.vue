<template>
  <div class="container">
    <h2 class="py-4 text-center">Registration</h2>
    <div class="row">
      <form
        autocomplete="off"
        @submit.prevent="OnSubmit"
        class="col-lg-6 offset-lg-3 border p-4"
        id="signup-form"
      >
        <div class="form-group">
          <label for="firstName" class="col-form-label col-form-label-lg"
            >First Name <span class="text-danger">*</span></label
          >
          <input
            type="text"
            id="firstName"
            name="firstName"
            v-model="state.firstname"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': submitted && v$.firstname.$error }"
          />
          <span class="text-danger" v-if="v$.firstname.$error">{{
            v$.firstname.$errors[0].$message
          }}</span>
        </div>
        <div class="form-group">
          <label for="lastName" class="col-form-label col-form-label-lg"
            >Last Name <span class="text-danger">*</span></label
          >
          <input
            type="text"
            id="lastName"
            name="lastName"
            v-model="state.lastname"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': submitted && v$.lastname.$error }"
          />
          <span class="text-danger" v-if="v$.lastname.$error">{{
            v$.lastname.$errors[0].$message
          }}</span>
        </div>
        <div class="form-group">
          <label for="mail" class="col-form-label col-form-label-lg"
            >Email <span class="text-danger">*</span></label
          >
          <input
            type="text"
            id="email"
            name="email"
            v-model="state.email"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': submitted && v$.email.$error }"
          />
          <span class="text-danger" v-if="v$.email.$error">{{
            v$.email.$errors[0].$message
          }}</span>
        </div>
        <div class="form-group">
          <label for="password" class="col-form-label col-form-label-lg"
            >Create Password <span class="text-danger">*</span></label
          >
          <input
            type="text"
            id="password"
            name="password"
            v-model="state.password"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': submitted && v$.password.$error }"
          />
          <span class="text-danger" v-if="v$.password.$error">{{
            v$.password.$errors[0].$message
          }}</span>
        </div>
        <div class="form-group">
          <label for="confirmPassword" class="col-form-label col-form-label-lg"
            >Confirm Password <span class="text-danger">*</span></label
          >
          <input
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            v-model="state.confirmpassword"
            class="form-control form-control-lg"
            :class="{ 'is-invalid': submitted && v$.confirmpassword.$error }"
          />
          <span class="text-danger" v-if="v$.confirmpassword.$error">{{
            v$.confirmpassword.$errors[0].$message
          }}</span>
        </div>
        <div class="form-group form-check py-3">
          <input
            type="checkbox"
            class="form-check-input"
            id="terms"
            v-model="state.terms"
          />
          <label class="form-check-label" for="terms"
            >Terms and Conditions</label
          >
          <p class="text-danger" v-if="v$.terms.$error">
            {{ v$.terms.$errors[0].$message }}
          </p>
        </div>
        <div class="py-3 d-grid gap-2 col-3 mx-auto">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import useValidate from '@vuelidate/core'
import { required, email, sameAs, helpers } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
  setup: () => {
    const state = reactive({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: '',
      terms: false
    })

    const rules = computed(() => {
      return {
        firstname: {
          required: helpers.withMessage('First Name is required.', required)
        },
        lastname: {
          required: helpers.withMessage('Last Name is required.', required)
        },
        email: {
          required: helpers.withMessage('Email is required.', required),
          email
        },
        password: {
          required: helpers.withMessage('Password is required.', required)
        },
        confirmpassword: {
          required: helpers.withMessage(
            'Confirm Password is required.',
            required
          ),
          sameAs: sameAs(state.password)
        },
        terms: { required }
      }
    })

    const v$ = useValidate(rules, state)

    return {
      state,
      v$
    }
  },
  methods: {
    OnSubmit () {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error))
      this.submitted = true
      this.v$.$validate()
      if (!this.v$.$error) {
        // if ANY fail validation
        alert('Form successfully submitted.')
      } else {
        alert('Form failed validation')
      }
    }
  }
}
</script>
