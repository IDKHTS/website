<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue';
defineProps<{
    software: any
}>()
    
    // v-if="software" :data="software" :activeType="activeType"  @mouseenter="onActiveMenu(software.type)" @mouseleave="onCheckMenu(software.type)"
</script>

<template>
    <div v-for="dropdownItem of software.dropdowns" :key="dropdownItem.title" class="mb-xl software-content-wrapper">
        <div v-for="category of dropdownItem.categories" :key="category.name" :id="category.traceID">
            <router-link :to="category.route" class="software-img mt-xl mb-m">
            <img :src="category.img" alt="">
            </router-link>
            <Navigate :aLink="category.link" :route="category.route" class="software-btn">
            <span class="snmk-link-btn" >{{category.name}}</span>
            </Navigate>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.software-content-wrapper{
    // width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;

    a, &::v-deep a {
      color: black;
    }
  }
  .software-img {
    width: 13.932vw;
    cursor: pointer;
    display: block;

    &:hover ~ .software-btn .snmk-link-btn {
      color: $blue;
      &::after {
        width: 100%;
      }
    }
  }
</style>