<template>
    <div>
        <ion-modal :is-open="isOpen" :swipe-to-close="true" @didDismiss="$emit('setOpen', false)">
            <ion-header>
                <ion-toolbar>
                    <ion-title>Opret deltager</ion-title>
                    <ion-buttons slot="secondary">
                        <ion-button @click="$emit('setOpen', false)">
                            <ion-icon slot="icon-only" :icon="close"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <create-participant-form />
            </ion-content>
        </ion-modal>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonModal, IonContent, IonToolbar, IonHeader, IonButtons, IonButton, IonIcon, IonTitle } from '@ionic/vue'
import { close } from 'ionicons/icons'
import CreateParticipantForm from 'CreateParticipantForm.vue';
export default defineComponent({
    components: {
        CreateParticipantForm,
        IonModal, IonContent, IonToolbar, IonHeader, IonButtons, IonButton, IonIcon, IonTitle
    },

    setup() {
        return {
            close
        }
    },
    methods: {

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