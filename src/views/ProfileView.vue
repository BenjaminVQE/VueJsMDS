<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import InfosProfile from "../components/InfosCard.vue";
import HistoryProfile from "../components/HistoryCard.vue";
</script>

<template>
  <NavBar />
  <main>
    <HistoryProfile />
    <InfosProfile />
  </main>
  <Footer />
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
}
</style>
