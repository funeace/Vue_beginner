<template>
  <div>
    <h3>User</h3>
    <!-- router-linkだとcreateとかdestroyとかのライフサイクルフックが実行されない
    ため、watchで見る必要がある -->
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <!-- $routeとすることで、$routeで自分のurlを拾えるイメージでいいかも
     -->
    <h1>User No. {{ id }}</h1>
    <!-- toはv-bindを使うと動的にかける -->
    <!-- 次のユーザみたいなリンクは id + 1 でやる -->
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile' ">次のユーザー</router-link>
    <!-- name属性を指定して、routerjsのnameを呼び、paramsで id + 1の値を送る -->
    <router-link
      id="next-user"
      :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' }"
    >次のユーザー</router-link>
    <router-view></router-view>
    <div style="height:500px;"></div>    
    <router-view name="header"></router-view>


  </div>
</template>

<script>
  export default{
    // 親要素からpropsで飛んできたデータを拾える
    props: ["id"],

    // コンポーネント内でナビゲーションガードを行う
    beforeRouteEnter(to, from, next){
      // インスタンスが作成される前に実行される。thisは使えない
      // しかし、next内で 関数を作成すればthisを擬似的に使えるようになる
      next(vm => {
        console.log(vm.id)
      })
    },

    // 同一コンポーネント内で処理された時に発火する
    beforeRouteUpdate(to, from, next){
      next()
    },

    // 別コンポーネントに移動する時に発火される
    // よく使われるパターンとして、画面遷移時の確認など
    // next falseとすると移動しない
    beforeRouteLeave(to, from, next){
      const isLeave = window.confirm("本当にこのページを離れますか？")
      if (isLeave) {
        next()
      } else {
        next(false)
      }
    },

  }
</script>