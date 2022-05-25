<template>
    <form @submit="submit">
        <ion-item>
            <ion-label>Navn</ion-label>
            <ion-input name="name" placeholder="Anders And" autocapitalize="words" autofocus minLength="3" required>
            </ion-input>
        </ion-item>
        <ion-item>
            <ion-label>Kaldenavn</ion-label>
            <ion-input name="nickname" placeholder="Anden"></ion-input>
        </ion-item>
        <ion-toolbar>
            <ion-buttons slot="primary">
                <ion-button type="submit" color="primary">
                    Opret
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonLabel, IonInput, IonItem, IonButtons, IonButton, IonToolbar } from '@ionic/vue'
import { form2Obj } from "../utils";
import client from "../api";
import type { Participant } from "../api/client";

export default defineComponent({
    components: {
        IonLabel, IonInput, IonItem, IonButtons, IonButton, IonToolbar
    },

    methods: {
        async submit(e: Event) {
            e.preventDefault();
            const data = form2Obj<Participant>(e);
            const created = await client.createParticipant(data);
            this.$emit('submit', created);
        }
    },
    emits: {
        submit(participant: Participant) {
            return true;
        }
    },
})
</script>

<style>
</style>