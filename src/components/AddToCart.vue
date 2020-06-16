<template>
  <div>
    <button @click="decreaseQuantity">-</button>
    <input type="number" v-model="itemsInCart" size="3" />
    <button @click="increaseQuantity">+</button>
  </div>
</template>

<script>
export default {
  name: "AddToCart",
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      itemsInCart: 0
    };
  },
  methods: {
    increaseQuantity() {
      this.itemsInCart++;  
      this.$store.commit("setCartItemQuantity", {
        productId: this.productId,
        quantity: this.itemsInCart
      });
    },
    decreaseQuantity() {
      this.itemsInCart--;  
      this.$store.commit("setCartItemQuantity", {
        productId: this.productId,
        quantity: this.itemsInCart
      });
    }
  }
};
</script>

<style>
</style>