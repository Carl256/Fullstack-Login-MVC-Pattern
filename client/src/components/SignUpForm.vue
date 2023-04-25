<template>
  <div class="container">
    <!-- v if -->
    <div class="notification" v-if="errors.length>0">
      <div class="notification__content">
          <p v-for="error in errors" :key="error" class="notification__text">{{ error.message }}</p>
          <button class="notification__close-btn" @click="errors=[]">X</button>
        </div>
    </div>

    <div class="container__wrapper">
      <div class="card card--white">
        <div class="card__content">
          <form class="form" @submit="handleSubmit">
            <h1 class="form__title">Create Account</h1>
            <div class="form__field">
              <label class="form__label" for="email">Email</label>
              <input class="form__input" type="email" id="email" v-model.trim="email" required />
            </div>
            <div class="form__field">
              <label class="form__label" for="password">Password</label>
              <input class="form__input" type="password" id="password" v-model.trim="password" required />
            </div>
            <div class="form__field">
              <label class="form__label" for="confirm-password">Confirm Password</label>
              <input class="form__input" type="password" id="confirm-password" v-model.trim="confirmPassword" required />
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
//import the createUser function from the eventService
import { createUser } from "../services/eventService";

export default defineComponent({
  name: "SignUpForm",
  data() {
    return {
      // an empty array to store the errors
      errors: [{} = {}] = [],
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
      }

      if (this.password === this.confirmPassword) {
        createUser(data, this.errors)
      }


      // } else {
      //   // make a post request to the server using fetch
      //   fetch("api/signup", requestOptions)
      //   .then(async (response) => {
      //     const data = await response.json();

      //     // check for error response
      //     if (!response.ok) {
      //       // get error message from body or default to response status
      //       const error = (data && data.message) || response.status;
      //       return Promise.reject(error);
      //     }

      //     // if the response is ok, redirect to the login page
      //     // if(response.ok) {
      //     //   this.$router.push("/login");
      //     // }
      //   })
      //   .then((data) => {
      //     console.log(data);
      //     this.$router.push("/login");
      //   })
      //   .catch((error) => {
      //     this.errorMessage = error;
      //     console.error("There was is  an error!", error);
      //   });

      // }
    },
  },
});
</script>
  