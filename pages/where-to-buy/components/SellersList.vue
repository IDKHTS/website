<template>
  <div>
    <div :class="{'is-mob': isMobile, 'is-pc-target': isHeaderShow && !isMobile}" v-for="(item, index) in sellersList"  :key='item.h3text+index' :id="item.h3text.replace(/ /ig, '-')">
      <h3 class="title region">{{item.h3text}}</h3>
      <div v-if='item.columnsData.filter((item)=> item.type === MajorType).length > 0'
        class="columns-wrapper"
        :style="{ 'display': 'block', marginTop: '40px' }">
          <!-- <h3 class="title region" v-if="(selected !== 'All' ) && (selected !== '所有')">{{item.h3text}}</h3> -->
          <p class="countryName">{{MajorType}}</p>
          <div class="seller-list is-multiline">
              <SellersCard v-for="meta in item.columnsData.filter((item)=> item.type === MajorType)"
              :imgSrc="meta.imgSrc"
              :title="meta.title"
              :key="meta.title"
              :subtitle="meta.subtitle"
              :country="meta.country"
              :phone="meta.phone"
              :email="meta.email"
              :hasLink="meta.hasLink"
              :address="meta.address"
              :hLink="meta.hLink"
              :logo='meta.logo'
              :type='meta.type'
              :Showroom='meta.Showroom'
              :Service='meta.Service'
              >
              </SellersCard>
          </div>
      </div>
      <div class="columns-wrapper mt-2xl"
        v-for="country in filterCountry(item.columnsData)"
        :key="item.h3text+country"
        :style="{'display': 'block'}"
        v-show='item.columnsData.filter((item)=> item.country === country && item.type !== MajorType).length > 0'
        >
          <p class="countryName">{{country}}</p>
          <div class="seller-list is-multiline">
              <SellersCard v-for="meta in item.columnsData.filter((item)=> item.country === country && item.type !== MajorType)"
              :imgSrc="meta.imgSrc"
              :title="meta.title"
              :key="meta.title"
              :subtitle="meta.subtitle"
              :country="meta.country"
              :phone="meta.phone"
              :email="meta.email"
              :hasLink="meta.hasLink"
              :address="meta.address"
              :hLink="meta.hLink"
              :logo='meta.logo'
              :type='meta.type'
              :Showroom='meta.Showroom'
              :Service='meta.Service'
              >
              </SellersCard>
          </div>
      </div>
    </div>
  </div>
</template>


<script setup lang='ts'>
import SellersCard from './SellersCard.vue'
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '~/stores';

defineProps<{ sellersList: Array<any> }>()
const { isMobile,isHeaderShow } = storeToRefs(useGlobalStore())
const i18n = useI18n()
const isCN = computed(() => i18n.locale.value === 'zh-CN')

const MajorType = ref('Major Distributor')

const filterCountry = (columnsData: any) => {
  let countryArray = new Set()
  columnsData.forEach((item: any, i: number) => {
    countryArray.add(item.country)
  })
  // mark: below func is useless
  // return Array.from(countryArray).sort(function(a, b) {
  //     return a[0].charCodeAt(0) > b[0].charCodeAt(0);
  // });
  return isCN ? Array.from(countryArray) : Array.from(countryArray).sort()
}
</script>


<style scoped lang='scss'>


.title.region {
  padding-top: 64px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height, or 122% */

  letter-spacing: -0.24px;

  color: #000000;
}
.countryName{
  margin-block: 32px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  /* 文本/二级辅助文本 */
  color: $black-white-2;
}

.seller-list  {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}


.is-pc-target:target {
  padding-top: 60px;
}
.is-mob:target {
  padding-top: 72px;
}

</style>
