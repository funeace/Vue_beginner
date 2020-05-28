import Vue from 'vue'
import App from './App.vue'
// 作成したコンポーネントはmain.jsにインポートすることでどこからでも利用できるようになる(グローバル)
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false

// インポートしたデータをLikeNumberで呼び出せるように定義
Vue.component('LikeNumber',LikeNumber)

// index.htmlの#appを指定
new Vue({
  render: h => h(App),
}).$mount('#app')
