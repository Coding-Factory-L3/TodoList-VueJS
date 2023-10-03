<script setup lang="ts">
import { defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { name, description, index, removeTodo } = defineProps<{
  name: string
  description: string
  index: number
  removeTodo: (index: number) => void
}>()

const router = useRouter()

const viewDetail = () => {
  router.push({ name: 'TodoDetailPage', query: { id: index } })
}
</script>

<template>
  <div class="bg-white p-4 rounded shadow-md mb-2">
    <h3 class="text-lg font-bold">{{ name }}</h3>
    <p>{{ description }}</p>
    <button
      class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors duration-300"
      @click="() => removeTodo(index)"
    >
      Remove
    </button>
    <button
      class="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition-colors duration-300"
    >
      Edit
    </button>
    <button
      class="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition-colors duration-300"
      @click="viewDetail"
    >
      View Detail
    </button>
  </div>
</template>
