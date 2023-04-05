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
      fetch("http://localhost:3000/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
});
</script>
  