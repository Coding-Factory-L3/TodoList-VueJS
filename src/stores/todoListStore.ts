import { defineStore } from 'pinia'

interface TodoListState {
  todoList: Todo[]
  todoListCount: number
  incrementTodoIdNb: number
}

export interface Item {
  id: number
  name: string
  completed: boolean
}

// Define a type for your todo objects
export interface Todo {
  id: number
  name: string
  description: string
  items: Item[]
}

// Define your store
export const useTodoListStore = defineStore('todoList', {
  state: (): TodoListState => ({
    todoList: <Todo[]>JSON.parse(localStorage.getItem('todoList') || '[]'),
    todoListCount: 0,
    incrementTodoIdNb: 0
  }),
  actions: {
    addTodo(id: number, name: string, description: string, items: Item[]): void{
      this.todoList.push({ id, name, description, items})
      // Update local storage to persist the changes
      localStorage.setItem('todoList', JSON.stringify(this.todoList))

      this.todoListCount++
    },
    removeTodo(index: number) {
      this.todoList.splice(index, 1)
      // Update local storage to persist the changes
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
      this.todoListCount--
    },
    editTodo(index: number, id: number, name: string, description: string, items: Item[]) {
      this.todoList[index] = { id, name, description, items }
      // Update local storage to persist the changes
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    },
    incrementTodoId() {
      this.incrementTodoIdNb++
    },
    addItemToList(todoId: number, newItem: Item) {
      const todo = this.todoList.find((t) => t.id === todoId)
      if (todo) {
        todo.items.push(newItem)
        // Mettez à jour le stockage local pour persister les changements
        localStorage.setItem('todoList', JSON.stringify(this.todoList))
      }
    },

    // Supprimer un item d'une liste de tâches
    removeItemFromList(todoId: number, itemIndex: number) {
      // Assurez-vous que todoId est valide et que itemIndex est un index valide
      const todo = this.todoList.find((t) => t.id === todoId)

      if (todo && itemIndex >= 0 && itemIndex < todo.items.length) {
        // Supprimez l'élément de la liste
        todo.items.splice(itemIndex, 1)
        // Mettez à jour le stockage local si nécessaire
        localStorage.setItem('todoList', JSON.stringify(this.todoList))
      }
    }
}
});
