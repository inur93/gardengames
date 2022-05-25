<template>
  <ion-app>

    <ion-page>
      <!-- @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange" -->

      <ion-tabs>
        <ion-router-outlet />
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="scores" href="/scores">
            <ion-icon :icon="medalOutline"></ion-icon>
            <ion-label>Stillinger</ion-label>
            <!-- <ion-badge>6</ion-badge> -->
          </ion-tab-button>

          <ion-tab-button tab="gallery" href="/gallery">
            <ion-icon :icon="imagesOutline"></ion-icon>
            <ion-label>Billeder</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="participant" href="/create-participant">
            <ion-icon :icon="personAddOutline"></ion-icon>
            <ion-label>Opret Deltager</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </ion-app>
</template>
<script lang="ts">
import { IonApp, IonPage, IonRouterOutlet, IonTabBar, IonTabs, IonIcon, IonLabel, IonTabButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { personCircle, imagesOutline, personAddOutline, medalOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonApp, IonPage,
    IonRouterOutlet, IonTabBar, IonTabs, IonIcon, IonLabel, IonTabButton
  },
  setup() {
    return { medalOutline, personCircle, imagesOutline, personAddOutline }
  }
});
</script>
<style>

</style>
