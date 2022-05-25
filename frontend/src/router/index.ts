import { createRouter, createWebHistory } from '@ionic/vue-router';
import type { RouteRecordRaw } from 'vue-router';

import HomeView from "../views/HomeView.vue";
import CreateParticipantView from "../views/CreateParticipantView.vue";
import CreateScoreView from '../views/CreateScoreView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/scores'
  },
  {
    path: '/scores',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/create-participant',
    name: "Opret deltager",
    component: CreateParticipantView
  },
  {
    path: "/add-score",
    name: "Opret resultat",
    component: CreateScoreView
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
  // routes: [
  //   {
  //     path: "/",
  //     name: "home",
  //     component: HomeView,
  //   },
  //   {
  //     path: "/about",
  //     name: "about",
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import("../views/AboutView.vue"),
  //   },
  // ],
});

export default router;
