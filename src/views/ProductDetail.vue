<template>
  <div>
      <div v-if="isLoading">Loading ...</div>
      <div v-else>
            <h1>{{ productData.title }}</h1>
            <div class="row">
                <div class="col-12 col-md-6 text-center">
                    <img :src="productData.image + '/400/400'" :alt="productData.title" class="img-fluid">
                </div>
                <div class="col-12 col-md-6">
                    <p><strong>Short Description:</strong> {{ productData.short_description }}</p>
                    <div class="product-info">
                        <p v-if="productData.original_price"><strong>Original price:</strong> <strike>{{ productData.original_price + ' Kč' }}</strike></p>
                        <p><strong>Price:</strong> {{ productData.price + ' Kč' }}</p>
                        <p v-if="productData.discount"><strong>Discount:</strong> {{ `- ${productData.discount * 100} %`}}</p>
                        <p><strong>Stock:</strong> {{ productData.stock + " ks"}}</p>
                        <p><strong>Category:</strong> {{ `${productData.category.name} (${productData.category.id})`}}</p>
                        <p><strong>Route:</strong> {{ $route.params.product_id }}</p>
                    </div>    
                </div>
            </div>
            <div class="row my-4">        
                <div class="col">
                    <h2 class="text-center">Long description</h2>                   
                    <p>{{ productData.long_description }}</p>
                </div>
            </div>
            
      </div>                                           
  </div>    
</template>

<script>
export default {
    name: 'ProductDetail',
    data() {
        return {
            isLoading: true,
            productData: {}
        }
    },
    mounted() {
        const productId = this.$route.params.product_id;
        fetch(`http://localhost:5000/api/product/${productId}`)
        .then((response) => response.json())
        .then((data) => this.productData = data)
        .then(() => this.isLoading = false)
    }
}
</script>

<style scoped>
    .product-info {
        border: 1px solid grey; 
        padding: 10px; 
        margin-top: 20px;
    }
</style>