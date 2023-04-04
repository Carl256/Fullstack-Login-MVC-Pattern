<template>
    <div class="container">
      <div class="container__wrapper">
        <div class="card card--white">
            <div class="card__content">
            <form class="form">
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
                <router-link to="/forgot-password"
                  >Forgot password?</router-link
                >
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
    handleSubmit() {
      // handle login form submit
    },

    openForgotPassword() {
      // open forgot password modal
    },
  },
};
</script>
    
<style scoped lang="scss">
.links{
  text-decoration: none;
  background-color: transparent;
  margin-top: 16px;
  a{
    color: #3a5878;
    text-decoration: none;
    background-color: transparent;
    &:hover{
      color: #0056b3;
      text-decoration: underline;
    }
  }
}
</style>
  
 


  