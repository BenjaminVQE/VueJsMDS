<script setup>
import { ref, onMounted } from "vue";
import { fetchProducts } from "../services/api/products.js";
import cart from "../stores/cart.js";

const products = ref([]);
const error = ref("");
const refresh = ref(0);

onMounted(async () => {
  try {
    products.value = await fetchProducts();
  } catch (e) {
    error.value = e.message;
  }
});

const addToCart = (product) => {
  cart.addToCart(product);
  refresh.value++;
};

const getQuantity = (productId) => {
  refresh.value;
  return cart.getQuantity(productId);
};

const deleteCart = () => {
  refresh.value = 0;
  return cart.deleteCart();
};
</script>

<template>
  <div>
    <h1 style="text-align: center">Liste des produits</h1>
    <v-btn color="red" variant="plain" @click="deleteCart()"> Vider le panier </v-btn>
    <v-container>
      <v-row>
        <v-col v-for="product in products.member" :key="product.id" cols="12" sm="6" md="4">
          <v-card class="pa-2">
            <v-card-title class="text-h6">{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.price }} €</v-card-subtitle>
            <v-card-actions>
              <v-badge
                v-if="getQuantity(product.id) > 0"
                :content="getQuantity(product.id)"
                color="indigo-darken-3"
                overlap
              >
                <v-btn color="primary" @click="addToCart(product)">Ajouter au panier</v-btn>
              </v-badge>
              <v-btn v-else color="primary" @click="addToCart(product)">Ajouter au panier</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
