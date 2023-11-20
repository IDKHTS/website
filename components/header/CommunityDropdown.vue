<script setup lang='ts'>
import Navigate from '@@/components/Navigate.vue';
import { getLastBlog, getLastForumTopics } from '~/service';
const props = defineProps<{
  community: any
}>()


const getCommunityData = async () => {
  const topics = await getLastForumTopics()
  const blogs = await getLastBlog(3) // getLastThreeBlog()
  const dropdowns = props.community.dropdowns
  const blog = dropdowns.find(v => v.title === 'Blog')
  const forum = dropdowns.find(v => v.title === 'Forum')

  blog.categories = blogs.data.map((blog: any) => {
    const img = blog && blog.yoast_head_json && blog.yoast_head_json.og_image && blog.yoast_head_json.og_image[0]
    const title = blog && blog.yoast_head_json && blog.yoast_head_json.title
    return {
      name: title,
      imgSrc: img.url,
      link: blog.link
    }
  })
  forum.categories = topics.data.map(v => ({
    name: v.title,
    link: v.link,
    imgSrc: `https://ditfjx9w4x3vl.cloudfront.net/assets/header/comunity/Forum icon.svg` // v.imgSrc
  }))
}

if(!import.meta.env.SSR) {
  getCommunityData().catch(err => console.log(err))
}
</script>

<template>
  <ClientOnly  fallback-tag="span" fallback="Loading comments...">
    <div class="w-100 mt-xl support-dropdownItem-wrapper">
      <template  v-for="(dropdownItem, index) of community.dropdowns" :key="dropdownItem.title">
        <div class="divide-line" :key="dropdownItem.title+'divide'" v-if="index !== 0" ></div>
        <div class="community-dropdownItem">
          <div class="font-1 bold-700 font-bw-1">{{dropdownItem.title}}</div>
          <div class="mt-xs mb-l font-3 font-bw-3">{{dropdownItem.desc}}
            <a v-if='dropdownItem.descLink' class="snmk-link-btn" style='color: #0C63E2;' :href='dropdownItem.descLink.link' target='_blank'>{{dropdownItem.descLink.text}}</a>
          </div>
          <div v-for="category of dropdownItem.categories" :key="category.name" class="community-category display-flex mb-m" :class="{'vertical-center': dropdownItem.title === 'Blog'}">
            <Navigate
              :aLink="category && category.link"
              :route="category && category.route"
              target="_blank"
              v-if="category.imgSrc"
              class="community-category-img mr-xs"
              :class="{'community-category-blog-img': dropdownItem.title === 'Blog'}"
            >
              <img class='w-100' :src="category.imgSrc" :alt="category.name">
            </Navigate>
            <div>
              {{category.title}}
            </div>
            <Navigate
              :aLink="category && category.link"
              :route="category && category.route"
              target="_blank"
              class="font-2 support-nav-main-title community-category-text"
              :aClass="'two-line-ellipsis'"
              >
              <span class="font-bw-1"  :ref="category.name">{{category.name}}</span>
            </Navigate>
          </div>
        </div>
      </template>
    </div>
    <div class="w-100 text-center pb-l pt-xl">
      <Navigate
        :aLink="community.mainLinks.link"
        :route="community.mainLinks.route"
        target="_blank"
        class="snmk-link-btn all-products"
        :id="community.mainLinks.traceID"
        >
        {{community.mainLinks.text}}
      </Navigate>
    </div>
  </ClientOnly>
</template>

<style scoped lang='scss'>


.support-dropdownItem-wrapper {
  display: flex;
  justify-content: space-between;
}
.divide-line {
  width: 1px;
  background-color: #EFEFEF;
}

.support-nav-main-title {
  color: $black_white_1;

  .snmk-link-btn::after {
    height: 1px;
  }

  &:hover~.img-box .support-nav-img {
    padding: 8px;
  }
}
.community-dropdownItem {
  width: calc(100% / 4);
  padding-left: 24px;
  padding-right: 24px;
}

:deep(.community-category-blog-img) {
  width: 84px;
}

:deep(.community-category-img) {
  border-radius: 3px;
  flex: 0 0 auto;
  overflow: hidden;
  line-height: 0;

  &:hover~.community-category-text span {
    color: $blue;
    background-size: 100% 1px;
  }
}

.two-line-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 40px;
  display: -webkit-box;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.community-category .community-category-text span {
  // multi line text underline css animation
  display: inline;
  background-image: linear-gradient(120deg, $blue 0%, $blue 100%);
  background-repeat: no-repeat;
  background-size: 0 1px;
  background-position: 0 100%;
  transition: background-size 0.25s ease-in;

  &:hover {
    color: $blue;
    background-size: 100% 1px;
  }
}
</style>