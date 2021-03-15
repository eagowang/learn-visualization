import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import tween from '@/router/tween';
import Posts from '../views/Posts.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/css',
    name: 'Css',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "css-chunk" */ '../views/Css.vue'),
  },
  {
    path: '/tween',
    name: 'Tween',
    component: () =>
      import(/* webpackChunkName: "tween-chunk" */ '../views/Tween.vue'),
    children: tween,
  },
  {
    path: '/d3',
    name: 'D3',
    component: () =>
      import(/* webpackChunkName: "d3-chunk" */ '../views/D3.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
