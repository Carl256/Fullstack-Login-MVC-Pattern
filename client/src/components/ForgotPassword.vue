<template>
  <div class="container">
    <div class="container__wrapper">
      <div class="card">
        <div class="card__content">
          <form class="form">
            <h2 class="form__title">Forgot Password</h2>

            <div class="form__group">
              <div class="form__field">
                <label for="email" class="form__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form__input"
                  v-model.trim="email"
                  required
                />
              </div>
            </div>

            <button type="submit" class="form__button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ResponseErrors, FormData } from "../interfaces/errors";
import { resetPassword } from "../services/eventService";

export default defineComponent({
  name: "ForgotPassword",

  data() {
    return {
      errors: [] as ResponseErrors[],
      email: "",
    };
  },

  methods: {
    async handleSubmit(e: Event) {
      e.preventDefault();

      if (!this.email ) {
        this.errors = [{ message: "Please fill out all fields." }];
      }

      try {
          const data: FormData = {
            email: this.email,
          };

          await resetPassword(data, this.errors);
          this.email = "";

          //if the errors are empty then redirect to the dashboard
          if(!this.errors){
            //wait 3 seconds and then redirect to the login page
          setTimeout(() => {
            this.$router.push({ name: "login" });
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

