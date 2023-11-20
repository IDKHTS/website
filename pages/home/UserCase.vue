<template>
  <div class='user-cases'>
    <div>
      <h1 class='head-title' v-html='userCases.title'></h1>
      <p v-if='!isMobile' class='head-desc mt-m' v-html='userCases.desc'></p>
    </div>
    <SwiperActiveProgress id='use-case' :options="userCaseOptions" class="user-cases-content  mt-xl">
      <div class="swiper-slide"  v-for="(userCase) of userCases.cases" :key="userCase.imgSrc">
        <div class='case'>
          <NuxtImg style="width: 100%" :src="userCase.imgSrc" alt="" srcset='' loading="lazy" />
          <div class='flex-justify-between text-wrapper'>
            <div class='author' v-html='userCase.author'></div>
            <div class='machine'>
              <div v-html='userCase.machine'></div>
              <div class='uc-tags-wrapper' v-if='userCase.tags.length > 0'>
                <div class='uc-tag' v-for='(tag, index) of userCase.tags' :key='userCase.author + index' v-html='tag'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperActiveProgress>
  </div>
</template>

<script lang='ts' setup>
import SwiperActiveProgress from '@@/components/swiper/SwiperActiveProgress.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '~/stores'

const { isMobile } = storeToRefs(useGlobalStore())
const activeTutorialIndex = ref(0)
const userCaseOptions = ref({})
const userCases = computed(() => {
  return {
    title: `Discover What's Possible`,
    desc: `Follow us on social media and get inspired.`,
    cases: [
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/Bernd-Michalak-(Snapmaker-Artisan).jpg',
        author: '@Bernd Michalak',
        machine: 'Snapmaker Artisan',
        tags: ['3D Printing']
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/usercases/Justin-de-la-Serna-(Snapmaker-2.0).jpg',
        author: '@Scheurmann Dominic',
        machine: 'Snapmaker Artisan',
        tags: ['3D Printing']
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/René-Ruschetta-(Snapmaker-Artisan).jpg',
        author: '@René Ruschetta',
        machine: 'Snapmaker Artisan',
        tags: ['3D Printing']
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/usercases/04-Henry-Martinez（Snapmaker-J1）.jpg',
        author: '@Henry Martinez',
        machine: 'Snapmaker J1',
        tags: []
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/usercases/Christoph-Forster-(Snapmaker-J1).jpg',
        author: '@Christoph Forster',
        machine: 'Snapmaker J1',
        tags: ['3D Printing']
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/usercases/06-@hatabo.dayo(Snapmaker-2.0,-3D-Printing).jpg',
        author: '@hatabo.dayo',
        machine: 'Snapmaker 2.0',
        tags: ['3D Printing']
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/usercases/Mike-Dyer-(Snapmaker-2.0).jpg',
        author: '@Mike Dyer',
        machine: 'Snapmaker 2.0',
        tags: ['Laser']
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/usercases/06-@Chenchienchen-(Snapmaker-2-1.jpg',
        author: '@Chenchienchen',
        machine: 'Snapmaker 2.0',
        tags: ['3D Printing', 'Laser']
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/usercases/09-Tina-Touli-(Snapmaker-2.0,-Laser).jpg',
        author: '@Tina Touli',
        machine: 'Snapmaker 2.0',
        tags: ['Laser']
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/usercases/09-@denise.gittins-(Snapmaker-2-1.jpg',
        author: '@denise.gittins',
        machine: 'Snapmaker 2.0',
        tags: []
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/usercases/11-Peter-Stranner-(Snapmaker-2.0,-CNC).jpg',
        author: '@Peter Stranner',
        machine: 'Snapmaker 2.0',
        tags: ['CNC']
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/Natsuya-Ishikawa-(Snapmaker-2.0).jpg',
        author: '@Natsuya Ishikawa',
        machine: 'Snapmaker 2.0',
        tags: ['CNC']
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/usercases/13-Randy-Springer-(Snapmaker-2.0,-Snapmaker-J1).jpg',
        author: '@Randy Springer',
        machine: 'Snapmaker J1',
        tags: []
      },
      {
        imgSrc: 'https://ditfjx9w4x3vl.cloudfront.net/assets/home/pc/usercases/14-@ikea_renovation--(Snapmaker-2.0).jpg',
        author: '@ikea_renovation',
        machine: 'Snapmaker 2.0',
        tags: []
      }
    ]

  }
})
onBeforeMount(() => {
  userCaseOptions.value = {
    // [4.5 * 1000, 4.5 * 1000, 4.5 * 1000, 4.5 * 1000, 4.5 * 1000, 4.5 * 1000, 4.5 * 1000, 4.5 * 1000]
    timeAry: new Array(userCases.value.cases.length).fill(4.5 * 1000), // [100 * 1000, 1 * 1000, 1 * 1000, 1 * 1000
    slidesPerView: isMobile.value ? 1 : 2.8,
    spaceBetween: isMobile.value ? 0 : 20,
    watchSlidesProgress: true,
    speed: 1000,
    centeredSlides: true,
    loop: true,

    on: {
      slideChange () {
        activeTutorialIndex.value = this.realIndex
      }
    }
  }
})
</script>


<style lang="scss" scoped>

.user-cases-content {
  padding-bottom: 64px;

  // height: calc(31.435vw + 130px);

  &::v-deep .swiper-pagination {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
  }
}
.swiper-wrapper {
  display: flex;
  align-items: flex-start;
}
.swiper-slide {
  height: auto;
  display: flex;
  align-items: stretch;
}
.swiper-slide-prev {
  .tutorial {
    display: block;
    float: right;
  }
}
.swiper-slide-active {
  position: relative;
  // display: flex;
  justify-content: center;
}
.swiper-slide-next {
  display: block;
  float: left;
}


.user-cases {
  background-color: #F5F5F5;
  padding: 110px 0;
  @include mobile {
    padding: 42px 0 56px;
  }

  .head-title {
    color: var(--unnamed, #1F1F1F);
    text-align: center;
    font-family: Roboto;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 68px; /* 113.333% */
    letter-spacing: -0.24px;

    @include mobile {
      font-size: 40px;
      line-height: 48px;
    }
  }
  .head-desc {
    color: var(--unnamed, #5C5C5C);
    text-align: center;

    /* Heading/1920/Gilroy Bold-18 */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.24px;
  }

  .case {
    height: 100%;
    background-color: white;
  }

  .text-wrapper {
    padding: 32px 53px 40px 40px;
    @include mobile {
      padding: 20px 24px;
      flex-direction: column;
    }
  }

  .author {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.24px;
    margin-right: 24px;

    @include mobile {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 8px;
    }
  }

  .machine {
    color: #7F7F7F;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.24px;

    @include mobile {
      font-size: 14px;
      line-height: 20px;
    }
  }
}

.uc-tags-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
}
.uc-tag {
  margin-top: 6px;
  color: #7F7F7F;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 200% */
  letter-spacing: -0.24px;

  padding-inline: 14px;
  border-radius: 4px;
  border: 1px solid #D4D4D4;
  margin-right: 6px;

  @include mobile {
    font-size: 12px;
    line-height: 20px;
  }
}
</style>
