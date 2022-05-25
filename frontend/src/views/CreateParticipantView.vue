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
            <create-participant-form @submit="submit" />
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonHeader, IonToolbar, IonTitle, IonPage } from '@ionic/vue'
import { close } from 'ionicons/icons'
import CreateParticipantForm from '../components/CreateParticipantForm.vue';

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
        submit() { }
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