import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import information from '@/page/information'
import service from '@/page/service'
import contact from '@/page/contact'
import detail from '@/page/detail'
import article from '@/page/article'
import biz from '@/page/biz'
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: index
      },
      {
        path: '/information',
        name: 'information',
        component: information
      },
      {
        path: '/service',
        name: 'service',
        component: service
      },
      {
        path: '/contact',
        name: 'contact',
        component: contact
      },
      {
        path: '/detail/:type/:id',
        name: 'detail',
        component: detail
      },
      {
        path: '/article/:id',
        name: 'article',
        component: article
      },
      {
        path: '/biz/:id',
        name: 'biz',
        component: biz
      }
    ]
  })
}

