import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Error404 from '../views/Error404.vue'
import Products from '../views/Products'
import Categories from '../views/Categories'
import CategoryDetail from '../views/CategoryDetail'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/:product_id',
    name: 'Product',
    component: ProductDetail
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/category/:category_id',
    name: 'Category',
    component: CategoryDetail
  },    
  {
    path: '*',
    name: 'Error404',
    component: Error404
  }   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
