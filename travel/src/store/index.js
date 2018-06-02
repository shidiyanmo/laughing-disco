import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})

// let defaultCity = '上海'
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {}

// export default new Vuex.Store({
//   state: {
//     city: defaultCity
//   },
// actions: { //异步
//   changeCity (ctx, city) { // ctx上下文
//     ctx.commit('changeCity', city)
//   }
// },
//   mutations: {
//     changeCity (state, city) {
//       state.city = city
//       try {
//         localStorage.city = city
//       } catch (e) {}
//     }
//   },
//   getters: {
//     doubleCity (state) {
//       return state.city + ' ' + state.city
//     }
//   }
// })
