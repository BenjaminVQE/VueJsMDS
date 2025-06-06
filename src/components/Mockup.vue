<script setup>
import transat from '../assets/transat.png'
</script>
<template>
  <div class="mockup-container">
    <div class="mockup">
      <v-container class="mt-10 mx-auto" max-width="900">
        <v-row>
          <v-col class="d-flex justify-center">
            <v-img :src="transat" max-width="300" max-height="500" />
          </v-col>
          <v-col class="d-flex flex-column align-center r">
            <div>
              <h1 class="text-h4 font-weight-bold">Observez un rendu visuel</h1>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
