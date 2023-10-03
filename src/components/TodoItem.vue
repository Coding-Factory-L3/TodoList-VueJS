<script setup lang="ts">
import { defineProps } from 'vue'
import IconTrashCan from '../components/icons/IconTrashCan.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// Define props for the component
const { name, description, index, id, removeTodo } = defineProps<{
  name: string
  description: string
  index: number
  id: number
  removeTodo: (index: number) => void
}>()

console.log(id)

const handleRedirect = () => {
  router.push({
    name: 'todo',
    params: { id: id }
  })
}
</script>

<template>
  <div class="bg-white p-4 rounded shadow-md mb-2 w-72" @click="handleRedirect()">
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-lg font-bold">{{ name }}</h3>
      <button
        class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors duration-300"
        @click.stop="() => removeTodo(index)"
      >
        <IconTrashCan />
      </button>
    </div>
    <p>{{ description }}</p>
  </div>
</template>
