<template>
    <div id="content">
        <div class="container py-5">
            <router-view />
        </div>    
    </div>
</template>

<script>
export default {
    name: 'TheContent'
}
</script>

<style scoped lang="scss">
@import './../styles/variables.scss';
#content {
    background: $bg-color;
}
</style>