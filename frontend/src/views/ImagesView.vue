<template>
    <ion-page>
        <ion-header>
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

import {
    IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonButtons, IonIcon, toastController, IonSpinner
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { Camera } from '@capacitor/camera'
import client from '../api'
import type { Media } from '../api/client';
import type { CameraPermissionType } from '@capacitor/camera';
import { add } from 'ionicons/icons'
import { isPlatform, getPlatforms } from '@ionic/vue';

type Data = {
    photos: Media[]
    loading: boolean
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
            loading: false
        }
    },
    methods: {
        async takePhoto() {
            console.log('check permissions...')
            let permissions = await Camera.checkPermissions()

            let requestPermissions: CameraPermissionType[] = [];

            if (permissions.camera != 'granted' && permissions.camera != 'denied') {
                requestPermissions.push('camera');
            }
            if (permissions.photos != 'granted' && permissions.photos != 'denied') {
                requestPermissions.push('photos');
            }

            console.log('isPlatform?', getPlatforms().map(platform => ({ platform, isThis: isPlatform(platform) })));

            if (requestPermissions.length > 0 && (isPlatform('ios') || isPlatform('android'))) {
                console.log('requesting permissions...', requestPermissions)
                try {
                    permissions = await Camera.requestPermissions({
                        permissions: requestPermissions
                    })
                } catch (e) {
                    console.error(e)
                }
            }

            console.log('picking images...');
            const images = await Camera.pickImages({
                quality: 100
            })

            console.log('saving images...', images)
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