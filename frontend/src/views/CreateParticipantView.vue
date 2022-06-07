<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Opret deltager</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Opret deltager</ion-title>
                </ion-toolbar>
            </ion-header>
            <create-participant-form @submit="submit" />
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonHeader, IonToolbar, IonTitle, IonPage, toastController } from '@ionic/vue'
import { close } from 'ionicons/icons'
import CreateParticipantForm from '../components/CreateParticipantForm.vue';
import type { Participant } from "../api/client";

export default defineComponent({
    components: {
        CreateParticipantForm,
        IonContent, IonHeader, IonToolbar, IonTitle, IonPage
    },

    setup() {
        return {
            close
        }
    },
    methods: {
        async submit(participant: Participant) {
            const toast = await toastController.create({
                message: `${participant.name} er oprettet!`,
                duration: 2000,
                position: 'top'
            })
            toast.present();
        }
    },
    emits: {
        setOpen(isOpen: boolean) {
            return true;
        }
    },
    props: {
        isOpen: Boolean
    }
})


</script>

<style>
</style>