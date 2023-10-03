<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import type { Todo } from '@/stores/todoListStore'
import { reactive, toRefs } from 'vue'
import { useTodoListStore } from '../../stores/todoListStore'
const store = useTodoListStore()

defineProps<{
  title?: string
}>()

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

const todo = reactive<Todo>({
  id: 0,
  name: '',
  description: ''
})
const { name, description } = toRefs(todo)

const handleAddTodo = () => {
  if (!name.value || !description.value) {
    return
  }

  store.addTodo(store.todoListCount, name.value, description.value)
  name.value = ''
  description.value = ''
  emit('confirm')
}
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content min-w-[50%]"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <h1>{{ title }}</h1>
    <form class="flex flex-col" @submit.prevent="handleAddTodo">
      <div class="mb-4 mt-4">
        <label for="title" class="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="name"
          placeholder="Enter a title"
          class="w-full p-2 border rounded"
          v-model="name"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          id="description"
          placeholder="Enter a description"
          class="w-full p-2 border rounded"
          v-model="description"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-gray-700 text-white p-4 rounded cursor-pointer hover:bg-black transition-colors duration-300"
      >
        Confirm
      </button>
    </form>
  </VueFinalModal>
</template>

<style>
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
}
.confirm-modal-content > * + * {
  margin: 0.5rem 0;
}
.confirm-modal-content h1 {
  font-size: 1.375rem;
}
.confirm-modal-content button {
  margin: 0.25rem 0 0 auto;
  padding: 8px 16px;
  border: 1px solid;
  border-radius: 0.5rem;
}
.dark .confirm-modal-content {
  background: #000;
}
</style>
