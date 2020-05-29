<template>
  <div>
    <LikeHeader>
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
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