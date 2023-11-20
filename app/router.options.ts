import routes from '@@/router'
import type { RouterConfig } from 'nuxt/schema'
// https://router.vuejs.org/zh/api/interfaces/RouterOptions.html#Properties-history
export default <RouterConfig>{
    routes: (_routes) => routes
}