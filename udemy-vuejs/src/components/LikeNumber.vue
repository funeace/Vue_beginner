<template>
  <!-- templateの要素は１個じゃないといけない -->
  <!-- divとかでグループ化してあげればいい -->
  <div>
    <p>いいね({{number}})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  // export defaultの中にコンポーネントオプションを設置する
  export default{
    data: function() {
      return {
        number: 5
      }
    },
    methods: {
      increment: function(){
        this.number += 1
      }
    }
  }
</script>
// 普通に書くと、style要素は全てのタグに適応されてしまう。
// 特定の部分だけ CSSを適応させるには、scopedを付与する
<style scoped>
  div{
    border: 1px solid blue;
  }
</style>