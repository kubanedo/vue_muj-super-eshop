<template>
  <div>
    <h1>Všechny kategorie</h1>
    <div v-for="(category, key) of categoryList" :key="key">
      <router-link :to="{name: 'Category', params: {category_id: key, category_name: category.category_name}}">
        {{key}} {{category.category_name}}
      </router-link>  
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data () {
    return {
      categoryList: {}
    }
  },
  mounted () {
    fetch(`http://localhost:5000/api/category_list/`)
      .then((response) => response.json())
      .then((data) => this.categoryList = data);  
  }
}
</script>

<style scoped>
</style>