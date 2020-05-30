<template>
<!-- カスタムディレクトリ(v-border)を定義したら,main.jsにも定義する必要がある
複数要素を送る必要がある場合は、オブジェクトとして送る
引数を渡す場合は、普通に渡す
修飾子においても普通に渡す。複数においても、.区切りで送る
-->
  <p v-border:dotted.round.shadow ="{width: '5px',color:'red'}">Home</p>
</template>
<script>
export default {
  // ローカルにカスタムディレクトリを設置する場合は、
}
</script>