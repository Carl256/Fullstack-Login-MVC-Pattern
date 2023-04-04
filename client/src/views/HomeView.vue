<template>
    <div>
      <homecomponent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import homecomponent from '../components/homecomponent.vue';

export default defineComponent({
    name: 'HomeView',
    components: {
        homecomponent,
    },
    setup() {
        
    },
})
</script>
