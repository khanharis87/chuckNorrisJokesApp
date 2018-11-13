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
  plugins: [vuexPersist.plugin],
  state: {
    jokesFetched: false,
    jokeList: [],
    favoriteJokes:[]
  },
  mutations: {
    addJokes(state, jokes){
      state.jokeList = jokes
      state.jokesFetched = true
    },
    addFavoriteJokes(state, joke) {
      state.favoriteJokes.push(joke)
    },
    removeFavoriteJoke(state, index) {
      state.favoriteJokes.splice(index, 1);
    }
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
  }
})