export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: function (resolve) {
        require([ './components/home-view.vue' ], resolve)
      }
    },
    '/login': {
      name: 'login',
      component: function (resolve) {
        require([ './components/login-view.vue' ], resolve)
      }
    }
  })

}
