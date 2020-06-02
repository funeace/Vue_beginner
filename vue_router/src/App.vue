<template>
  <!-- router-viewとすることで、routerの中身を表示することができるようになる
  動的コンポーネントみたいな扱いをする -->
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <router-view name="header"></router-view>
    <!-- router vueにはtransitionをを付けれる -->
    <transition name="fade" mode="out-in">
          <router-view></router-view>
    </transition>
  </div>
</template>

<style>
  .link{
    margin-right: 10px;
  }
  .link--active {
    font-size: 20px;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: 0.5s;
  }
</style>