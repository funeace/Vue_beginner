<template>
<div>
<!-- カスタムディレクトリ(v-border)を定義したら,main.jsにも定義する必要がある
複数要素を送る必要がある場合は、オブジェクトとして送る
引数を渡す場合は、普通に渡す
修飾子においても普通に渡す。複数においても、.区切りで送る
-->
  <p v-border:dotted.round.shadow ="{width: '5px',color:'red'}">Home</p>

<!-- 以下フィルターの練習 
フィルターはmain.jsで定義する
呼び出し方は、 {{data名 | フィルター名}}で呼び出せる-
{{data名 | フィルター名 | フィルター名}}とすることで、データを連結できる -->

  <h2>{{ title | lowerCase | upperCase }}</h2>
  <h2>{{ subTitle | lowerCase | upperCase }}</h2>
  <CountNumber></CountNumber>
</div>
</template>
<script>
import CountNumber from "./CountNumber.vue"
export default {
  data(){
    return{
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is great City"
    }
  },
  // ローカルでfilterを定義するほうほう
  filters:{
    lowerCase: function(value){
      return value.toLowerCase()
    }
  },
  components:{
    CountNumber
  }
}
</script>