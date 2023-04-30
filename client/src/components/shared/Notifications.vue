<template>
    <div class="notification" v-if="hasContent">
      <div class="notification__content" :class="[hasMessage?'notification__content--bg-success':'notification__content--bg-error']">
        <div v-if="hasErrors">
          <p v-for="error in errors" :key="error" class="notification__text">{{ error }}</p>
        </div>
        <p v-else-if="hasMessage" class="notification__text">{{ message.message}}</p>
        <!-- <p v-else class="notification__text">{{ defaultText }}</p> -->
        <button class="notification__close-btn" @click="closeNotification">X</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { ResponseErrors, ResponseMessage } from '../../interfaces/errors';
  
  export default defineComponent({
    name: 'Notification',
    props: {
      errors:{
        type: Array as PropType<ResponseErrors[]>,
        default: [],
      },
      message: {
        type: Object as PropType<ResponseMessage>,
        default: {},
      },
    },

    computed: {
      hasErrors(): boolean {
        return this.errors.length > 0;
      },
      hasMessage(): boolean {
        return Object.keys(this.message).length > 0;
      },
      hasContent(): boolean {
        return this.hasErrors || this.hasMessage;
      },
    },

    methods: {
      closeNotification(): void {
        this.$emit('close');
      },
    },
  });
  </script>
  