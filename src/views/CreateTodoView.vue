<script setup lang="ts">
import type { Todo } from '@/stores/todoListStore'
import { reactive, toRefs } from 'vue'
import { useTodoListStore } from '../stores/todoListStore'

const store = useTodoListStore()

const todo = reactive<Todo>({
  id: 0,
  name: '',
  description: ''
})

const { name, description } = toRefs(todo)

const handleAddTodo = () => {
  store.addTodo(store.todoListCount, name.value, description.value)
  name.value = ''
  description.value = ''
}
</script>

<template>
  <main class="bg-white p-4 rounded shadow-md max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Create Todo</h1>
    <form class="flex flex-col" @submit.prevent="handleAddTodo">
      <div class="mb-4">
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
        class="bg-gray-700 text-white py-2 px-4 rounded cursor-pointer hover:bg-black transition-colors duration-300"
      >
        Create Todo
      </button>
    </form>
  </main>
</template>
