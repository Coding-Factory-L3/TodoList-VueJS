import { defineStore } from 'pinia'
import { watchEffect } from 'vue'

interface TodoListState {
  todoList: Todo[]
  todoListCount: number
  incrementTodoIdNb: number
}

// Define a type for your todo objects
export interface Todo {
  id: number
  name: string
  description: string
}

// Define your store
export const useTodoListStore = defineStore('todoList', {
  state: (): TodoListState => ({
    todoList: <Todo[]>JSON.parse(localStorage.getItem('todoList') || '[]'),
    todoListCount: 0,
    incrementTodoIdNb: 0
  }),
  actions: {
    addTodo(id: number, name: string, description: string) {
      this.todoList.push({ id, name, description })
      // Update local storage to persist the changes
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
      this.incrementTodoId()
      this.todoListCount++
    },
    removeTodo(index: number) {
      this.todoList.splice(index, 1)
      // Update local storage to persist the changes
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
      this.todoListCount--
    },
    editTodo(index: number, id: number, name: string, description: string) {
      this.todoList[index] = { id, name, description }
      // Update local storage to persist the changes
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    },
    getTodoById(id: number) {
      return this.todoList.find((todo) => todo.id === id)
    },
    incrementTodoId() {
      // this.incrementTodoIdNb++
      this.incrementTodoIdNb = Math.max(...this.todoList.map((todo) => todo.id)) + 1
    }
  }
})
