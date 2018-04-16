import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/home.vue'
import City from '../page/city/city.vue'
import Detail from '../page/detail/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: City,
      component: City
    },
    {
      path: '/detail',
      name: Detail,
      component: Detail
    }
  ]
})
