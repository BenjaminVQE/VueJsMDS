<script setup>
import NavBar from '../components/NavBar.vue'
import Timeline from '../components/Timeline.vue'
import Mockup from '../components/Mockup.vue'
import ButtonStep from '../components/ButtonStep.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <NavBar />
    <main>
        <Timeline :model-value="0" />
        <Mockup />
        <ButtonStep :Back="'/login'" :Next="'/products'" />
    </main>
    <Footer />
</template>
