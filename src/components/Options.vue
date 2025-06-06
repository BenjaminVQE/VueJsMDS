<script setup>
import { ref } from 'vue'

const personalization = ref(null)
</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                <div>
                    <h1 class="d-flex flex-column align-center justify-center">
                        Tous les produits que vous récupérez sont personnalisables avec une étiquette portant votre logo. Vous souhaitez vos produits...
                    </h1>
                </div>
            </v-col>
        </v-row>
      <v-row class="align-center justify-center">
    <v-col cols="auto">
      <v-checkbox
        label="Avec personnalisation"
        v-bind:value="'avec'"
        v-model="personalization"
      ></v-checkbox>
    </v-col>
    <v-col cols="auto">
      <v-checkbox
        label="Sans personnalisation"
         v-bind:value="'sans'"
        v-model="personalization"
      ></v-checkbox>
    </v-col>
        </v-row>
    </v-container>
</template>