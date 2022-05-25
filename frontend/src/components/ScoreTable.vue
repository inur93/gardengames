<template>
  <ion-card>
    <ion-card-header>
      <ion-toolbar>
        <ion-card-title>
          {{ game?.name }}
        </ion-card-title>
        <ion-buttons slot="secondary">
          <ion-button :href="`add-score?game=${game?.id}`">
            <ion-icon slot="icon-only" :icon="add"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-card-header>
    <ion-card-content>
      <table>

        <tr>
          <th>#</th>
          <th>Navn</th>
          <th>Point</th>
        </tr>
        <tr v-for="(row, index) in game?.scores" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ row.player.nickname || row.player.name }}</td>
          <td>{{ row.score }}</td>
        </tr>
      </table>

    </ion-card-content>
  </ion-card>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonToolbar, IonButton, IonButtons, IonIcon } from '@ionic/vue'
import { add } from 'ionicons/icons'
import type { Game, Score } from '../api/client'
export default defineComponent({
  components: {
    IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonToolbar, IonButton, IonButtons, IonIcon
  },
  setup() {
    return {
      add
    }
  },
  props: {
    game: Object as PropType<Game>
  },
});
</script>

<style>
table {
  width: 100%;
}

td,
th {
  text-align: left;
  padding: 8px;
}

th {
  font-weight: 600;
  border-bottom: 1px solid black;
}
</style>