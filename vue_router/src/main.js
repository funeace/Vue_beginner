import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

new Vue({
  // routerをnew Vueの中でよんであげることによってrouterを呼び出せる
  router,
  render: h => h(App),
}).$mount('#app')
