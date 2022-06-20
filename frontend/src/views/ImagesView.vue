<template>
    <ion-page>
        <ion-header :hidden="landscape">
            <ion-toolbar>
                <ion-title>Billeder</ion-title>
                <ion-buttons slot="secondary">
                    <ion-spinner v-if="loading" name="bubbles" color="primary"></ion-spinner>
                    <ion-button @click="takePhoto">
                        <ion-icon slot="icon-only" :icon="add"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-list>
                <DynamicScroller class="scroller" :items="photos" :min-item-size="780">
                    <template v-slot="{ item, index, active }">
                        <DynamicScrollerItem :item="item" :active="active"
                            :size-dependencies="[item.width, item.height]" :data-index="index">
                            <img :src="`https://res.cloudinary.com/vormadal/image/upload/${item.url}`" :key="item.url"
                                :alt="`photo-${index}`" class="image">
                        </DynamicScrollerItem>
                    </template>
                </DynamicScroller>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">

import { Camera } from '@capacitor/camera';
import {
IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonList, IonPage, IonSpinner, IonTitle, IonToolbar, toastController
} from '@ionic/vue';
import { add } from 'ionicons/icons';
import { defineComponent } from 'vue';
import client from '../api';
import type { Media } from '../api/client';

type Data = {
    photos: Media[]
    loading: boolean,
    landscape: boolean
}

export default defineComponent({
    components: {
        IonContent, IonPage, IonTitle, IonHeader, IonToolbar, IonList, IonButton, IonButtons, IonIcon, IonSpinner
    },
    setup() {


        return {
            add
        }
    },
    data(): Data {
        return {
            photos: [],
            loading: false,
            landscape: false
        }
    },
    methods: {
        async takePhoto() {
            const images = await Camera.pickImages({
                quality: 100
            })

            this.loading = true;

            (await toastController.create({
                message: `Uploader ${images.photos.length} billede${images.photos.length === 1 ? '' : 'r'}...`,
                duration: 2000,
                position: 'top'
            })).present()

            for (const image of images.photos) {
                const file = await fetch(image.webPath).then(res => res.blob())

                try {
                    const uploaded = await client.uploadMedia({
                        data: file,
                        fileName: "photo"
                    });
                    this.photos.push(uploaded);
                } catch (e) {
                    const toast = await toastController.create({
                        message: 'Der skete en fejl ved upload af billede',
                        duration: 2000,
                        position: 'top'
                    })
                    toast.present()
                }
            }

            this.loading = false;
            const toast = await toastController.create({
                message: images.photos.length > 1 ? "Billederne er uploadet" : "Billedet er uploadet",
                duration: 2000,
                position: 'top'
            })
            toast.present();
            await this.updatePhotos();

        },
        async updatePhotos() {
            this.photos = await client.getMedia();
        },
        updateOrientation() {
            this.landscape = window.screen.orientation.type.includes('landscape')
        }
    },
    async mounted() {
        window.screen.orientation.onchange = this.updateOrientation
        this.updateOrientation();
        await this.updatePhotos();
    },
    async onUnmounted() {
        window.screen.orientation.onchange = null
    }
})
</script>

<style >
.vue-recycle-scroller__item-view div {
    text-align: center;
}

.scroller {
    height: 100%;
}
</style>