<template>
  <div class="tabs-panel" id="tile-1">

    <!-- tabs -->
    <div :class="{'tab-labels mb-xl': isDark,'tab-labels-white': !isDark, 'tab-sticy':isSticy, 'tab-mobil-center': options.mobileCenter}">
      <div v-for="tab of tabs" :key="tab.tabLabel" class="py-m"
        :class="{
          'tab-label-active': selectTab === tab.slotName && isDark,
          'tab-label': selectTab !== tab.slotName && isDark,
          'tab-label-active-white': selectTab === tab.slotName && !isDark,
          'tab-label-white': selectTab !== tab.slotName && !isDark,

        }"
        @click="changeTab(tab.slotName)"
        >
        <div class="nav-link" > {{tab.tabLabel}}</div>
      </div>
    </div>

    <!-- Tab panes -->
    <div class="tab-content">
      <template v-for="slotName of slotNames" >
        <div v-if="selectTab === slotName" :key="slotName" keep-alive >
            <slot :name="slotName" ></slot>
        </div>
      </template>
    </div>

  </div>
</template>


<script>
// import $ from '@/js/jquery-vendor'


export default {
  name: 'tab-pane',
  props: {
    options: {
      default: function () { return {tabs: []} }
    }
  },
  data: function () {
    return {
      selectTab: '',
      isSticy: false
    }
  },
  computed: {
    enhanceOptions () {
      const defaultOptions = {
        isDark: true,
        mobileCenter: false,
        tabs: []
      }
      return Object.assign(defaultOptions, this.options)
    },
    tabs () {
      return this.enhanceOptions.tabs
    },
    slotNames () {
      // console.log(this.enhanceOptions)
      return this.enhanceOptions.tabs.map(v => v.slotName)
    },
    isDark () {
      return this.enhanceOptions.isDark
    }
  },
  mounted () {
    this.selectTab = this.enhanceOptions.tabs[0].slotName
    this.isSticy = this.enhanceOptions.scrollTicky
  },
  methods: {
    changeTab (name) {
      this.$emit('changeTab', name)
      this.selectTab = name
    }
  }
}
</script>



<style lang="scss" scoped>
.tabs-panel {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.tab-labels {
  display: flex;
  flex-direction: row;
  width: 100%;
  // justify-content: space-between;
  justify-content: center;
  margin-right: 2.44vw;
  border-bottom: 1px solid $black-white_2;
  // background-color: #151617;
}
.tab-sticy {
  z-index: 100;
  position: sticky;
  top: 0;
}

.tab-label {
  // width: 20%;
  width: auto;
  margin: 0 24px;
  position: relative;
  text-align: center;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 100%;
    transform: scale(0);
    height: 1px;
    position: absolute;
    // left: 2em;
    // bottom: 0.8em;
    bottom: -1px;
    background-color: $blue;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    color: $blue;
    &::after {
      transform: scale(1);
      // width: 100%;
    }
  }


}

.tab-label-active {
  color: $blue;
  // width: 20%;
  width: auto;
  margin: 0 24px;
  position: relative;
  text-align: center;
  cursor: pointer;



  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    // left: 2em;
    // bottom: 0.8em;
    bottom: -1px;
    background-color: $blue;
    transition: all 0.5s ease-in-out;
  }
}



.tab-labels-white {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  // border-bottom: 1px solid $black-white_2;
  background-color: white;
  padding: 0 24px;
}

.tab-label-white {
  width: 20%;
  position: relative;
  text-align: center;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 100%;
    transform: scale(0);
    height: 3px;
    position: absolute;
    // left: 2em;
    // bottom: 0.8em;
    bottom: 0;
    background-color: $blue;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    color: $blue;
    &::after {
      transform: scale(1);
      // width: 100%;
    }
  }


}

.tab-label-active-white {
  color: $blue;
  width: 20%;
  position: relative;
  text-align: center;
  cursor: pointer;



  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    position: absolute;
    // left: 2em;
    // bottom: 0.8em;
    bottom: 0;
    background-color: $blue;
    transition: all 0.5s ease-in-out;
  }
}

@media (max-width: $breakPoint_m) {
  .tabs-panel {
   position: relative;
  }
  .tab-labels {
   justify-content: space-between;
  }

  .tab-label, .tab-label-active{
    margin: 0;
  }
  .tab-mobil-center {
    justify-content: center;

    .tab-label, .tab-label-active{
      margin: 0 16px;
    }
  }
}
</style>
