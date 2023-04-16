<template>
  <div class="user-menu">
    <ul>
      <li>
        <router-link to="/profile">Settings</router-link>
      </li>
      <li>
        <router-link to="/profile">Tables</router-link>
      </li>
      <li>
        <router-link to="/profile">Insights</router-link>
      </li>
      <li>
        <router-link to="/profile">Components</router-link>
      </li>
      <li>
        <router-link to="/profile">Logout</router-link>
      </li>
    </ul>

    <ul>
      <li>
        <router-link to="/profile">Presentation</router-link>
      </li>
      <li>
        <router-link to="/profile">UI Docs</router-link>
      </li>
      <li>
        <router-link to="/profile">themesberg</router-link>
      </li>
      <li>
        <router-link to="/profile">AppSpeed</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserMenu",
});

</script>

