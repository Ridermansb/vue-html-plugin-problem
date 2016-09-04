import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  history: false,
  linkActiveClass: 'active'
})
route(router)

const App = Vue.extend(require('./app.vue'))

router.start(App, '#app')
