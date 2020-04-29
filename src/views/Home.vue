<template>
  <div class="home">
    <h1 class="text-center">Homepage</h1>
    <products-list :products-list="productsList"/>
    <featured-products number="4" />
  </div>
</template>

<script>
import FeaturedProducts from '../components/FeaturedProducts'
import ProductsList from '../components/ProductsList'

export default {
  name: 'Home',
  components: {
    FeaturedProducts,
    ProductsList
  },
  data () {
    return {
      productsList: {}
    }
  },
  mounted() {
        fetch('http://localhost:5000/api/products/featured/')
        .then((response) => response.json())
        .then((data) => this.productsList = data)       
  }
}
</script>
