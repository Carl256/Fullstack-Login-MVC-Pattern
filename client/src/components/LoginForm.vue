<template>
  <div class="container">
    <Notification v-if="hasNotification" :errors="errors" :message="message" @close="closeNotification" />

    <div class="container__wrapper">
      <div class="card card--white">
        <div class="card__content">
          <form class="form" @submit="handleSubmit">
            <h1 class="form__title">App Name Login</h1>
            <div class="form__field">
              <label class="form__label" for="email">Email</label>
              <input class="form__input" type="email" id="email" v-model.trim="email" required />
            </div>
            <div class="form__field">
              <label class="form__label" for="password">Password</label>
              <input class="form__input" type="password" id="password" v-model.trim="password" required />
            </div>
            <button class="form__button" type="submit">Login</button>

            <div class="links">
              <router-link to="/forgot-password">Forgot password?</router-link>
            </div>

            <div class="links">
              <router-link to="/sign-up">Don't have an account? Sign up here.</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import { loginUser } from "../services/eventService";
import { ResponseErrors, ResponseMessage, FormData } from "../interfaces/errors";
import Notification from "./shared/Notifications.vue";

export default defineComponent({
  name: "LoginForm",

  components: {
    Notification,
  },
  data() {
    return {
      email: "",
      password: "",
      errors: [] as ResponseErrors[],
      message: {} as ResponseMessage,
    };
  },

  computed: {
    hasNotification(): boolean {
      return this.errors.length > 0;
    },
  },
  methods: {
    async handleSubmit(e: Event) {
      e.preventDefault();

      if (!this.email && !this.password) {
        this.errors = [{ message: "Please fill out all fields." }];
      }

      try {
          const data: FormData = {
            email: this.email,
            password: this.password,
          };

          const successFulLogin = await loginUser(data, this.errors);

          this.email = "";
          this.password = "";

          //if the errors are empty then redirect to the dashboard
          if(!this.errors){
            //wait 3 seconds and then redirect to the login page
          setTimeout(() => {
            this.$router.push({ name: "dashboard" });
          }, 500);
          }
          return;

        } catch (err) {
          return err;
        }
    },

    closeNotification() {
      this.errors = [];
    },
  },
});
</script>  
  