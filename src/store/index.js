import {createStore} from 'vuex'
import {v4 as uuid} from 'uuid'

export default createStore({
  state() {
    return {
      products: null,
      selectedProducts: [],
    }
  },
  getters: {
    products: state => state.products,
    selectedProducts: state => state.selectedProducts,
    sum: state => state.products.reduce((sum, cur) => sum + cur.price * cur.quantity, 0)
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
    addProduct(state, payload) {
      state.products.push({id: uuid(), ...payload})
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    setSelectedProducts(state, payload) {
      state.selectedProducts = payload
    },
    selectAll(state, payload) {
      if (payload) {
        state.selectedProducts = state.products.map(el => el.id)
      } else {
        state.selectedProducts = []
      }
    },
    deleteProducts(state) {
      const ids = state.selectedProducts
      state.products = state.products.filter(el => !ids.includes(el.id))
      state.selectedProducts = []
      localStorage.setItem('products', JSON.stringify(state.products))
    }
  },
  actions: {
    loadProducts({ commit }) {
      const products = JSON.parse(localStorage.getItem('products')) || []
      commit('setProducts', products)
    }
  }
})