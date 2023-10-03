<script setup lang="ts">
import { ref } from 'vue'
import { useTodoListStore } from '../stores/todoListStore'
import TodoItemVue from '@/components/TodoItem.vue'
import { ModalsContainer, useModal } from 'vue-final-modal'
import ModalAddTodo from '@/components/modals/ModalAddTodo.vue'

const { open, close } = useModal({
  component: ModalAddTodo,
  attrs: {
    title: 'Create a todo task!',
    onConfirm() {
      close()
    }
  },
  slots: {
    default: '<p>The content of the modal</p>'
  }
})
const store = useTodoListStore()

const todos = ref(store.todoList)

// Function to remove a todo by index
const removeTodo = (index: number) => {
  store.removeTodo(index)
  todos.value = store.todoList // Update the reactive todos array
}
</script>

<template>
  <VButton @click="open"> Add Todo </VButton>

  <ModalsContainer />

  <main class="flex flex-col items-center justify-center py-2">
    <h1 class="text-2xl font-bold mb-4">Todos List</h1>
    <div v-if="todos.length === 0">
      <p class="text-gray-700">No todos yet.</p>
    </div>
    <div v-else>
      <div
        class="flex flex-col items-center justify-center gap-4"
        v-for="(todo, index) in todos"
        :key="index"
      >
        <TodoItemVue
          :name="todo.name"
          :description="todo.description"
          :index="index"
          :id="todo.id"
          :removeTodo="removeTodo"
        />
      </div>
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
main {
  max-width: 1280px;
  margin: 0 0;
  padding: 2rem;
}
</style>
