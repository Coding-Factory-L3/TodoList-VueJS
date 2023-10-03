<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useTodoListStore, type Item } from '../stores/todoListStore'
import { useRoute } from 'vue-router'

const store = useTodoListStore()

const route = useRoute()
const index = parseInt(route.query.id as string)

console.log('route.query.id:', route.query.id)
console.log('index:', index)

const todo = store.todoList[index]
console.log('todo:', todo)

const removeItem = (itemIndex: number) => {
  store.removeItemFromList(todo.id, itemIndex)
  console.log('todo.id:', todo.id)
}

const markItemAsCompleted = (item: Item) => {
  item.completed = !item.completed
}

const newItemName = ref('')

const addItem = () => {
  if (newItemName.value.trim() === '') return

  const newItem: Item = {
    id: Date.now(),
    name: newItemName.value,
    completed: false
  }

  store.addItemToList(todo.id, newItem)

  newItemName.value = ''
}
</script>

<template>
  <div class="max-w-md mx-auto p-4 bg-white rounded shadow-md">
    <h1 class="text-xl font-bold mb-2">Détails de la liste</h1>
    <p class="mb-2"><span class="font-bold">Nom :</span> {{ todo.name }}</p>
    <p class="mb-4"><span class="font-bold">Description :</span> {{ todo.description }}</p>

    <div v-if="todo.items.length > 0">
      <h2 class="text-lg font-bold mb-2">Items de la liste</h2>
      <ul>
        <li v-for="(item, itemIndex) in todo.items" :key="item.id" class="flex items-center mb-2">
          <input
            type="checkbox"
            v-model="item.completed"
            @input="markItemAsCompleted(item)"
            class="mr-2"
          />
          <span :class="{ 'line-through': item.completed }">{{ item.name }}</span>
          <button
            @click="removeItem(itemIndex)"
            class="ml-auto bg-red-500 text-white py-1 px-2 rounded"
          >
            Supprimer
          </button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Aucun item dans cette liste.</p>
    </div>
    <input
      type="text"
      placeholder="Ajouter un nouvel item"
      @keyup.enter="addItem"
      v-model="newItemName"
      class="w-full mt-4 p-2 border rounded"
    />
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
