import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/components/LoginForm.vue';
import ForgotPassword from '@/components/ForgotPassword.vue';
import SignUpForm from '@/components/SignUpForm.vue';

import HomeView from '@/views/HomeView.vue';

const routes = [
    // {
    // path: '/',
    // component: HomeView,
    // },
  {
    path: '/',
    component: LoginForm,
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/sign-up',
    component: SignUpForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
