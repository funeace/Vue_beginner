<template>
  <div>
    <!-- カスタムディレクティブの勉強 -->
    <Home>

    </Home>


    <div>
      <EventTitle v-model="eventData.title"></EventTitle>
      <EventTitle v-model="eventData.title"></EventTitle>

      <p>開催場所</p>
      <select v-model="eventData.locations">
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>


    <!-- radioボタンの練習 -->
    <div>
      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>

      <input type="radio" id="payed" value="有料" v-model="eventData.price">
      <label for="payed">有料</label>
    </div>


    <div>
      <!-- チェックボックスの練習(複数)
      配列にすればデータを受け取れる -->
      <p>参加条件</p>
      <input type="checkbox" id="10" value="１０代" v-model="eventData.target">
      <label for="10">10代</label>

      <input type="checkbox" id="20" value="２０代" v-model="eventData.target">
      <label for="10">20代</label>

      <input type="checkbox" id="30" value="３０代" v-model="eventData.target">
      <label for="10">30代</label>

      <p>{{ eventData.target}}</p>
    </div>
    <div>
      <!-- チェックボックスの練習(単体) -->
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate}}</p>
    </div>

      <label for="detail">複数行のv-model練習</label>
      <textarea id="detail" rows="10" cols="30" v-model="eventData.detail">
      </textarea>
      <pre>{{ eventData.detail }}</pre>

      <label for="host">trim修飾子の練習</label>
      <input type="text" id="host" v-model.number="eventData.host">
      <pre>{{eventData.host}}</pre>

      <!--  -->
      <label for="maxNumber">max修飾子の練習 .numberをつけなければstringで追加されてしまう</label>
      <input type="number" id="maxNumber" v-model.number="eventData.maxNumber">
      <p>{{ typeof eventData.maxNumber}}</p>


      <label for="title">lazy修飾子は、フォーカスが外れたタイミングで動く</label>
      <input type="text" id="title" v-model.lazy="lazyTest.title">
      <p>{{ lazyTest.title}}</p>

    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input type="text" id="title" v-model="eventData.title">
      <p>{{eventData.title}}</p>
    </div>
    <!-- 動的コンポーネント -->
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <!--  -->
    <About v-if="currentComponent === 'About'"></About>
    <Home v-else></Home>
    
    <!--  -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>

    <LikeHeader header-text="hello">
      <h2>みなさん</h2>
      <!-- v-slotは、templateに定義し、処理を中に入れる。第1引数に名前をつけ、子コンポーネント側で呼び出す
      第２引数 に任意の名前を入れれる。入れることで、子コンポーネントがv-bindでデータを送っていた場合、受け取ることができるようになる-->
      <template v-slot:title="slotProps">
        <h2>こんにちは</h2>
        {{slotProps.hoge.firstName}}
      </template>
      <!-- v-slot:は#で置き換えられる -->
      <template #number>
        <p>{{ number }}</p>
      </template>
      <h3>はじめまして</h3>
      <p>よろしくお願いします</p>
    </LikeHeader>
    <p>{{ number }}</p>
    <!-- v-on:my-clickはLikeNumberでemitしたevent -->
    <!-- $eventで -->
    <LikeNumber :number="number" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber :number="number" test-props="test"></LikeNumber>

  </div>
</template>

<script>
// ローカルで利用したい場合は、vueファイル側で
import LikeHeader from "./components/LikeHeader.vue"
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import EventTitle from "./components/EventTitle.vue"

export default {
  data() {
    return{
      number: 10,
      currentComponent: "Home",
      eventData: {
        title: "タイトル",
        maxNumber: 0,
        host: "太郎",
        detail: "Detailの練習です",
        isPrivate: false,
        // チェックボックス複数の場合は配列になる
        target: [],
        price: "無料",
        locations: ["東京","大阪","名古屋"],
        location: "東京"
      },
      props: ["value"],
      lazyTest: {
        title: "lazyテスト"
      }
    }
  },
  components: {
    LikeHeader: LikeHeader,
    About,
    Home,
    EventTitle
  }
}
</script>