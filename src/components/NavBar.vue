<script setup>
import { computed } from 'vue'
import { logoutUser } from '../services/api/logout.js'

const token = localStorage.getItem('token')

const baseItems = [
  { title: 'Accueil', icon: 'mdi-home', to: '/' },
  { title: 'Connexion', icon: 'mdi-account', to: '/login' },
  { title: 'Inscription', icon: 'mdi-account-plus', to: '/register' },
  { title: 'Mon Compte', icon: 'mdi-account-circle', to: '/profile' },
  { title: 'Déconnexion', icon: 'mdi-logout', to: '/logout' },
]

const items = computed(() => {
  if (token) {
    return [baseItems[0], baseItems[3], baseItems[4]]
  } else {
    return [baseItems[0], baseItems[1], baseItems[2]]
  }

})


</script>

<template>
  <v-card class="mx-auto" max-width="448">
    <v-layout>
      <v-app-bar color="primary" density="compact">
        <v-app-bar-title>Tissup Configurateur</v-app-bar-title>

        <!-- Le menu déroulant activé par l'icône -->
        <v-menu>
          <template #activator="{ props }">
            <v-btn icon v-bind="props" aria-label="menu utilisateur">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" :value="i"
              @click="item.to === '/logout' ? logoutUser() : null">
              <router-link :to="item.to" class="text-decoration-none text-black">
                <v-list-item-title>
                  <v-icon start>{{ item.icon }}</v-icon>
                  {{ item.title }}
                </v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>
