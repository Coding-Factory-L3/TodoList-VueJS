<script setup lang="ts">
import { ref } from 'vue'
import { useTodoListStore } from '../stores/todoListStore'
import TodoItemVue from '@/components/TodoItem.vue'

const store = useTodoListStore()

const todos = ref(store.todoList)

// Function to remove a todo by index
const removeTodo = (index: number) => {
  store.removeTodo(index)
  todos.value = store.todoList // Update the reactive todos array
}
</script>

<template>
  <h1 class="text-2xl font-bold mb-4">Home</h1>
  <main>
    <div v-if="todos.length === 0">
      <p class="text-gray-700">No todos yet.</p>
    </div>
    <div v-else>
      <div v-for="(todo, index) in todos" :key="index">
        <TodoItemVue
          :name="todo.name"
          :description="todo.description"
          :index="index"
          :removeTodo="removeTodo"
        />
      </div>
    </div>
  </main>
</template>
