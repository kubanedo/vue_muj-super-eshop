<template>
<div class="container">
    <div class="row">
        <ProductItem 
                v-for="(productData, key) of productsList"
                :key="key"
                :productData="productData"
                :productId="productData.url"
        />
    </div>
</div>      
</template>

<script>
export default {
  name: 'ProductsList',
  components: { 
    ProductItem: () => import(
      './ProductItem.vue'
      /* webpackChunkName: 'ProductItem' */
  )},
  props: {
    productsList: {
      type: Object,
      default: () => {return {}}
    }
  }
}
</script>

