<template>
  <div>
    <LikeHeader header-text="hello">
      <h2>みなさん</h2>
      <!-- v-slotは、templateに定義し、処理を中に入れる。第1引数に名前をつけ、子コンポーネント側で呼び出す
      第２引数 に任意の名前を入れれる。入れることで、子コンポーネントがv-bindでデータを送っていた場合、受け取ることができるようになる-->
      <template v-slot:title="slotProps">
        <h2>こんにちは</h2>
        {{slotProps.hoge.firstName}}
      </template>
      <!-- v-slot:は#で置き換えられる -->
      <template #number>
        <p>{{ number }}</p>
      </template>
      <h3>はじめまして</h3>
      <p>よろしくお願いします</p>
    </LikeHeader>
    <p>{{ number }}</p>
    <!-- v-on:my-clickはLikeNumberでemitしたevent -->
    <!-- $eventで -->
    <LikeNumber :number="number" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber :number="number" test-props="test"></LikeNumber>

  </div>
</template>

<script>
// ローカルで利用したい場合は、vueファイル側で
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return{
      number: 10
    }
  },
  components: {
    LikeHeader: LikeHeader
  }
}
</script>