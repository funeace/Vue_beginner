// vue-routerを使うためのファイル
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersProfile from './views/UsersProfile.vue';
import UsersPosts from './views/UsersPosts.vue';
import HeaderHome from './views/HeaderHome.vue';
import HeaderUsers from './views/HeaderUsers.vue';

// webpackで呼び出す処理
// 必要になったタイミングで呼び出されるようになる
// import(/*webpackChunkName::"任意の名前"*/ ,"./views/Home.vue");とすることで名前をつけられる
// vuecli3では、分割して全てのファイルを呼び出す。アイドルタイム中にこっそり動いて、キャッシュに保管される
// const Home = () => import('./views/Home.vue');
// const Users = () => import('./views/Users.vue');
// const UsersProfile = () => import('./views/UsersProfile.vue');
// const UsersPosts = () => import('./views/UsersPosts.vue');
// const HeaderHome = () => import('./views/HeaderHome.vue');
// const HeaderUsers = () => import('./views/HeaderUsers.vue');

// Vue.useとすることで公式で提供しているプラグインを利用できるようになる
Vue.use(Router)

// ここでルーティングの設定を行う
export default new Router({
  // mode:historyとすることでurlの#が消せる。
  mode: "history",
  // componentをcomponentsとすることで、オブジェクトで呼び出すことができるようになる
  routes: [{path: '/', components: {
    default: Home,
    header: HeaderHome
  },
  // 処理を行う前に実行したい場合の処理（ナビゲーションガード)

  beforeEach(to, from, next){
    next()
  }
},
  // 動的なルーティングを作りたい場合は、:idみたいな感じでデータを呼べるようにする
  // props:trueとすることで、:idがpropsとして画面に渡される
  // childrenとすることでネストされた個要素を引っ張れる users/1/postsみたいな感じ
  {path: '/users/:id', components: {
      default: Users,
      header: HeaderUsers
      // 名前付きviewを使う時は、オブジェクトにし、それぞれの要素で設定できる.defaultとすると、定義してないものは全てfalse
  }, props: {
    default: true,
    header: false
  }, children:[
    {path: "posts",component: UsersPosts, props:true},
    // name属性を定義することで、{path: "profile", component: UsersProfile}を nameで呼べるようになる
    {path: "profile", component: UsersProfile, props: true, name: "users-id-profile"}
  ]}, {
    // リダイレクトの指定
    // オブジェクトも指定できる
    // *と書くと全部指定できる.上でマッチしなかったものが全てリダイレクトされ user* user関連
    path: '*', redirect: '/'
  }
],
// 画面スクロールを自動的に行ってくれる機能
scrollBehavior(to, from, savedPosition) {
  // パターン１ xとyを直接指定する
  // return{x: 0, y: 100}
  // パターン２ selectorを使う
  // return {
  //   selector: '#next-user'
  // }
  if (savedPosition){
    return savedPosition
  }
  if (to.hash){
    return {
      selector: to.hash
    }
  }
  // どちらもなかった場合、x;0y;0に戻る
  return {x: 0, y: 0}
  }
})
