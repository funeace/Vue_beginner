<template>
<!-- 受け口をslotにすることで、親要素が送ったhtmlのテンプレートを受信できる 
    1つの処理内でslotは複数おける-->
  <div>
    <!-- 子から親にデータを渡す場合、スロットに新しい属性を付与し、 -->
    <slot name="title" v-bind:hoge="user">
      <!-- slotのコンテンツがないときに発火される処理はフォールバックコンテンツと言われる -->
      <h2>slotのコンテンツがないときに発火される</h2>
    </slot>
    <!-- 何も名前がないスロットはデフォルトスロットとよばれる。templateに囲われてない部分が全て呼ばれる -->
    <slot></slot>
    <hr>
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald"
      }
    }
  }
}
</script>