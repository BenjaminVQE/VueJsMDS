<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import Options from '@/components/Options.vue'
import ButtonStep from '@/components/ButtonStep.vue'
import Timeline from '@/components/Timeline.vue'
</script>

<template>
  <NavBar />
  <main>
    <Timeline :model-value="2" />
    <Options />
    <ButtonStep :Back="'/products'" :Next="'/estimate'" />
  </main>
  <Footer />
</template>

<style scoped>
main {
   margin-top: 50px;
   text-align: center;
}
</style>