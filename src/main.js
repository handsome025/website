// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMeta from 'vue-meta'
import 'babel-polyfill'
import App from './App'

import { createRouter } from './router/index.js'
import { createStore } from './store'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './styles/animate.min.css'
import './styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
// process.browser
Vue.use(VueMeta)

// console.info(111,process.browser)
Vue.use(VueAwesomeSwiper)
if (process.browser) { // in Nuxt.js use `Process. BROWSER_BUILD`
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}

Vue.mixin({
  beforeMount () {
    const { asyncData } = this.$options
    // console.info(98989898998989,context)
    if (asyncData) {
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route,
        // id: this.$route.params.id,
      },this.$route.params.id)
    }
  },
  filters: {
    formatTime: function (date) {
      const dateTime = Date.parse(date.replace(/-/gi,"/"))
      const minute = 1000 * 60
      const hour = minute * 60
      const day = hour * 24
      const halfamonth = day * 15
      const month = day * 30
      const year = month * 12
      const now = new Date().getTime()
      const diffValue = now - dateTime
      if(diffValue < 0) return ''
      const yearC = diffValue/year
      const monthC = diffValue/month
      const weekC = diffValue/(7*day)
      const dayC = diffValue/day
      const hourC = diffValue/hour
      const minC = diffValue/minute
      if(yearC >= 1){
        return parseInt(yearC) + "年前"
      }else if(monthC >= 1){
        return parseInt(monthC) + "个月前"
      }else if(weekC >= 1){
        return parseInt(weekC) + "周前"
      }else if(dayC >= 1){
        return parseInt(dayC) + "天前"
      }else if(hourC >= 1){
        return parseInt(hourC) + "小时前"
      }else if(minC >= 1){
        return parseInt(minC) + "分钟前"
      }
      return "刚刚"
    }
  }
})
/* 自定义一个全局过滤器(进行时间转换) */
// Vue.filter('formatTime', function (value) {
// })
// const formatTime = Vue.filter("formatTime")

export function createApp () {
  const router = createRouter()
  const store = createStore()
 

  Vue.use(ElementUI)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
