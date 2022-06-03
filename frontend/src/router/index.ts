import { createRouter, createWebHistory } from '@ionic/vue-router';
import type { RouteRecordRaw } from 'vue-router';

import HomeView from "../views/HomeView.vue";
import CreateParticipantView from "../views/CreateParticipantView.vue";
import CreateScoreView from '../views/CreateScoreView.vue';
import ImagesView from '../views/ImagesView.vue';

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
  },
  {
    path: '/gallery',
    name: 'Billeder',
    component: ImagesView
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
