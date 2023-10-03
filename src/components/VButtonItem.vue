<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  buttonText: String, // Example prop: buttonText
  action: Function // Example prop: action
})
const open = () => {
  // Call the clickHandler prop when the button is clicked
  if (props.action) {
    props.action()
  }
}
</script>

<template>
  <VButton @click="open">
    {{ props.buttonText }}
  </VButton>
</template>

<style scoped>
VButton {
  background-color: var(--vt-c-indigo);
  color: var(--vt-c-text-dark-1);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
</style>
