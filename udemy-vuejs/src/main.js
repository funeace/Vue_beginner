import Vue from 'vue'
import App from './App.vue'
// 作成したコンポーネントはmain.jsにインポートすることでどこからでも利用できるようになる(グローバル)
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
// カスタムディレクトリ、第１引数に名前、第２引数にフック関数。全てのフック関数に引数を取ることができるが、基本的に
// el,binding,v-nodeとする.
// 使うのは基本的にbindとupdate
// bindとupdateのみの場合は、省略基本が使える(function(el,binding){}とするだけでいい)
// 修飾子が選択されているかの判定は、if文で行う
Vue.directive("border", function(el, binding){
  // elはそのカスタムディレクトリが紐づく要素(今回はpタグ)
  // el.style.border = "solid black 2px"
  // bindingは渡されたデータを受け取る機能
  el.style.borderWidth = binding.value.width
  el.style.borderColor = binding.value.color
  // 引数を受け取る場合(argは引数を受け取る)
  el.style.borderStyle = binding.arg
  // 修飾子の判定はbinding.modifiers+ 修飾子
  if(binding.modifiers.round) {
    el.style.borderRadius = "0.5rem"
  }
  if(binding.modifiers.shadow) {
    el.style.boxShadow = "0 0 0 1px"
  }

})

// インポートしたデータをLikeNumberで呼び出せるように定義
Vue.component('LikeNumber',LikeNumber)

// index.htmlの#appを指定
new Vue({
  render: h => h(App),
}).$mount('#app')
