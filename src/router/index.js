import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 重写路由的push方法

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
      path: '/overView',
      name: 'OverView',
      redirect: '/overView/catalog',
      component: () => import(/* webpackChunkName: "about" */ '../views/OverView.vue'),
      children: [
        {
          path: '/overView/catalog',
          name: 'catalog',
          component: resolve => require(['../views/overView/catalog'], resolve),
        },
        {
          path: '/overView/yongQingFang',
          name: 'yongQingFang',
          component: resolve => require(['../views/overView/yongQingFang'], resolve),
        },
        {
          path: '/overView/enNingRoad',
          name: 'enNingRoad',
          component: resolve => require(['../views/overView/enNingRoad'], resolve),
        },
        {
          path: '/overView/guangdongOperaMuseum',
          name: 'guangdongOperaMuseum',
          component: resolve => require(['../views/overView/guangdongOperaMuseum'], resolve),
        },
        {
          path: '/overView/pengLaiRoad',
          name: 'pengLaiRoad',
          component: resolve => require(['../views/overView/pengLaiRoad'], resolve),
        },
        {
          path: '/overView/pengQingStreet',
          name: 'pengQingStreet',
          component: resolve => require(['../views/overView/pengQingStreet'], resolve),
        },
      ]
  }, {
      path: '/yongQingFang',
      name: 'yongQingFang',
      redirect: '/yongQingFang/catalog',
      component: () => import(/* webpackChunkName: "about" */ '../views/YongQingFang.vue'),
      children: [
        {
          path: '/yongQingFang/catalog',
          name: 'catalog',
          component: resolve => require(['../views/yongQingFang/catalog'], resolve),
        },
        {
          path: '/yongQingFang/daTaijie',
          name: 'daTaiJie',
          component: resolve => require(['../views/yongQingFang/daTaiJie'], resolve),
        },
        {
          path: '/yongQingFang/liuKeLa',
          name: 'liuKeLa',
          component: resolve => require(['../views/yongQingFang/liuKeLa'], resolve),
        },
        {
          path: '/yongQingFang/LXLResidence',
          name: 'LXLResidence',
          component: resolve => require(['../views/yongQingFang/LXLResidence'], resolve),
        },
        {
          path: '/yongQingFang/sanDiaoExhibition',
          name: 'sanDiaoExhibition',
          component: resolve => require(['../views/yongQingFang/sanDiaoExhibition'], resolve),
        },
        {
          path: '/yongQingFang/jiuWuCang',
          name: 'jiuWuCang',
          component: resolve => require(['../views/yongQingFang/jiuWuCang'], resolve),
        },
        {
          path: '/yongQingFang/yongQingFangEntry',
          name: 'yongQingFangEntry',
          component: resolve => require(['../views/yongQingFang/yongQingFangEntry'], resolve),
        },
        {
          path: '/yongQingFang/catCafe',
          name: 'catCafe',
          component: resolve => require(['../views/yongQingFang/catCafe'], resolve),
        },
        {
          path: '/yongQingFang/yongQingYiXiang',
          name: 'yongQingYiXiang',
          component: resolve => require(['../views/yongQingFang/yongQingYiXiang'], resolve),
        },
        {
          path: '/yongQingFang/lianLangExhibition',
          name: 'lianLangExhibition',
          component: resolve => require(['../views/yongQingFang/lianLangExhibition'], resolve),
        },
        {
          path: '/yongQingFang/yongQingErXiang',
          name: 'yongQingErXiang',
          component: resolve => require(['../views/yongQingFang/yongQingErXiang'], resolve),
        },
      ]
  }
]

const router = new VueRouter({
  routes
})

export default router
