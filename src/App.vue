<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue'
</script>

<template>
    <div>
      <Header />

      <RouterView />

      <Footer />
    </div>
</template>
