<template>
    <Addons class='snapmaker2' :subNavBar='snapmakerATNavBar' :dataSrc='addons'></Addons>
</template>
  
  
<script setup lang='ts'>
import Addons from '~/components/products-sub-page/Addons.vue';
const i18n = useI18n()
const snapmakerATNavBar = computed(() => i18n.tm('secondarynavbarData').snapmakerAT)
const addons = computed(() => ({
    // bannerImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/img/products-desktop-banner.png`,
    bannerImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/img/addons_snapmaker_2_banner.png`,
    bannerMobImgSrc: `https://ditfjx9w4x3vl.cloudfront.net/img/products-mobile-banner.png`,
    addons: [
        {
            mainTitle: 'Enclosure',
            content: 'Built to protect, reduce noise, and brighten up your workplace.',
            tag: 'enclosure',
            keyText: 'Key Features',
            keyFeature: 'Add the Door Detection feature and reduce noise of making Create a stable enviornment and help protect you from laser',
            buyBtnText: 'Buy Now',
            buyBtnHref: 'https://shop.snapmaker.com',
            learnMoreHref: '/product/filter-enclosure#enclosure',
            learnMoreText: 'Learn More',
            img: 'https://ditfjx9w4x3vl.cloudfront.net/img/enclosure.png'
        },
        {
            mainTitle: 'Air Purifier',
            content: 'Filter odors created during your making process.',
            tag: 'airPurifier',
            keyText: 'Key Features',
            keyFeature: 'Filter particles with G4, F9, and H13 filters Absorb volatile organic compounds with a carbon filter',
            buyBtnText: 'Buy Now',
            buyBtnHref: 'https://shop.snapmaker.com/products',
            learnMoreHref: '/product/filter-enclosure#air-purifier',
            learnMoreText: 'Learn More',
            img: 'https://ditfjx9w4x3vl.cloudfront.net/img/air-purifier.png'
        },
        {
            mainTitle: 'Rotary Module',
            content: 'Turn your Snapmaker into a powerful 4-axis CNC powerhouse.',
            tag: 'rotary',
            keyText: 'Key Feature',
            keyFeature: '4-axis rotary carving and laser engraving',
            buyBtnText: 'Buy Now',
            buyBtnHref: 'https://shop.snapmaker.com/products/snapmaker-2-0-rotary-module',
            learnMoreHref: '/product/rotary-module',
            learnMoreText: 'Learn More',
            img: 'https://ditfjx9w4x3vl.cloudfront.net/img/rotaryModule.png'
        },
        {
            mainTitle: 'CAN Hub',
            content: 'Connect any or all of your Snapmaker 2.0 addons.',
            tag: 'canhub',
            keyText: 'Key Features',
            keyFeature: 'Stable and reliable addon connection Compact and aluminum alloy design',
            buyBtnText: 'Buy Now',
            buyBtnHref: 'https://shop.snapmaker.com/products/snapmaker-2-0-can-hub',
            // learnMoreHref: 'https://test.snapmaker.com/product/filter-enclosure#air-purifier',
            // learnMoreText: 'Learn More',
            img: 'https://ditfjx9w4x3vl.cloudfront.net/img/canhub.png'
        },
        {
            mainTitle: 'Emergency Stop Button',
            content: 'Provide an extra layer of safety and help salvage your prints.',
            tag: 'emergency-stop-button',
            keyFeature: 'Stop your Snapmaker with a press',
            keyText: 'Key Feature',
            buyBtnText: 'Buy Now',
            buyBtnHref: 'https://shop.snapmaker.com/products/snapmaker-2-0-rotary-module',
            img: 'https://ditfjx9w4x3vl.cloudfront.net/img/emergencyStopButton.png',
        }
    ]
}))
</script>
  
  
<style lang="scss" scoped>
.snapmaker2 {
    &:deep(.hero-body){
        padding-top: 200px;
        padding-bottom: 200px;
    }
}

</style>