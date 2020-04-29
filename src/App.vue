<template>
  <div id="app">
    <TheHeader />
    <TheContent />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import TheContent from './components/TheContent.vue';
export default {
  components: { TheContent, TheHeader, TheFooter }
}
</script>

<style lang="scss">
@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css);
@import './styles/variables.scss';

body {
  background: $accent1;
  color: $text-color  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
