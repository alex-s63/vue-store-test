import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    searchField: ''
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    UPDATE_SEARCH_FIELD: (state, newField) => {
      state.searchField = newField
    }
  },
  actions: {
    async getProducts({commit}) {
      return axios({
        method: 'get',
        /** I saved json in the project, because CORS doesnt allow to fetch it from another domain */
        url: './products.json'
      }).then(response => {
        commit('SET_PRODUCTS', response.data)
      })
    },
    updateSearchField({commit}, newField) {
      commit('UPDATE_SEARCH_FIELD', newField)
    }
  },
  getters: {
    products: state => state.products,
    searchField: state => state.searchField
  }
})

export default store