<template>
  <div class="container">
    <div class="container__wrapper">
      <div class="card card--white">
        <div class="card__content">
          <form class="form" @submit.prevent="handleSubmit">
            <h1 class="form__title">Create Account</h1>
            <div class="form__field">
              <label class="form__label" for="email">Email</label>
              <input
                class="form__input"
                type="email"
                id="email"
                v-model.trim="email"
                required
              />
            </div>
            <div class="form__field">
              <label class="form__label" for="password">Password</label>
              <input
                class="form__input"
                type="password"
                id="password"
                v-model.trim="password"
                required
              />
            </div>
            <div class="form__field">
              <label class="form__label" for="confirm-password"
                >Confirm Password</label
              >
              <input
                class="form__input"
                type="password"
                id="confirm-password"
                v-model.trim="confirmPassword"
                required
              />
            </div>
            <button class="form__button" type="submit" :click="handleSubmit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

  
<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "SignUpForm",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },


  methods: {
    handleSubmit() {
      const data = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };

      // if the confirm password is not the same as the password throw an error and return an empty password field
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        this.password = "";
        this.confirmPassword = "";
        return;
      }
    },
  },
});
</script>
  