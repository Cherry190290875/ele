import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/home.vue'
import City from '../page/city/city.vue'
import Detail from '../page/detail/detail.vue'
import Food from '../page/food/food.vue'
import Shop from '../page/shop/shop.vue'
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
    },
    {
      path: '/food',
      name: Food,
      component: Food
    },
    {
      path:'/shop',
      name: Shop,
      component: Shop
    }
  ]
})
