<script setup>
import { getUserConnected } from '../services/api/profile.js'
import { ref, onMounted } from 'vue'
import { logoutUser } from '../services/api/logout.js'
const orders = ref([])
const error = ref('')

onMounted(async () => {
  try {
    orders.value = await fetchOrders();
    console.log(orders.value);
  } catch (e) {
    error.value = e.message;
  }
})
</script>
<template>
  <v-container >
    <v-card class="mx-auto" max-width="400">
      <v-card-title class="d-flex justify-center">
        Votre historique de commandes
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item v-for="order in orders.member " :key="order.id" class="d-flex justify-center">
            <v-list-item-content>
              <v-list-item-title>{{  }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>
