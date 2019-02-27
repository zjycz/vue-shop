import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import news from './pages/news'
import newsInfo from './pages/newsInfo'

export default new Router({
  routes: [
    { path: '/news', component: news },
    { path: '/newsInfo/:id', component: newsInfo }
  ]
})
