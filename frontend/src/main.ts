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
import VueVirtualScroller, { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller';
import LogRocket from 'logrocket';

LogRocket.init('ykqnbu/gardengames');

const app = createApp(App);


app.use(IonicVue);
app.use(router);
app.use(VueVirtualScroller);
app.component("DynamicScroller", DynamicScroller)
app.component("DynamicScrollerItem", DynamicScrollerItem)

router.isReady().then(() => {
  app.mount('#app');
});