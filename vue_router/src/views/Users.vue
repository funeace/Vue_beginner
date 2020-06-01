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
    <router-link :to="{ name: 'users-id-profile', params: {id: Number(id) + 1}, query: {lang:'ja', page: 2} }">次のユーザー</router-link>
    <router-view></router-view>

    <router-view name="header"></router-view>


  </div>
</template>

<script>
  export default{
    // 親要素からpropsで飛んできたデータを拾える
    props: ["id"]
  }
</script>