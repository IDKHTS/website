
<template>
    <section class="votes my-3xl" v-if='dataSrc'>
        <div class="container">
            <h2 class="mainTitle has-text-centered">
                {{dataSrc.mainTitle}}
            </h2>
            <div class="columns flowContent">
                <div class="eachFlow is-clearfix" v-for="(item,key) in dataSrc.content" :key='key'>
                    <p class="flowTitle">
                        0{{key+1}}
                    </p>
                    <div class="text">
                        <p v-html="item"></p>
                    </div>
                 </div>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'
const props = withDefaults(defineProps<{
    dataSrc: any
}>(), { dataSrc: {} })
const { isMobile } = storeToRefs(useGlobalStore())

</script>

<style scoped lang='scss'>
@import '../style.scss';
.votes {
    padding: 80px 0;
    background: center / cover  url('https://ditfjx9w4x3vl.cloudfront.net/img/pic_get votes_bg_1920x370.png') no-repeat;
    .flowContent{
        justify-content: space-between;
        margin-top: 50px;
        .eachFlow{
            display: flex;
            align-items: center;
            flex-basis: 368px;
            flex-grow: 0;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #E7E8E9;
            .flowTitle{
                float: left;
                padding: 21.5px 15px 21.5px 10px;
                font-size: 60px;
                font-weight: normal;
                color: #979899;
                line-height: 69px;
                font-family: ArialNarrow-Italic, ArialNarrow;
            }
            .text{
                float: left;
                width: 268px;
                // padding: 20px 0 20px 10px;
                padding: 32px 10px 32px 10px;
                font-weight: 400;
                color: #676869;
            }
            &:nth-child(2) .text,&:nth-child(3) .text{
                padding-top: 32px;
                padding-bottom: 32px;
            }

            @media (max-width: 1280px) and (min-width: 1024px) {
              margin-inline: 20px;
              .text{ width: 100%; }
            }
        }
    }
}
@media screen and (max-width: 1088px){
    .ways .columns ,.votes .columns {
        display: block!important;
    }
}

@include mobile {
    .votes{
        margin: 0;
        background-image: none;
        background-color: #F7F8F9;
        padding: 8.33vw 0 11.11vw;
        .columns{
            margin: 6.94vw 4.44vw 0;
            .eachFlow{
                margin-bottom: 2.78vw;
                height: 24.44vw;
                .flowTitle{
                    padding: 0 2.78vw 0;
                    font-size: 60px;
                    // line-height: 69px;
                }
                .text{
                    width: 70.1vw;
                    font-size: 3.89vw;
                    padding: 0 2.78vw 0 0;
                }
                @media (max-width: 470px) {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .flowTitle{
                        padding: 0 2.78vw 0;
                    }
                }
            }
        }
    }
}

</style>