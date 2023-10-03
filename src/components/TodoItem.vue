<script setup lang="ts">
import { defineProps } from 'vue'
import IconTrashCan from '../components/icons/IConTrashCan.vue'

// Define props for the component
const { name, description, index, removeTodo } = defineProps<{
  name: string
  description: string
  index: number
  removeTodo: (index: number) => void
}>()
</script>

<template>
  <div class="bg-white p-4 rounded shadow-md mb-2 w-72">
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-lg font-bold">{{ name }}</h3>
      <button
        class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors duration-300"
        @click="() => removeTodo(index)"
      >
        <IconTrashCan />
      </button>
    </div>
    <p>{{ description }}</p>
  </div>
</template>
