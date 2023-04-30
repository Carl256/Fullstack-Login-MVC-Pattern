<template>
  <div class="container">
    <Notification v-if="hasNotification" :errors="errors" :message="message" @close="closeNotification" />

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
import { createUser } from "../services/eventService";
import { ResponseErrors, ResponseMessage, FormData } from "../interfaces/errors";
import Notification from "./shared/Notifications.vue";

export default defineComponent({
  name: "SignUpForm",

  components: {
    Notification,
  },

  data() {
    return {
      errors: [] as ResponseErrors[],
      message: {} as ResponseMessage,
      email: "",
      password: "",
      confirmPassword: "",
    };
  },

  computed: {
    hasNotification(): boolean {
      return this.errors.length > 0 || Object.keys(this.message).length > 0;
    },
  },
  
  methods: {
    async handleSubmit(e: Event) {
      e.preventDefault();

      // check if the passwords match
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      try {
        const data: FormData = {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        };
        await createUser(data, this.errors, this.message);

        // // clear the form
        this.email = "";
        this.password = "";
        this.confirmPassword = "";

      } catch (error) {
        console.error(error);
      }

    },

    // create the close notification button
    closeNotification() {
      this.errors = [];
      this.message = {} as ResponseMessage;
    },
  },
});
</script>
  