import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore',{ 
  state: () => {
    let isMobile: boolean = false
    let isHeaderShow: boolean = true
    let contests: any = {}
    let device: string = ''
    return {
      device,
      isMobile,
      isHeaderShow,
      contests,
    }
  }
  // let isMobile: boolean = false
  // let isHeaderShow: boolean = false
  // let a: string = 'dasfasfdas'
  // let contests: any = {}
  // return {
  //   isMobile,
  //   isHeaderShow,
  //   a,
  //   contests,
  // }
})
