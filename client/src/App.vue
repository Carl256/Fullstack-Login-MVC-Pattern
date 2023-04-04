<template>
  <div>
    <NavBarComponent />
    <main class="router">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarComponent from "./components/NavBarComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBarComponent,
  },
});
</script>





