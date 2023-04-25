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
                v-model="formData.email"
                required
              />
            </div>
            <div class="form__field">
              <label class="form__label" for="password">Password</label>
              <input
                class="form__input"
                type="password"
                id="password"
                v-model="formData.password"
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
      formData: {
        email: "",
        password: "",
      },
      errors:[]
    };
  },
  methods: {
    handleSubmit(e: Event) {
      e.preventDefault();

        // destring the email and password from the form data object
        const { email, password } = this.formData;

        if (email && password) {
          // make a post request to the server using fetch
          fetch("api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              email: email,
              password: password,
            }),
          })
            .then((response) => {
              if (response.ok) {
                // if the response is ok, redirect to the dashboard
                this.$router.push("/dashboard");
              }

              if (!response.ok) {
                // if the response is not ok, return the error from the server
                console.log(response.statusText);
                // push the error to the errors array
                const error:string = response.statusText;
                return response.json();
              }
              // if the response is not ok, return the error from the server
              console.log(response.statusText);
              return response.json();
             
            })
            .catch((error) => {
              console.log(error);
            });       
        }
      },
  },
};
</script>
    
    <style scoped>
    .warning {
      color: red;
    }
    </style>
  