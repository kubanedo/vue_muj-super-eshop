<template>
    <div id="header" class="container">
      <div class="row my-4">
        <div id="logo" class="col-12 col-md-3">
            <router-link to="/">Super eshop</router-link>
        </div> 
        <div id="nav" class="col-12 col-md-7">
            <router-link to="/">Home</router-link> |
            <router-link :to="{name: 'Products'}">Products</router-link> |
            <router-link :to="{name: 'Categories'}">Categories</router-link>
        </div>
        <div id="cart" class="col-12 col-md-2">
            <TheCart/>
        </div>
      </div> 
    </div>
</template>

<script>
import TheCart from '../components/TheCart.vue';
export default {
    name: 'TheHeader',
    components: { TheCart }
}
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Monoton&display=swap);
@import './../styles/variables.scss';

#logo {
  font-family: 'Monoton', cursive;
  font-size: 2rem;
  padding: 20px 0;

  a {
      color: $accent3;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $inverted-text-color;

    &.router-link-exact-active {
      color: $inverted-text-color;
    }
  }
}
#cart {
  padding: 30px 0;
  color: white;
}
</style>