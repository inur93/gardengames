<template>
    <ion-page>
        <ion-header :translucent="true">
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
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Billeder</ion-title>
                </ion-toolbar>
            </ion-header>
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

import {
    IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonIcon, toastController, IonSpinner
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { Camera } from '@capacitor/camera'
import client from '../api'
import type { Media } from '../api/client';
import type { CameraPermissionType } from '@capacitor/camera';
import { add } from 'ionicons/icons'
import { isPlatform } from '@ionic/vue';

type Data = {
    photos: Media[]
    loading: boolean
}

export default defineComponent({
    components: {
        IonContent, IonPage, IonTitle, IonHeader, IonToolbar, IonButton, IonButtons, IonIcon, IonSpinner
    },
    setup() {
        return {
            add
        }
    },
    data(): Data {
        return {
            photos: [],
            loading: false
        }
    },
    methods: {
        async takePhoto() {
            let permissions = await Camera.checkPermissions()

            let requestPermissions: CameraPermissionType[] = [];

            if (permissions.camera != 'granted' && permissions.camera != 'denied') {
                requestPermissions.push('camera');
            }
            if (permissions.photos != 'granted' && permissions.photos != 'denied') {
                requestPermissions.push('photos');
            }
            if (requestPermissions.length > 0 && !isPlatform('desktop')) {
                permissions = await Camera.requestPermissions({
                    permissions: requestPermissions
                })
            }

            const images = await Camera.pickImages({
                correctOrientation: true,
                presentationStyle: 'fullscreen',
                quality: 100,
                limit: 10
            })

            this.loading = true;
            const tasks = images.photos.map(photo => fetch(photo.webPath)
                .then(res => res.blob())
                .then(blob => {
                    client.uploadMedia({
                        data: blob,
                        fileName: photo.path || 'photo'
                    }).then(media => {
                        this.photos.push(media);
                    }).catch(err => {
                        toastController.create({
                            message: 'Fejl ved upload af billede',
                            duration: 2000
                        }).then(toast => toast.present());
                    })
                }))

            await Promise.all(tasks);
            this.loading = false;
            const toast = await toastController.create({
                message: tasks.length > 1 ? "Billederne er uploadet" : "Billedet er uploadet",
                duration: 2000,
                position: 'top'
            })
            toast.present();
            await this.updatePhotos();

        },
        async updatePhotos() {
            this.photos = await client.getMedia();
        }
    },
    async mounted() {
        await this.updatePhotos();
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