<script setup lang="ts">
import VButtonItem from '@/components/VButtonItem.vue'
import { useTodoListStore } from '../stores/todoListStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useTodoListStore()

const index = parseInt(router.currentRoute.value.params.id as string)
const todo = store.getTodoById(index)
</script>

<template>
  <main class="p-4">
    <VButtonItem buttonText="Go back" :action="() => router.go(-1)" />

    <div class="bg-vt-c-white rounded-lg shadow-md p-6">
      <h1 class="text-2xl font-semibold text-vt-c-black">{{ todo?.name }}</h1>
      <p class="text-gray-600">{{ todo?.description }}</p>
    </div>
  </main>
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
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
</style>
