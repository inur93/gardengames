<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-row>
          <ion-col v-for="game in games">
            <score-table :game="game">
            </score-table>
          </ion-col>
        </ion-row>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { IonContent, IonPage, IonTitle, IonHeader, IonToolbar, IonRow, IonCol, IonButton } from '@ionic/vue';

import ScoreTable from '../components/ScoreTable.vue';
import type { Game } from '../api/client';
import api from '../api';

type Data = {
  showModal: boolean,
  games: Game[]
}

export default defineComponent({
  components: {
    IonContent, IonPage, IonTitle, IonHeader, IonToolbar, IonRow, IonCol, IonButton,
    ScoreTable
  },
  data(): Data {
    return {
      showModal: false,
      games: []
    }
  },
  methods: {},
  mounted() {
    api.getGames().then(res => this.games = res)
  }
})
</script>