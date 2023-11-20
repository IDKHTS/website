import axios from 'axios'

const httpInstance = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: 'https://snapmaker.oss-cn-beijing.aliyuncs.com/snapmaker.cn',
  timeout: 6000,
  // headers: {'X-Custom-Header': 'foobar'}
})

if (process.browser) {
  httpInstance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (!navigator.onLine) {
        console.error('network offline')
      }
      return Promise.reject(error)
    }
  )
}

async function getLevel() {
  // return httpInstance.get('/level')
  return httpInstance.get(`/content-data/level.json`)
}

async function getProductionSection(id: any) {
  const levelRsp = await getLevel()
  const level = levelRsp.data

  for (let i = 0; i < level.length; i++) {
    const currCategory = level[i]
    const targetSection = currCategory.sections.find(
      (v: { id: number }) => v.id === id - 0
    )
    if (targetSection) return targetSection
  }
}

async function getSection(id: any) {
  const levelRsp = await getLevel()
  const level = levelRsp.data

  for (let i = 0; i < level.length; i++) {
    const currCategory = level[i]
    let targetSection = currCategory.sections.find((v: any) => v.id === id - 0)
    if (targetSection) return targetSection
    currCategory.sections.forEach((element: any) => {
      if (!element.childSections) return
      const sectionTypes = Object.keys(element.childSections)
      sectionTypes.forEach((sectionType) => {
        element.childSections[sectionType].forEach((el: any) => {
          if (el.id === id - 0) targetSection = el
        })
      })
    })
    if (targetSection) return targetSection
  }
}

async function getAritcle(id: string | number) {
  // return httpInstance.get('/article?id=' + id)
  return httpInstance.get(`/content-data/articles/${id}.json`)
}

async function getDC() {
  // return httpInstance.get('/dynamicContent')
  return httpInstance.get(`/content-data/dynamic-content.json`)
}

async function getResources(id: number) {
  return httpInstance.get(`/products-resources-configurations/${id}.json`)
}

/**
 * @description
 * @params type feild value: firmwareType.snapmaker | firmwareType.j1 | firmwareType.artisan
 */
async function getFirewareResources(type: string) {
  return httpInstance.get(`https://api.snapmaker.com${type}`)
}

async function getInstallers() {
  return httpInstance.get(`https://api.snapmaker.com/luban-installers`)
}

async function getCuraPlugins() {
  return httpInstance.get(`https://api.snapmaker.com/cura-plugins`)
}

const apiUrl = 'https://api.snapmaker.com/org-community'
// const apiUrl = 'https://test.api.snapmaker.com/org-community'
// const apiUrl = 'http://localhost:8008/org-community'
// const apiUrl = 'http://test.snapmaker.com:8008/org-community'
async function getContests() {
  return httpInstance.get(`${apiUrl}/contests`)
}

async function getStarmakers() {
  const res = await httpInstance.get(`${apiUrl}/starmakers`)
  res.data.map((item: { link: string }) => {
    item.link = item.link.replace(
      '//blog.snapmaker.com/',
      '//snapmaker.com/blog/'
    )
    return item
  })
  return res
}
async function getLastBlog(num: number) {
  const res = await httpInstance.get(
    `https://snapmaker.com/blog/wp-json/wp/v2/posts?per_page=${num}`,
    { timeout: 60 * 1000 }
  )
  res.data.map((item: { link: string }) => {
    item.link = item.link.replace(
      '//blog.snapmaker.com/',
      '//snapmaker.com/blog/'
    )
    return item
  })
  return res
}

// async function getLastThreeBlog () {
//   return httpInstance.get(`https://blog.snapmaker.com/wp-json/wp/v2/posts?per_page=3`)
// }

async function getLastForumTopics() {
  return httpInstance.get(`${apiUrl}/forum-topics`)
}

async function getCategoriesMap() {
  // const cacheKey = 'categories_map'
  // if (!localStorage.getItem(cacheKey)) {
  //   const resp = await httpInstance.get(`https://blog.snapmaker.com/wp-json/wp/v2/categories`)
  //   localStorage.setItem(cacheKey, JSON.stringify(resp.data))
  // }
  return httpInstance.get(`https://snapmaker.com/blog/wp-json/wp/v2/categories`)
}

async function getHomeCommnunityConfig() {
  // const cnPrefix =
  const enPrefix = `https://ditfjx9w4x3vl.cloudfront.net/config`
  return httpInstance.get(`${enPrefix}/home-community.json`)
}

export {
  getDC,
  getResources,
  getLevel,
  getProductionSection,
  getSection,
  getInstallers,
  getAritcle,
  getFirewareResources,
  getContests,
  getStarmakers,
  getLastBlog,
  getCategoriesMap,
  // getLastThreeBlog,
  getLastForumTopics,
  getHomeCommnunityConfig,
  getCuraPlugins,
}
