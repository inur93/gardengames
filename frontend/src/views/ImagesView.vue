<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Billeder</ion-title>
                <ion-buttons slot="secondary">
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
    IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonIcon, toastController
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { Camera, CameraResultType } from '@capacitor/camera'
import client from '../api'
import type { Media } from '../api/client';
import type { CameraPermissionType } from '@capacitor/camera';
import { add } from 'ionicons/icons'
import { isPlatform } from '@ionic/vue';

type Data = {
    photos: Media[]
}

export default defineComponent({
    components: {
        IonContent, IonPage, IonTitle, IonHeader, IonToolbar, IonButton, IonButtons, IonIcon
    },
    setup() {
        return {
            add
        }
    },
    data(): Data {
        return {
            photos: []
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
                limit: 1
            })

            const file = await fetch(images.photos[0].webPath).then(res => res.blob())
            // const photo = await Camera.getPhoto({
            //     resultType: CameraResultType.Uri,
            //     quality: 100
            // })

            // const file = await fetch(photo.webPath!).then(r => r.blob())

            await client.uploadMedia({
                data: file,
                fileName: 'photo'
            })

            const toast = await toastController.create({
                message: "Billedet er uploadet",
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