import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

// 遷移前に特定の処理を行う処理 引数は３つ($routeの状態)
router.beforeEach((from, to, next) => {
  // 基本的にはif分と組み合わせる
  if( to.path === "/users/1"){
    next("/")
  }
  next()
})

new Vue({
  // routerをnew Vueの中でよんであげることによってrouterを呼び出せる
  router,
  render: h => h(App),
}).$mount('#app')
