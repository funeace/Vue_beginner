<template>
  <nav>
    <h2>Users</h2>
    <!-- railsでいうlink_to -->
    <!-- tag="エレメント名"で指定した要素になる -->
    <!-- active-classは要素がactiveになったときクラスが付与される -->
    <!-- exactはurlとto=""の値が完全一致したら発火するようにできる -->
    <router-link to="/" active-class="link--active" exact tag="a" class="link">Home</router-link>
    <router-link to="/users" active-class="link--active" exact tag="a" class="link">Users</router-link>
  </nav>
</template>