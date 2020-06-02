import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// store.js側で関数を定義できる
export default new Vuex.Store({
  state: {
    count: 2,
    message: ""
  },
  // データの追跡性をあげるために、mutationのみをつかってデータの更新を行う
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
    message: state => state.message 
  },
  mutations: {
    // mutationの第１引数はstate 第２引数はなんでもいいが、今回は増加数
    increment(state, number){
      state.count += number
    },
    decrement(state, number){
      state.count -= number
    },
    updateMessage(state, newMessage) {
      state.message = newMessage
    }
  },
  // 非同期で処理を行う場合には、actionsを使う
  actions: {
    increment(context, number){
      context.commit('increment',number)
    },
    decrement(context, number){
      context.commit('decrement', number)
    },
    updateMessage({commit}, newMessage){
      commit("updateMessage", newMessage)
    }
  }
})

