import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/components/LoginForm.vue';
import ForgotPassword from '@/components/ForgotPassword.vue';
import SignUpForm from '@/components/SignUpForm.vue';

import HomeView from '@/views/HomeView.vue';
import UserView from '@/views/UserView.vue';

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
    path: '/login',
    component: LoginForm,
    name: 'login',
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/sign-up',
    component: SignUpForm,
  },
  {
    path: '/dashboard',
    component: UserView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
