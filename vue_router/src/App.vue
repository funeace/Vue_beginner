<template>
  <!-- router-viewとすることで、routerの中身を表示することができるようになる
  動的コンポーネントみたいな扱いをする -->
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<style>
  .link{
    margin-right: 10px;
  }
  .link--active {
    font-size: 20px;
  }
</style>