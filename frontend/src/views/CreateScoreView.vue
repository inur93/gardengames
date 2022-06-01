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
            <form @submit="submit">
                <ion-item>
                    <ion-label>Spil</ion-label>
                    <ion-select name="game" placeholder="Vælg spil">
                        <div v-for="option in gameOptions">
                            <ion-select-option :value="option.id">{{ option.name }}</ion-select-option>
                        </div>
                    </ion-select>
                </ion-item>

                <div v-for="no in entries">
                    <ion-item>
                        <ion-label>Nummer {{ no }}</ion-label>
                        <ion-select :name="`participants[${no - 1}]`">
                            <div v-for="option in participantsOptions">
                                <ion-select-option :value="option.id">
                                    {{ option.nickname || option.name }}
                                </ion-select-option>
                            </div>
                        </ion-select>
                    </ion-item>
                </div>
                <ion-toolbar>
                    <ion-buttons slot="primary">
                        <ion-button type="submit" color="primary">
                            Opret
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </form>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonHeader, IonToolbar, IonTitle, IonPage, IonButtons, IonButton, IonSelect, IonLabel, IonSelectOption, toastController } from '@ionic/vue'
import { close } from 'ionicons/icons'
import CreateParticipantForm from '../components/CreateParticipantForm.vue';
import type { CreateScore, Game, Participant } from "../api/client";
import api from "../api";
import { form2Obj } from "../utils";

type Data = {
    selected?: string
    gameOptions: Game[]
    participantsOptions: Participant[]
    loading: boolean
    entries: number[]
}
export default defineComponent({
    components: {
        CreateParticipantForm,
        IonContent, IonHeader, IonToolbar, IonTitle, IonPage, IonButtons, IonButton, IonSelect, IonLabel, IonSelectOption
    },

    data(): Data {
        return {
            selected: undefined,
            gameOptions: [],
            participantsOptions: [],
            loading: true,
            entries: [1, 2, 3]
        }
    },
    async mounted() {
        const [games, participants] = await Promise.all([
            api.getGames(),
            api.getParticipants()
        ])
        this.gameOptions = games;
        this.participantsOptions = participants;
        this.loading = false;
    },
    setup() {
        return {

            close
        }
    },
    methods: {
        async submit(e: Event) {
            e.preventDefault();
            const data = form2Obj<CreateScore>(e);
            data.participants = data.participants
                .filter(x => !!x)
                .map(x => Number.parseInt(x as any))
            const created = await api.createScore(data);
            const toast = await toastController.create({
                message: "Resultatet er oprettet",
                duration: 2000,
                position: 'top'
            })
            toast.present();
            this.$router.push('/scores')
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