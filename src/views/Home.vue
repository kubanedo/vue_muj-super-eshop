<template>
  <div class="home">
    <h1 class="text-center">Homepage</h1>
    <featured-products count="4"></featured-products>
  </div>
</template>

<script>
import FeaturedProducts from '../components/FeaturedProducts'

export default {
  name: 'Home',
  components: {
    FeaturedProducts
  }
}
</script>
