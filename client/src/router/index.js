import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Books from '../views/Books.vue'
import AddBook from '../views/AddBook.vue'
import ViewBook from '../views/ViewBook.vue'
import EditBook from '../views/EditBook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/books/add',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/books/edit/:bookId',
    name: 'EditBook',
    component: EditBook
  },
  {
    path: '/books/:bookId',
    name: 'ViewBook',
    component: ViewBook
  },
  {
    path: '*',
    redirect : 'Books'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
