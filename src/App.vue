<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/create"> Create Todo </RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
