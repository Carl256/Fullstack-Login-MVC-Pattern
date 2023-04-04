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

export default defineComponent({
  name: "ForgotPassword",

  data() {
    return {
      email: "",
    };
  },

  methods: {
    async submitForm() {
      // Submit the form to the server and handle the response
    },
  },
});
</script>

