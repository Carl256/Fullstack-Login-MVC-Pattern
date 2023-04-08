<template>
  <div class="container">
    <div class="container__wrapper">
      <div class="card card--white">
        <div class="card__content">
          <form class="form" @submit="handleSubmit">
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

            <button class="form__button" type="submit">Sign Up</button>
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
    handleSubmit(e: Event) {
      const data = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };

      e.preventDefault();

      // check if the passwords match
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
      } else {
        // make a post request to the server using fetch
        fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          // if the request is created successfully, redirect to the login page
          .then((res) => {
            if (res.status === 201) {
              alert("Account created successfully");
              this.$router.push("/login");
            }
          })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
});
</script>
  