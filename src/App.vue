<script setup lang="ts">
import { RouterView } from 'vue-router'

import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

import HomeView from './views/HomeView.vue';
</script>

<template>
  <Header></Header>

  <main>
    <RouterView />
    <HomeView />
  </main>

  <Footer>
    <Contact />
    @ 2025, Rashi Chugani.
  </Footer>
</template>

<style scoped>
</style>
