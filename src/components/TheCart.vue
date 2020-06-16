<template>
  <div>
    🛒
    {{ countProducts }}
    ({{ countItems }})
    {{$store.state}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'TheCart',
    computed: {
        ...mapGetters(['countProducts', 'countItems'])
    }
}
</script>

<style>

</style>