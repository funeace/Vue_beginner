// vue-routerを使うためのファイル
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersProfile from './views/UsersProfile.vue';
import UsersPosts from './views/UsersPosts.vue';
import HeaderHome from './views/HeaderHome.vue';
import HeaderUsers from './views/HeaderUsers.vue';

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
  }},
  // 動的なルーティングを作りたい場合は、:idみたいな感じでデータを呼べるようにする
  // props:trueとすることで、:idがpropsとして画面に渡される
  // childrenとすることでネストされた個要素を引っ張れる users/1/postsみたいな感じ
  {path: '/users/:id', components: {
      default: Users,
      header: HeaderUsers
  }, props: true, children:[
    {path: "posts",component: UsersPosts, props:true},
    // name属性を定義することで、{path: "profile", component: UsersProfile}を nameで呼べるようになる
    {path: "profile", component: UsersProfile, props: true, name: "users-id-profile"}
  ]}]
})
