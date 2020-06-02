<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <!-- 双方向バインディング -->
    <p><input type="text" v-model="message"></p>
  </div>
</template>
<script>
// storeで定義した要素を読み込んでくれる
import {mapGetters} from "vuex"

export default {
  // computedの中にmapgetters以外の物を呼び出したい場合は、...をつける(スプレッド)
  computed: {...mapGetters(["doubleCount", "tripleCount"]), 
    message: {
      get() {
        return this.$store.getters.message
      },
      set(value) {
        this.$store.dispatch("updateMessage", value)
      }
    }
  },
  methods: {
    toUsers() {
      // this.$routerでルーターにアクセスする
      // link先に飛びたい場合は、
      // paramsを使う時は、必ずname属性を使わないといけない
      this.$router.push({
        name: "users-id-profile",
        params: {id: 1}
      })
    }
  }
}
</script>