<template>
    <div>
        <Header></Header>
        <slot></slot>
        <Footer></Footer>
    </div>
</template>

<script setup lang='ts'>
import Header from '@@/components/header/index.vue';
import Footer from '@@/components/footer/index.vue'
</script>