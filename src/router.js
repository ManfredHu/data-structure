import Vue from 'vue'
import Router from 'vue-router'
import config from './config'
Vue.use(Router)

const viewsList = config.algorithmType

const routes = []

// dynamic routers
viewsList.forEach(item => {
  routes.push({
    path: `/${item}`,
    component: () => {
      return import(`./views/${item[0].toUpperCase() + item.slice(1)}.vue`)
    }
  })
})
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.afterEach((to, from) => {
//   if (to.fullPath === '/' && from.fullPath === '/') {
//     // to.fullPath = '/index'
//     debugger
//   }
// })
export default router
