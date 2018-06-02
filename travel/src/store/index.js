import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  // actions: { //异步
  //   changeCity (ctx, city) { // ctx上下文
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: { // 同步
    changeCity (state, city) {
      state.city = city
    }
  }
})
