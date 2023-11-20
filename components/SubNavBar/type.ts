export interface ISubNavMenuItem {
  link?: string
  route?: string
  content: string
}
export interface ISubNavShopModalData {
  text: string
  icon: string
  link: string
}
export interface ISubNavBtnData {
  needSelectedType?: boolean
  shopModalData?: Array<ISubNavShopModalData>
}
export interface ISubNavBtn {
  text?: string
  link?: string
  route?: string
  modalType?: boolean
  data?: ISubNavBtnData
}
export interface ISubNavMenu {
  // TODO: update old verion
  title?: string
  videoSrc?: string
  productBarMenu?: Array<ISubNavMenuItem>

  // curr version
  mainTitle?: string
  menus?: Array<ISubNavMenuItem>
  route?: string
  link?: string
  barend?: Array<ISubNavBtn>
}
