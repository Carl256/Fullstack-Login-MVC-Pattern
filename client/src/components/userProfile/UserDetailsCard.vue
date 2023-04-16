<template>
  <div class="card">
    <div class="card__header">
      <h3 class="card__title">User Details</h3>
    </div>
    <div class="card__image">
      <img src="https://via.placeholder.com/150" alt="User Avatar" />
    </div>
    <div class="card_body">
      <h3>User name</h3>
      <p>user email</p>
      <p>User City</p>

      <div class="card__socials">
        <router-link to="" class="fab connect">Connect</router-link>
        <router-link to="" class="fab fa-message">Send Message</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserDetailsCard",
});
</script>

