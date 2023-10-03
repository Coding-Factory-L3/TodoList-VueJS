import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateTodoView from '../views/CreateTodoView.vue'
import TodoDetailView from '../views/TodoDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CreateTodoView
    },
    {
      path: '/todo',
      name: 'TodoDetailPage',
      component: TodoDetailView
    }
    
]
})


export default router