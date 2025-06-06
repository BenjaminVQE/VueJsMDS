<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import ButtonStep from "@/components/ButtonStep.vue";
import Timeline from "@/components/Timeline.vue";
import Estimate from "@/components/Estimate.vue";
</script>

<template>
  <NavBar />
  <main>
    <Timeline :model-value="3" />
    <Estimate />
    <ButtonStep :Back="'/options'" />
  </main>
  <Footer />
</template>
