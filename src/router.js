import Vue from 'vue'
import Router from 'vue-router'
import config from './config'
Vue.use(Router)

const viewsList = config.algorithmType

const routes = [{ path: '/', redirect: '/index' }]

// dynamic routers
viewsList.forEach(item => {
  routes.push({
    path: `/${item}`,
    component: () => {
      return import(`./views/${item[0].toUpperCase() + item.slice(1)}.vue`)
    }
  })
})
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
