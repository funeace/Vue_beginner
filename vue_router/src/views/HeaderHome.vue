<template>
  <nav>
    <h2>Homeaaaaa</h2>
    <!-- railsでいうlink_to -->
    <!-- tag="エレメント名"で指定した要素になる -->
    <!-- active-classは要素がactiveになったときクラスが付与される -->
    <!-- exactはurlとto=""の値が完全一致したら発火するようにできる -->
    <router-link to="/" active-class="link--active" exact tag="a" class="link">Home</router-link>
    <router-link to="/users/1" active-class="link--active" exact tag="a" class="link">Users</router-link>
    <button @click="increment(2)"> +1</button>
    <button @click="decrement(3)"> -1</button>
  </nav>
</template>

<script>
import {mapActions} from 'vuex'
// import {mapMutations} from 'vuex'
export default {
    // methods: {...mapMutations(["increment","decrement"])}
    methods:{
      ...mapActions(["increment","decrement"])
    }
}
</script>