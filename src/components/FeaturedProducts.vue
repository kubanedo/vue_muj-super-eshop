<template>
  <div>
      <div v-if="featuredIsLoading">
        Loading ...
      </div>  
      <div v-else>        
          <h2>Featured products ({{ this.number }})</h2>
            <div class="container">
              <div class="row">
                <div class="col col-md-3 text-center" style="border: 1px solid blue;" v-for="(featuredProduct, key) of featuredProducts" :key="key">  
                  <router-link :to="{name: 'Product', params: {product_id: key}}">
                    <h5>{{featuredProduct.title}}</h5>
                    <p><img :src="featuredProduct.image + '/100/100'" :alt="featuredProduct.title"></p> 
                    <p><strike v-if="featuredProduct.original_price" style="color: grey;">{{ featuredProduct.original_price + ' Kč' }}</strike> {{ featuredProduct.price + ' Kč' }} </p>
                    <p v-if="featuredProduct.discount"><strong>Discount:</strong> {{ `- ${featuredProduct.discount * 100} %` }}</p>
                    <p v-if="featuredProduct.stock > 0" style="color: green;">Skladem</p>         
                  </router-link> 
                </div>
              </div> 
            </div>
      </div>      
  </div>    
</template>

<script>
export default {
  name: 'FeaturedProducts',
  data() {
    return {
      featuredIsLoading: true,
      featuredProducts: {}
    }
  },
  props: {
      number: [Number]
  },
  mounted() {
        let featuredURL = (this.number) ? `http://localhost:5000/api/products/featured/${this.number}` : 'http://localhost:5000/api/products/featured/';
        fetch(featuredURL)
        .then((response) => response.json())
        .then((data) => this.featuredProducts = data)
        .then(() => this.featuredIsLoading = false)    
  }
}
</script>

<style>

</style>