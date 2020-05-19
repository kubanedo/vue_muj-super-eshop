import Vue from 'vue'
import VueRouter from 'vue-router'

import Error404 from '../views/Error404.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(
      '../views/Home.vue'
      /* webpackChunkName: 'HomeView' */
    )
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(
      '../views/Products.vue'
      /* webpackChunkName: 'AllProductsView' */
    )
  },
  {
    path: '/product/:product_id',
    name: 'Product',
    component: () => import(
      '../views/ProductDetail.vue'
      /* webpackChunkName: 'ProductView' */
    )
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import(
      '../views/Categories.vue'
      /* webpackChunkName: 'CategoriesView' */
    )
  },
  {
    path: '/category/:category_id',
    name: 'Category',
    component: () => import(
      '../views/CategoryDetail.vue'
      /* webpackChunkName: 'CategoryDetail' */
    )
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
