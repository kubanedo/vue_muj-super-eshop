<template>
  <div>
      <h1>{{categoryTitle}}</h1>
      <products-list :products-list="productsList"/>
  </div>
</template>

<script>
import ProductsList from '../components/ProductsList'
export default {
    name: 'CategoryDetail',
    components: {
        ProductsList
    },    
    data() {
        return {
            isLoading: true,
            noData: false,
            productsList: {},
            categoryTitle: '',
        }
    },
    mounted() {
        const categoryId = this.$route.params.category_id;
        fetch(`http://localhost:5000/api/category_list/${categoryId}`)
        .then((response) => response.json())
        .then((data) => this.productsList = data);
        
        this.categoryTitle = this.$route.params.category_name;
    }
}
</script>

<style>

</style>