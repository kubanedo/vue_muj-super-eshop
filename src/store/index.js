import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsInCart: {
    }
  },
  getters: {
    countProducts (state) {
      return Object.keys(state.itemsInCart).length
    },
    countItems (state) {
      let result = 0
      Object.values(state.itemsInCart).forEach((value) => result += value)
      return result
    }    
  },
  mutations: {
    setCartItemQuantity (state, {productId, quantity}) {
      console.log(quantity);
      Vue.set(state.itemsInCart, productId, quantity)
    }    
  },
  actions: {
  },
  modules: {
  }
})
