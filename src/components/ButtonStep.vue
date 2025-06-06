<script setup>
import { toRef } from 'vue'
const props = defineProps({
    Next: {
        type: String,
        required: false
    },
    Back: {
        type: String,
        required: true
    }
})
const pathNext = toRef(props, 'Next')
const pathBack = toRef(props, 'Back')

const emit = defineEmits(['confirm'])
</script>
<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-start">
        <router-link :to="pathBack">
          <v-btn prepend-icon="mdi-chevron-left">Précédent</v-btn>
        </router-link>
      </v-col>
      <v-col class="d-flex justify-end">
        <router-link v-if="pathNext" :to="pathNext">
          <v-btn append-icon="mdi-chevron-right" color="primary">Suivant</v-btn>
        </router-link>

        <v-btn
          v-else
          color="success"
          append-icon="mdi-check"
          @click="$emit('confirm')"
        >
          Confirmer
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>