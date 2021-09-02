import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: {
      inProgress: [],
      isFinished: []
    },
    showOverlay: false
  },
  mutations: {
    SET_ORDER_LIST (state, orders) {
      Object.keys(orders).forEach(item => {
        state.orderList[item] = orders[item]
      })
    },
    SET_OVERLAY (state, status) {
      state.showOverlay = status
    }
  },
  actions: {
    updateOrderList({ commit }, orders) {
      commit('SET_ORDER_LIST', orders)
    },
    updateOverlay ({ commit }, status) {
      commit('SET_OVERLAY', status)
    }
  }
})
