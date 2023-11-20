<template>
  <div class="snmk-container">
    <div class="snmk-col-6 snmk-col-l-6 snmk-col-m-6 snmk-col-s-4 snmk-col-xs-4
      snmk-col-offset-1 snmk-col-l-offset-1 snmk-col-m-offset-1 pt-2xl pb-3xl">
      <div class="big-title-2 bold">{{appDownloadData.title}}</div>
      <div class="slogan mt-s mb-l bold">{{appDownloadData.slogan}}</div>
      <div class="font-2 download-descriptions">{{appDownloadData.descriptions}}</div>
      <a class="snmk-primary-btn download title-3 only-pc" :class="{'download-disabled': !isFoundVersion}" :href="downloadVersionLink" :id="appDownloadData.traceID" >
        <span class="iconfont title-3 mr-s">&#xe721;</span>
        {{appDownloadData.downloadText}} {{softwareVersion}}
      </a>
      <div class="installer-tip mt-l only-pc">
        <span v-if="recommendInstallerOsType == 'windows'" class="iconfont">&#xe60d;</span>
        <span v-else-if="recommendInstallerOsType === 'mac'" class="iconfont">&#xe60e;</span>
        <span v-else-if="recommendInstallerOsType === 'linux'" class="iconfont">&#xe614;</span>
        <span class="recommend-installer" v-if="isFoundVersion">{{recommendInstaller}}</span>
        <span class="recommend-installer" v-if="!isFoundVersion">{{recommendInstaller}}</span>
        <div class="installer-warnning" v-if="!isFoundVersion" v-html="appDownloadData.intallerWranning"></div>
      </div>
      <div class="custom-choose-wrapper only-pc">
        <div class="snmk-primary-btn custom-choose" :class="{'custom-choose-active': isOpenCustomChoose}" @click.stop="onCustomChoose()">
          <span> {{appDownloadData.otherDownload}}</span>
          <span class="iconfont">&#xe7b2;</span>
        </div>
        <div class="installers mt-xs px-l py-xs" v-show="isOpenCustomChoose" @click.stop >
          <div v-for="(typeInstallers, osType) in installers" :key="osType" class="os-installer">
            <a :href="item.link"
              v-for="(item, index) of typeInstallers"
              :key="item.type"
              class="custom-choose-intaller my-l"
              :class="{'custom-choose-recommend': recommedOSType == osType && recommedIndex == index}"
              >
              <span v-if="osType == OS_TYPE.windows" class="iconfont">&#xe60d;</span>
              <span v-else-if="osType === OS_TYPE.mac" class="iconfont">&#xe60e;</span>
              <span v-else-if="osType === OS_TYPE.linux" class="iconfont">&#xe614;</span>
              <span v-else class="iconfont">&#xe613;</span>
              <span :href="item.link">{{item.type}}</span>
              <span class="installer-text" :href="item.link">{{installerText(item.type)}} </span>
              <span class="mr-s" style="float: right;color: #595959">{{item.size}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import UAParser from 'ua-parser-js'
import { useGlobalStore } from '~/stores';
type TWindows = 'windows'
type TMac = 'mac'
type TLinux = 'linux'
type TOther = 'other'
type TOS_TYPE = TWindows | TMac | TLinux | TOther | ''
interface IOS_TYPE {
  windows: TWindows
  mac: TMac
  linux: TLinux
  other: TOther 
}
const OS_TYPE: IOS_TYPE = {
  windows: 'windows',
  mac: 'mac',
  linux: 'linux',
  other: 'other'
}

const windows:TWindows = 'windows'


const luban = await $fetch('https://api.snapmaker.com/luban-installers')


defineProps<{ appDownloadData: any }>()
const i18n = useI18n()
const isCN = computed(() => i18n.locale.value === 'zh-CN')
const { isMobile } = storeToRefs(useGlobalStore())



const ua = ref<UAParser.IResult | null>(null)
const lastreleases = ref<any>({})
const softwareVersion = ref('')
const installers = ref<any>({})

const finder = (item: any, type: string | RegExp) => new RegExp(type).test(item)
const installerText = (name: string) => {
  if (finder(name, /tar.gz|zip/)) {
    return ' '
    // return this.$i18n.locale === 'en-US' ? 'compressed file' : '压缩包'
  }
  return !isCN.value ? 'installer' : '安装包'
}

const installersHandler = (installes: any) => {
  interface IInstallerItem {
    type: string
    link: string
    size: string
  }
  interface IInstallerResult {
    windows?: IInstallerItem[],
    mac?: IInstallerItem[],
    linux?: IInstallerItem[],
    other?: IInstallerItem[]
  }
  const result: IInstallerResult = {}
  const handle = (item: any, type: string) => ({
    type: item.name.toLowerCase().replace(/snapmaker-luban-/, ''),
    link: isCN ? 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.com/download/luban/' + item.name : item.browser_download_url,
    size: `${Math.ceil(item.size / 1024 / 1024 * 10) / 10} MB`
  })

  result.windows = installes.filter((v: any) => finder(v.name, 'win')).map(handle)
  result.mac = installes.filter((v: any) => finder(v.name, 'mac')).map(handle)
  result.linux = installes.filter((v: any) => finder(v.name, 'linux')).map(handle)

  result.other = [
    {type: 'Source code (zip)', link: lastreleases.value.zipball_url, size: ''},
    {type: 'Source code (tar.gz)', link: lastreleases.value.tarball_url, size: ''}
  ]
  return result
}

const downloadVersionLink = ref('string')
const recommendInstaller = ref('')
const recommendInstallerOsType = ref('')
const isFoundVersion = ref(false)
const recommedOSType = ref<TOS_TYPE>('')
const recommedIndex = ref(0)
// check installs[osType] if any has match checkString（like cup: x64, os: linux)
// osType value field: windows, mac, linux, other
const checkOS = (checkString: any, osType: TOS_TYPE) => {
  let targetAssets
  let recommedIndex = 0
  const specificOSType = installers.value[osType]
  for (let i = 0; i < specificOSType.length; i++) {
    const currInstaller = specificOSType[i]
    if (finder(currInstaller.type, checkString)) {
      targetAssets = specificOSType[i]
      recommedIndex = i
    }
  }
  downloadVersionLink.value = targetAssets ? targetAssets.link : ''
  recommendInstaller.value = targetAssets ? `${targetAssets.type}·${targetAssets.size}` : ''
  recommendInstallerOsType.value = osType
  return recommedIndex
}
const emit = defineEmits(['onFoundVerion'])
const getLubanData = (res: any) => {
  if(!ua.value) return
  softwareVersion.value = res.name
  lastreleases.value = res

  // vue.intallersAssets = res.assets.filter((v: any) => v.name.indexOf('.yml') === -1)
  const intallersAssets = res.assets.filter((v: any) => v.name.indexOf('.yml') === -1 && v.name.indexOf('mac.zip') === -1)
  installers.value = installersHandler(intallersAssets)

  switch (ua.value.os?.name?.toLowerCase()) {
    case 'windows': {
      let _recommedIndex = checkOS(ua.value.cpu.architecture, OS_TYPE.windows)
      isFoundVersion.value = !!downloadVersionLink.value
      recommedOSType.value = OS_TYPE.windows
      if (downloadVersionLink.value) {
        recommedIndex.value = _recommedIndex
        break
      }

      // indicate a specific window type
      _recommedIndex = checkOS('x64', OS_TYPE.windows)
      recommedIndex.value = _recommedIndex
      isFoundVersion.value = !!downloadVersionLink.value
      break
    }
    case 'mac os': {
      let _recommedIndex = checkOS('.dmg', OS_TYPE.mac)
      recommedOSType.value = OS_TYPE.mac
      recommedIndex.value = _recommedIndex
      isFoundVersion.value = !!downloadVersionLink.value
      break
    }
    case 'ubuntu':
    case 'debian': {
      let _recommedIndex = checkOS('.deb', OS_TYPE.linux)
      recommedIndex.value = _recommedIndex
      recommedOSType.value = OS_TYPE.linux
      isFoundVersion.value = !!downloadVersionLink.value
      break
    }
    case 'linux': {
      let _recommedIndex = checkOS('.tar.gz', OS_TYPE.linux)
      recommedIndex.value = _recommedIndex
      recommedOSType.value = OS_TYPE.linux
      isFoundVersion.value = !!downloadVersionLink.value
      break
    }
    default: {
      isFoundVersion.value = false
    }
  }
  emit('onFoundVerion', isFoundVersion.value)
}


const isOpenCustomChoose = ref(false)
const onClickCloseCustomChoose = () => {
  if (isOpenCustomChoose.value) isOpenCustomChoose.value = false
}
const onCustomChoose = () => {
  isOpenCustomChoose.value = !isOpenCustomChoose.value
}
onMounted(() => {
    const uaParser = new UAParser()
    ua.value = uaParser.getResult()

    getLubanData(luban)

    window.addEventListener('click', onClickCloseCustomChoose)
})
onUnmounted(() => {
    window.removeEventListener('click', onClickCloseCustomChoose)
})

</script>


<style lang="scss" scoped>


a {
  &:hover {
    color: white;
  }
}

.snmk-container {
  // display: flex;
  color: $black_white_4;
  text-align: left;
}
.big-title-2 {
  color: white;
}

.big-title-2 ,.font-2, .slogan {
  // margin-right: 22.76vw;
  // margin-left: 22.76vw;
}


.slogan {
  color: $black_white_6;
  font-size: 18px;
}


$buttonWidth: 404px;
.download {
  margin-top: 4.166vw;
  width: $buttonWidth;
  text-align: center;
  font-weight: 700;
}
.download-disabled {
  background-color: $black-white-4;
  color: white;
}
.installer-tip {
  color: white;
  width: $buttonWidth;
  text-align: center;
}
.installer-warnning {
  color: $warnning;
  margin-top: 40px;
}

$customChooseWidth: $buttonWidth;
.custom-choose-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  // align-items: center;
  flex-direction: column;
}
.custom-choose {
  // background-color: $black_white_2;
  // opacity: 0.4;
  background: rgb(51, 54, 56);
  margin-top: 4.58vw;
  color: white;
  width: $customChooseWidth;
  display: flex;
  justify-content: space-around;
  .iconfont {
    transition: all .5s ease-in-out;
  }
}
.custom-choose-active {
  .iconfont {
    transform: rotate(180deg);
  }
}

.installers {
  z-index: 11;
  position: absolute;
  top: 100%;
  background-color: $black_white_1;
  border-radius: 8px;
  width: $customChooseWidth;
  color: white;
  overflow: hidden;

  .iconfont {
    color: #D9D9D9;
    margin-right: 15px;
  }

  a {color: white;}
  // padding-top: 32px;
  // padding-bottom: 32px;
}
.os-installer {
  border-bottom: 1px solid #363636;
  &:last-child {
    border-bottom: none;
  }

}
.custom-choose-intaller {
  position: relative;
  display: block;
  text-align: left;

  &:hover .installer-text{
    color: $link;
  }
}
.custom-choose-recommend {
  &::after {
    content: '';
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
    height: 12px;
    border-radius: 100%;
    width: 12px;
    background-color: $blue;
  }
}
.installer-text {
  width: 58px;
  height: 24px;
  float: right;
}


@include device_m {
  .big-title-2 ,.font-2, .slogan {
    margin-right: 0;
    margin-left: 0;
  }
}

@include mobile {
  .snmk-container {
    text-align: center;
  }
  .big-title-2 ,.font-2, .slogan {
    margin-right: 0;
    margin-left: 0;
  }
}
@include tablet {
  .snmk-container {
    text-align: center;
  }
}
</style>
