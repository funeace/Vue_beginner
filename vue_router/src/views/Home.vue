<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
  </div>
</template>
<script>
export default {
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