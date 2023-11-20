<template>
    <div id="distributor">
      <section class="hero description">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1>{{descriptionCon.h1text}}</h1>
            <h4>
              {{descriptionCon.h4text1}}<br/><br/>
  
              {{descriptionCon.h4text1Plus}}
              <a :href="descriptionCon.formHref" target="_blank">
                {{descriptionCon.formText}}
              </a>.
              {{descriptionCon.h4text2}}<br/><br/>
  
              {{descriptionCon.h4text2Plus}}
              <a :href="descriptionCon.salesHref">
                {{descriptionCon.salesText}}
              </a>
            </h4>
          </div>
        </div>
      </section>
  
      <section id="online-store" class="online-store section" style="margin-top: 4rem;">
        <div class="container">
          <div class="title has-text-centered" style="margin-bottom: 3rem">
            {{onlineStore.title}}
          </div>
          <div class="columns is-multiline">
            <div class="column is-one-third-tablet has-text-centered"
            v-for="(item, index) in onlineStore.columnsCon" :key="index">
              <a :href="item.aHref" target="_blank" v-if="!item.childrenPart">
                <div class="card">
                  <img :src="item.aImgSrc" style="width: 200px">
                  <div>{{item.aDivCon}}</div>
                </div>
              </a>
              <div v-if="item.childrenPart" class="card-wrapper">
                <div class="card with-modal" @click="visibleModal">
                  <img :src="item.aImgSrc" />
                  <div>{{ item.aDivCon }}</div>
                </div>
              </div>
              <Modal v-if="item.childrenPart && modalShow"
                :title="item.modalTitle"
                :onCancel="cancelModal"
              >
                <div class='amazon-modal-body'>
                  <div class="amazon-region" v-for="childItem in item.childrenPart" :key='childItem.aDivCon'>
                    <a :href='childItem.aHref' target="_blank">
                      <div class="card children-card">
                        <img :src="childItem.aImgSrc" />
                        <div class="region">{{ childItem.aDivCon }}</div>
                      </div>
                    </a>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </section>
  
      <div class="official-partners" style="margin-top: 1rem;">
        <section class="section">
          <div class="container">
            <h1 class="title main-title">{{selectArea.h1text}}</h1>
            <div class="sub-title">
                <span>{{selectArea.title}} </span>
                <select v-model="selected">
                  <option v-for="option in (this.$i18n.locale === 'zh-CN'? ['所有'] : ['All']).concat(filterCountry(distributorMetas))"
                      v-bind:value="option"
                      :key="option"
                  >
                      {{ option }}
                  </option>
                </select>
            </div>
            <div class="" >
                <div class="" v-for="item in officialAreaArray" :key="item.tag" >
                    <h3 class="title region" v-if="(selected === 'All' )|| (selected === '所有')">{{item.h3text}}</h3>
                    <div class="columns-wrapper"
                     v-for="country in filterCountry(item.columnsData)"
                     :key="country"
                     :style="{'display': (selected === 'All' )|| (selected === '所有' ) || selected === country? 'block': 'none'}"
                     >
                        <h3 class="title region" v-if="(selected !== 'All' ) && (selected !== '所有')">{{item.h3text}}</h3>
                        <p class="countryName">{{country}}</p>
                        <div class="columns is-multiline">
                            <DistributorCard v-for="meta in item.columnsData.filter((item)=> item.country === country)"
                            :imgSrc="meta.imgSrc"
                            :title="meta.title"
                            :key="meta.title"
                            :subtitle="meta.subtitle"
                            :country="meta.country"
                            :phone="meta.phone"
                            :email="meta.email"
                            :hasLink="meta.hasLink"
                            :address="meta.address"
                            :hLink="meta.hLink">
                            </DistributorCard>
                        </div>
                    </div>
                </div>
            </div>
  
          </div>
        </section>
      </div>
    </div>
</template>

<script setup lang='ts'>
import Modal from '~/components/Modal.vue';
import DistributorCard from  './components/DistributorCard.vue'
import headConfigs from '~/resources/data/head';

useHead(headConfigs.distributor)
const i18n = useI18n()
const isCN = computed(() => i18n.locale.value === 'zh-CN')
const selected = ref(isCN ? '所有' : 'All')
const modalShow = ref(false)

const distributorData = computed(()=>i18n.tm('distributorData'))
const descriptionCon = computed(() => distributorData.value?.allotherData?.descriptionCon)
const distributorMetas = computed(() => distributorData.value?.distributorMetas)
const selectArea = computed(() => distributorData.value?.selectArea)
const onlineStore = computed(() => distributorData.value?.allotherData?.onlineStore)
const officialAreaArray = computed(() => distributorData.value?.allotherData?.officialAreaArray)

const filterCountry = (columnsData: any) => {
    let countryArray = new Set();
    columnsData.forEach((item:any, i: number) => {
        countryArray.add(item.country)
    });
    return isCN ? Array.from(countryArray) : Array.from(countryArray).sort();
}
const cancelModal = () => modalShow.value = false
const visibleModal = () => modalShow.value = true;
</script>

<style lang="scss">  
  #distributor {
    background-color: $background-color;
    // padding-top: 3rem;
    padding-bottom: 3rem;
    .hero {
      background-image: url('https://ditfjx9w4x3vl.cloudfront.net/img/distributor-cover.png');
  
      &.description {
        .container {
          max-width: 800px;
          background-color: Transparent;
        }
        h1 {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        h4 {
          font-size: 18px;
          color: $grey;
        }
      }
    }
  
    .online-store {
      margin-top: 2rem;
      .card {
        padding: 2rem;
        white-space: nowrap;
      }
      .amazon-modal-body {
        width: 760px;
        height: 365px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        @media (min-width: 1087px) {
          &:first-child{
            padding-left: 2px;
          }
        }
        .children-card, .amazon-region {
          width: 220px;
          height: 137px;
          &:hover {
            cursor: pointer;
          }
          img {
            width: 92px;
            height: 48px;
          }
          .region {
            font-size: 18px;
            margin-top: 6px;
          }
        }
        .amazon-region {
          margin: 30px 0 0 24px;
        }
        @media (max-width: 1087px) {
          width: 95vw;
          height: 100%;
          overflow: auto;
          padding: 0 7vw;
          justify-content: space-between;
          .amazon-region {
              // margin: 30px 4.6vw 0;
              width: 38vw;
              height: 23vw;
              margin: 24px 0 0 0;
              &:last-child {
                  margin-bottom: 24px;
              }
              .children-card {
                  width: 100%;
                  height: 23vw;
                  padding: 1.3rem 1rem 0.7rem;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: space-around;
                  img {
                      width: 18vw;
                      height: 9.5vw;
                  }
                  .region {
                      font-size: 4vw;
                      white-space: nowrap;
                  }
              }
          }
        }
      }
  
      .card-wrapper {
          height: 100%;
          .with-modal {
              height: 100%;
          }
      }
    }
  
    .container {
      .content {
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
    }
    .main-title, .sub-title{
        text-align: center;
    }
    .title.region {
      color: #9b9b9b;
      margin: 2rem 0;
    }
    .official-partners {
        .countryName{
            margin: 1rem 0;
        }
    }
  }
  
</style>
  