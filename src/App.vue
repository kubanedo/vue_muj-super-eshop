<template>
  <div id="app" class="container">
    <div class="row my-4">
      <div id="logo" class="col-12 col-md-3">
        <router-link to="/">Super eshop</router-link>
      </div> 
      <div id="nav" class="col-12 col-md-9">
        <router-link to="/">Home</router-link> |
        <router-link :to="{name: 'Product'}">Product</router-link>
      </div>
    </div> 
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#logo {
  font-family: 'Monoton', cursive;
  font-size: 2rem;
  padding: 20px 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h1 {
  margin-bottom: 30px;
}
h2 {
  margin-bottom: 20px;
}
h5 {
  margin: 20px;
}
</style>
