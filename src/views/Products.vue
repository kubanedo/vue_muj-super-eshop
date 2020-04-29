<template>
  <div>
    <h1>Všechny produkty</h1>
    <ProductsList :products-list="productsList" />
  </div>
</template>

<script>
import ProductsList from '../components/ProductsList'
export default {
  name: 'Products',
  components: { ProductsList },
  data () {
    return {
      productsList: {}
    }
  },
  mounted () {
    fetch(`http://localhost:5000/api/products/`)
      .then((response) => response.json())
      .then((data) => this.productsList = data)
  }
}
</script>

<style scoped>
</style>