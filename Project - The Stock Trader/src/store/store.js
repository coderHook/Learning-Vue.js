import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

import * as actions from './actions';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
      logged: false,
      list: []
  },
  actions,
  modules: {
    stocks,
    portfolio
  },
  mutations: {
    login: state => {
      state.logged = true;
      state.list.push('item')
    },
    logout: state => {
      state.logged = false;
    }
  }
})

window.store = store;
