<template>
    <div class='bg-grey'>
        <Banner :dataSrc='banner'></Banner>
        <SecondaryNavBar
            class="secondary-nav-bar"
            :navData="navData"
            @onToggleMobMenu="onToggleMobMenu"
            >
        </SecondaryNavBar>
  
  
        <div class="sub-title">
            <!-- <span>{{selectArea.title}} </span>
            <select v-model="selected">
                <option v-for="option in (this.$i18n.locale === 'zh-CN'? ['所有'] : ['All']).concat(filterCountry(distributorMetas))"
                    v-bind:value="option"
                    :key="option"
                >
                    {{ option }}
                </option>
            </select> -->
        </div>

        <div class='snmk-container pb-2xl'>
            <div class='snmk-col-10 snmk-col-l-10 snmk-col-m-8 snmk-col-s-4 snmk-col-xs-4 snmk-col-offset-1 snmk-col-l-offset-1'>
            <div class='select-container text-center mt-3xl'>
                <h1 class="title main-title">{{selectArea.h1text}}</h1>
                <div class="sub-title">
                    <span>{{selectArea.title}} </span>
                    <select v-model="selected" @change='handleSelectChange'>
                    <option v-for="option in selectedOptions"
                        v-bind:value="option"
                        :key="option"
                    >
                        {{ option }}
                    </option>
                    </select>
                </div>
            </div>
            <SellersList :sellersList='sellersList'></SellersList>
            </div>
        </div>
    </div>
  
</template>
  
<script setup lang='ts'>
import SecondaryNavBar from '@@/components/SubmenuStickyBar.vue'
import Banner from './components/Banner.vue'
import SellersList from './components/SellersList.vue'
useHead({
    title: 'Global Reseller Network',
    meta: [
        { name: 'description', content: 'Global Reseller Network' }
    ]
})

const i18n = useI18n()
const isCN = computed(() => i18n.locale.value === 'zh-CN')
const selected = ref(isCN ? '所有' : 'All')
const globalResellerNetwork = computed(() => i18n.tm('globalResellerNetwork'))
const banner = computed(() => globalResellerNetwork.value.banner)
const selectArea = computed(() => globalResellerNetwork.value.selectArea)

const handleSelectChange = () => {
    const MAJOR = 'Major Distributor'
    if (selected.value === 'All') {
        sellersList.value = globalResellerNetwork.value.sellersList
    } else if (selected.value === MAJOR) {
        sellersList.value = globalResellerNetwork.value.sellersList
            .filter((v:any) => v.columnsData.some((item: any) => item.type === MAJOR))
            .map((v: any) => {
                return {
                ...v,
                columnsData: v.columnsData.filter((item: any) => item.type === MAJOR)
                }
            })
    } else {
        sellersList.value = globalResellerNetwork.value.sellersList
            .filter((v:any) => v.columnsData.some((item: any) => item.country === selected.value))
            .map((v:any) => {
                return {
                ...v,
                columnsData: v.columnsData.filter((item: any) => item.country === selected.value)
                }
            })
    }
}
const filterCountry = (sellersList: []) => {
    const columnsData = Array.prototype.concat.apply([], sellersList.map(v => v.columnsData))
    let countryArray = new Set()
    columnsData.forEach((item, i) => {
        countryArray.add(item.country)
    })
    return isCN ? Array.from(countryArray) : Array.from(countryArray).sort()
}
const selectedOptions = computed(()=>(isCN? ['所有', 'Major Distributor'] : ['All', 'Major Distributor'])
    .concat(filterCountry(globalResellerNetwork.value.sellersList)))

    
const sellersList = ref(globalResellerNetwork.value.sellersList)
const navData = computed (() => ({
    title: !isCN ? '分销商' : 'Global Reseller Network',
    navList: sellersList.value.map((v:any) => ({
        text: v.h3text, 
        href: v.h3text.replace(/ /ig, '-')
    }))
}))


const isOpenMobMenu = ref(false)
const onToggleMobMenu = (isOpen: boolean) => {
    isOpenMobMenu.value = isOpen
}


</script>

  
<style scoped lang='scss'>
  .bg-grey {
    background-color:  #FAFAFA;
  }
</style>
  