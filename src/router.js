import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const viewsList = ['index', 'findAppearMax', 'quickSort']

const routes = [{
  path: '/',
  component: () => import('./views/Index.vue')
}]

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
