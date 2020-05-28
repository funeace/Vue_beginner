<template>
  <!-- templateの要素は１個じゃないといけない -->
  <!-- divとかでグループ化してあげればいい -->
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  // export defaultの中にコンポーネントオプションを設置する
  export default{
    // propsはオブジェクトで指定することができる
    // props: ["number"],
    // 以下のようにす受け取る値をオブジェクトにすることで、受け取ったデータのバリデーションをかけることができる
    // 検証ツールで確認できる
    // propsを複数つけるときはカンマ区切りで追加すればいい
    props:{
      number: {
        type: Number,
        default: function(){
          return {
            number: 5
          }
        }
      },
      testProps: {
        type: String
      }
    },
    computed: {
      halfNumber: function(){
        return this.number / 2
      }
    },
    methods: {
      increment: function(){
        // 親要素にデータを渡すためのメソッド
        // $emit()の中に持たせる引数は２つ
        // 1つ目は、名前 2つ目に 処理を入れる
        this.$emit("my-click", this.number + 1)
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