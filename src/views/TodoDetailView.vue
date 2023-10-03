<script setup lang="ts">
import { defineProps } from 'vue'
import { useTodoListStore } from '../stores/todoListStore'
import { useRoute } from 'vue-router'

const store = useTodoListStore()

const route = useRoute()
const index = parseInt(route.query.id as string)

console.log('route.query.id:', route.query.id)
console.log('index:', index)

const todo = store.todoList[index]
console.log('todo:', todo)

const removeItem = () => {
  console.log('removed')
}
</script>

<template>
  <div>
    <h1>Details de la liste</h1>
    <p>Nom : {{ todo.name }}</p>
    <p>Description : {{ todo.description }}</p>

    <div v-if="todo.items.length > 0">
      <h2>Items de la liste</h2>
      <ul>
        <li v-for="item in todo.items" :key="item.id">
          <input type="checkbox" v-model="item.completed" />
          {{ item.name }}
          <button @click="removeItem()">Supprimer</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Aucun item dans cette liste.</p>
    </div>
  </div>
</template>
