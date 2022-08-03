/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
/* Virtual Scroll */
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

import { IonicVue } from '@ionic/vue';

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import api from './api';
import VueVirtualScroller from 'vue-virtual-scroller';
import LogRocket from 'logrocket';
import type { Settings } from './api/client';
if (process.env.NODE_ENV !== 'development') {
  console.log('using logrocket');
  LogRocket.init('ykqnbu/gardengames');
}
const app = createApp(App);

const configure = ({ title, primaryColor, textColor, backgroundColor, cardBackgroundColor, menuBackgroundColor, tableBorderColor }: Settings) => {
  
  document.title = title;
  //https://ionicframework.com/docs/theming/colors
  document.documentElement.style.setProperty('--ion-color-primary', primaryColor);
  //background of all app
  document.documentElement.style.setProperty('--ion-background-color', backgroundColor);
  //background of score table header, create button container on form, and page header
  // document.documentElement.style.setProperty('--ion-toolbar-background', 'rgna(0,0,0,0)');
  //background of bottom navbar
  document.documentElement.style.setProperty('--ion-tab-bar-background', menuBackgroundColor);
  document.documentElement.style.setProperty('--ion-card-background', cardBackgroundColor);
  document.documentElement.style.setProperty('--table-border-color', tableBorderColor);

  //table data and form texts
  document.documentElement.style.setProperty('--ion-item-color', textColor);

  //headers and table icons (not table headers)
  document.documentElement.style.setProperty('--ion-tab-bar-color-selected', primaryColor);

  //table headers, page title and header
  document.documentElement.style.setProperty('--ion-text-color', textColor);
}

app.use(IonicVue);
app.use(router);
app.use(VueVirtualScroller);

api.getSettings()
  .then(configure)
  .finally(() => {
    router.isReady().then(() => {
      app.mount('#app');
    });
  })
