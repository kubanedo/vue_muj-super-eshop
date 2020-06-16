<template>
                <div class="col col-md-3 text-center p-2 mb-4">  
                  <router-link :to="{name: 'Product', params: {product_id: productId}}">
                    <h5>{{productData.title}}</h5>
                  </router-link>
                    <p>{{productData.category.name}}</p>
                    <p><img :src="productData.image + '/100/100'" :alt="productData.title"></p> 
                    <p><strike v-if="productData.original_price" style="color: grey;">{{ productData.original_price + ' Kč' }}</strike> {{ productData.price + ' Kč' }} </p>
                    <p v-if="productData.discount"><strong>Sleva:</strong> {{ `- ${productData.discount * 100} %` }}</p>
                    <p v-if="productData.stock > 0" style="color: green;">Skladem {{productData.stock}} ks</p>  
                   <AddToCart :productId="productId" />
                </div>      
</template>

<script>
import AddToCart from '../components/AddToCart.vue';
export default {
  name: 'ProductItem',
  components: {AddToCart},
  props: {
    productData: {
      type: Object,
      default: () => {return {}}
    },
    productId: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import './../styles/variables.scss';
  a {
    text-decoration: none;
    color: $text-color;
    h5 {
      color: $accent3;
    }
  }
  .add-to-cart {
      display: inline-block;
      margin: 0 auto;
      color: $inverted-text-color;
      background: $accent3;
      border-radius: 2em;
      padding: 0.5em 1em;

      &:hover {
        background: $accent2;
      }
  }

</style>