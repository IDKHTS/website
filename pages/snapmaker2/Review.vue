<template>
    <Review :subNavBar='snapmakerATNavBar' :dataSrc='review'></Review>
</template>
  
  
<script setup lang='ts'>
import Review from '~/components/products-sub-page/Review.vue';
const i18n = useI18n()
const snapmakerATNavBar = computed(() => i18n.tm('secondarynavbarData').snapmakerAT)
const review = computed(() => ({
    title: 'Reviews',
    title2: 'Reviews from 3D Printing Influencers',
    content: [
        {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/video1.jpg',
            text: 'GreatScott! Review (English)',
            videoLink: 'https://www.youtube.com/embed/BSWcrzghlCs',
        },
        {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/video2.jpg',
            text: 'The 3D Printing Zone Review (English)',
            videoLink: 'https://www.youtube.com/embed/0_aFv4cKbt8',
        },
        {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/video3.jpg',
            text: 'Mattley - Artigiano digitale Review (Italian)',
            videoLink: 'https://www.youtube.com/embed/djTrl7HwNS8',
        },
        {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/video4.jpg',
            text: 'LRN2DIY Review (English)',
            videoLink: 'https://www.youtube.com/embed/jE9F2kZAqGM',
        },
        {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/video5.jpg',
            text: 'Baddest Crafts Review (English)',
            videoLink: 'https://www.youtube.com/embed/dldBYg6X0oQ',
        },

        {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/video6.jpg',
            text: 'Rate My Funeral (English)',
            videoLink: 'https://www.youtube.com/embed/5cB1wLNXntw',
        },
        {
            imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/img/video7.jpg',
            text: 'John Aldred (English)',
            videoLink: 'https://www.youtube.com/embed/oMUt1w4bAzM',
        },
    ],
    iconImg: 'https://ditfjx9w4x3vl.cloudfront.net/img/btn_play_hover_80x80.png',
    jdgmConfig: {
        id: 4675550806155,
        title: `Snapmaker 2.0 Modular 3-in-1 3D Printers`
    }
}))
</script>
  
  
<style lang="scss" scoped>

</style>