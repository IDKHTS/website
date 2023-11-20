<script setup lang='ts'>
  defineProps<{
    route?: string,
    aLink?: string,
    aStyle?: { [key: string]: string },
    aClass?: string,
    elId?: string
    target?: string,
  }>()

</script>

<template>
  <NuxtLink v-if="!!route" :to="route" :style="aStyle" v-bind='$attrs' :class="aClass" :id="elId">
    <slot></slot>
  </NuxtLink>
  <a :href="aLink" v-if="!!aLink" :target="target || '_blank'" :style="aStyle" v-bind='$attrs' :class="aClass" :id="elId">
    <slot></slot>
  </a>
  <div v-if="!aLink && !route" :style="aStyle" :class="aClass" v-bind='$attrs' :id="elId">
    <slot></slot>
  </div>
</template>


<!-- <template>
    <div @click='onClick' v-on="$listeners"  v-bind="$attrs">
        <router-link v-if="!!route" :to="route" :style="aStyle" :class="aClass" :id="elId">
          <slot></slot>
        </router-link>
        <a :href="aLink" v-if="!!aLink" :target="target" :style="aStyle" v-on="$listeners" :class="aClass" :id="elId">
          <slot></slot>
        </a>
        <div v-if="!aLink && !route" :style="aStyle" :class="aClass" :id="elId">
          <slot></slot>
        </div>
    </div>
</template>


<script>
export default {
  props: {
    aLink: {
      default: ''
    },
    route: {
      default: ''
    },
    elId: {
      default: ''
    },
    target: {
      default: ''
    },
    aStyle: {
      default: function() {
        return {}
      }
    },
    aClass: {
      default: function() {
        return {}
      }
    }
  },
  methods: {
    onClick() {
      if (this.aLink) {
        window.open(this.aLink, this.target)
        this.$emit('onclick', this.aLink)
      } else if (this.route) {
        this.$router.push(this.route)
        this.$emit('onclick', this.route)
      }
    }
  }

}
</script> -->
