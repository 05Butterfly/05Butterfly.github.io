<script setup lang="ts">
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Skills from './components/Skills.vue';
import Work from './components/Work.vue';
</script>

<template>
  <Header></Header>

  <main>
    <About />
    <Skills />
    <Work />
  </main>

  <Footer>
    <Contact />
    @ 2025, Rashi Chugani.
  </Footer>
</template>

<style scoped>
</style>
