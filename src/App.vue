<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <nav>
    <RouterLink to="/">
      <VButton> Home </VButton>
    </RouterLink>
    <RouterLink to="/create">
      <VButton> Create </VButton>
    </RouterLink>
  </nav> -->
  <RouterView />
</template>

<style scoped>
VButton {
  background-color: var(--vt-c-indigo);
  color: var(--vt-c-text-dark-1);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
nav {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}
</style>
