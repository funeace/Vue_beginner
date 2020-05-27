import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// index.htmlの#appを指定
new Vue({
  render: h => h(App),
}).$mount('#app')
