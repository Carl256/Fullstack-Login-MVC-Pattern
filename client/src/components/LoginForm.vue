<template>
  <div class="container">
    <div class="container__wrapper">
      <div class="card card--white">
        <div class="card__content">
          <form class="form" @submit="handleSubmit">
            <h1 class="form__title">App Name Login</h1>
            <div class="form__field">
              <label class="form__label" for="email">Email</label>
              <input
                class="form__input"
                type="email"
                id="email"
                v-model="email"
                required
              />
            </div>
            <div class="form__field">
              <label class="form__label" for="password">Password</label>
              <input
                class="form__input"
                type="password"
                id="password"
                v-model="password"
                required
              />
            </div>
            <button class="form__button" type="submit">Login</button>

            <div class="links">
              <router-link to="/forgot-password">Forgot password?</router-link>
            </div>

            <div class="links">
              <router-link to="/sign-up"
                >Don't have an account? Sign up here.</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit(e: Event) {
      e.preventDefault();
        if (this.email && this.password) {
          // make a post request to the server using fetch
          fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
             console.log(data);
              this.$router.push("/dashboard");
            })
            .catch((error) => {
              alert(error.message);
            });
        }
      },

    openForgotPassword() {
      // open forgot password modal
    },
  },
};
</script>
  