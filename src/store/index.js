import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: sessionStorage
})

const URL = "http://api.icndb.com/jokes/random/10";

export default new Vuex.Store({
  state: {
    jokeList: [],
    favoriteJokes:[]
  },
  actions: {
      fetchJokeList({commit}) {
        axios.get(URL).then(response => commit('addJokes', response.data.value));
      },
      addFavoriteJoke({state, commit}, joke) {
          commit('addFavoriteJokes', joke)
      },
      removeFavoriteJoke({commit}, index) {
        commit('removeFavoriteJoke', index)
      }
  },
  mutations: {
    addJokes(state, jokes){
      state.jokeList = jokes
    },
    addFavoriteJokes(state, joke) {
      state.favoriteJokes.push(joke)
    },
    removeFavoriteJoke(state, index) {
      state.favoriteJokes.splice(index, 1);
    }
  },
  // getters: {
  //   jokeList() {
  //     return state.jokeList
  //   },
  //   favoriteJokes() {
  //     return state.favoriteJokes
  //   }
  // }
})