import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/blog',
      component: () => import('@/views/BlogView.vue'),
    },
    {
      path: '/blog:id',
      components: () => import('@/views/SinglePostView.vue'),
    },
    {
      path: '/cart',
      component: () => import('@/views/CartView.vue'),
    },
    {
      path: '/check-out',
      component: () => import('@/views/CheckOutView.vue'),
    },
    {
      path: '/my-account',
      component: () => import('@/views/MyAccountView.vue'),
    },
    {
      path: '/order',
      component: () => import('@/views/OrderView.vue'),
    },
    {
      path: '/products',
      component: () => import('@/views/ProductView.vue'),
    },
    {
      path: '/singin',
      component: () => import('@/views/SinginView.vue'),
    },
    {
      path: '/post:id',
      component: () => import('@/views/SinglePostView.vue'),
    },
    {
      path: '/products:id',
      component: () => import('@/views/SingleProductView.vue'),
    },
    {
      path: '/singup',
      component: () => import('@/views/SingupView.vue'),
    },
  ],
})

export default router
