<script setup>
import { ref } from "vue";

const userConnected = ref(null);
const carts = ref(null);

const storedUser = localStorage.getItem("userConnected");
const storedCart = localStorage.getItem("cart");

if (storedUser) {
  userConnected.value = JSON.parse(storedUser);
}

if (storedCart) {
  carts.value = JSON.parse(storedCart);
}
</script>

<template>
  <v-container>
    <div v-if="userConnected">
      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <v-card-title> Résumé de votre commande </v-card-title>
        <li v-for="(cart, index) in carts" :key="index">
          {{ cart.name }}
        </li>
        <v-divider :thickness="6"></v-divider>
      </v-card>
    </div>

    <div class="d-flex" v-else>
      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          label="Email"
          v-model="email"
        >
        </v-text-field>
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          label="Password"
          v-model="password"
        >
        </v-text-field>
        <v-btn
          class="mb-8"
          style="background-color: #272756"
          color="#F9F4EA"
          size="large"
          variant="tonal"
          background-color="primary"
          block
          type="submit"
        >
          Se connecter
        </v-btn>
        <v-alert v-if="errorMsg" type="error" class="mb-4">
          {{ errorMsg }}
        </v-alert>
      </v-card>
      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="600" rounded="lg">
        <v-card-title class="text-h6"> Résumé de votre panier </v-card-title>

        <v-divider class="my-4" />

        <v-list density="compact">
          <v-list-item v-for="(cart, index) in carts" :key="index" class="py-3">
            <v-list-item-content>
              <div class="d-flex justify-space-between align-center">
                <div class="font-weight-medium">{{ cart.name }}</div>

                <v-badge :content="cart.quantity" color="primary" inline bordered class="me-4">
                  <v-chip size="small" color="grey-darken-2"> {{ cart.price }} € / unité </v-chip>
                </v-badge>
              </div>

              <div class="text-caption text-grey mt-1">
                Total : {{ (cart.quantity * parseFloat(cart.price)).toFixed(2) }} €
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider class="my-4" />

        <div class="text-right font-weight-bold">
          Total global :
          {{
            carts
              .reduce((sum, item) => {
                return sum + item.quantity * parseFloat(item.price);
              }, 0)
              .toFixed(2)
          }}
          €
        </div>
      </v-card>
    </div>
  </v-container>
</template>
