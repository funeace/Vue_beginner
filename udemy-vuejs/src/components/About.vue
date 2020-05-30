<template>
  <div>
    <p>About</p>
    <!-- 動的コンポーネントでは、inputなど、変更したデータは保持されない(切り替えると毎回destroyedされる) 
        値を保持しておきたい場合は、App側でkeep-alive要素を使う。keep-aliveを使うと、ライフサイクルフックが追加される(activated,deactivated)-->
    <input>
  </div>
</template>
<script>
export default {
    deactivated(){
      console.log("deactivated")
    },
    activated(){
      console.log("activated")
    }
}
</script>