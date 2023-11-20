<template>
  <div class="materials-wrapper only-pc">
    <div class="materials-text-wrapper"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000">
      <h1 class="line-blue materials-title">{{materials.title}}</h1>
      <p class="materials-desc">{{materials.description}}</p>
    </div>
    <div class="materials-items"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000">
      <div class="materials-item" v-for="item of materials.materialsItems" :key="item.name">
        <img :src="item.imgSrc" :alt="item.name" />
        <div class="text-center mt-xl">{{item.name}}</div>
      </div>
    </div>
    <div class="objs-display"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="obj of materials.displayItems" :key="obj">
            <img :src="obj" :alt="obj" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Swiper from 'swiper';

const i18n = useI18n()
const materials = computed(() => i18n.tm('laserData').materials)

onMounted(() => {
  const timeSwiper = new Swiper('.swiper', {
    slidesPerView: 5.5,
    initialSlide: 0,
    spaceBetween: 31,
    slideToClickedSlide: true, 
    on: {
      slideChange () {
        // vue.selectedIndex = this.activeIndex
      }

    }
  })
  console.debug(timeSwiper)
})
</script>


<style src="../laser.common.css" scoped></style>
<style src="../bootstrap-mini.css" scoped></style>
<style lang="scss" scoped>
.materials-wrapper {
  background-image: url('https://ditfjx9w4x3vl.cloudfront.net/assets/laser/materials/bg-2.png');
  background-position: center;
  background-size: 100% 100%;
}
.materials-text-wrapper {
  padding-top: 6.25vw;
  text-align: center;
}
.materials-title {
  font-size: 2.5vw;
  line-height: 1.2;
  margin: 0 30.93vw;
  letter-spacing: 1px;
  margin-bottom: 47px;
}
.materials-desc {
  margin: 0 19.97vw;
  margin-bottom: 5.5vw;
  font-size: 1.09vw;
}
.materials-items{
  display: flex;
  margin: 0 10.15vw;
  margin-bottom: 4.479vw;
}
.materials-item {
  margin-right: 3.385vw;

  &:last-child{
    margin-right: 0;
  }
}
.objs-display{
  margin-left: 10.15vw;
  padding-bottom: 12.5vw;
}
</style>
