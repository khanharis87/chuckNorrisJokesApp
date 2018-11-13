<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-md-6">
        <b-button @click="fetchJokes" type="submit">Fetch Jokes </b-button>
      </div>
      <div class="col-md-6">
        <b-button v-show="jokesFetched" :pressed.sync="toggleTimer" @click="addRandomJokesAsFavorites" variant="outline-success">Add a random joke to favorites after 5 secs</b-button>
      </div>
    </div>
    <div class="row">
      <TopTenJokes></TopTenJokes>
      <FavoriteTopTenJokes></FavoriteTopTenJokes>
    </div>
  </div>
</template>

<script>
import { setInterval } from "timers";
import TopTenJokes from "./TopTenJokesComponent.vue";
import FavoriteTopTenJokes from "./FavoriteTopTenJokesComponent.vue";

export default {
  name: "Home",
  components: {
    TopTenJokes,
    FavoriteTopTenJokes
  },
  data() {
    return {
      toggleTimer: false
    };
  },
  computed: {
    jokesFetched() {
      return this.$store.state.jokesFetched;
    },
    favoritedJokes() {
      return this.$store.state.favoriteJokes;
    }
  },
  methods: {
    isAlreadyFavorite(id) {
      return this.favoritedJokes.find(joke => joke.id === id);
    },
    addToFavorties(joke) {
      if (
        !this.isAlreadyFavorite(joke.id) &&
        this.favoritedJokes.length <= 10
      ) {
        this.$store.dispatch("addFavoriteJoke", joke);
      }
    },
    addRandomJokesAsFavorites() {
      setInterval(() => {
        if (this.toggleTimer) {
          const randomNumberFromZeroToEleven = Math.floor(Math.random() * 11);
          this.addToFavorties(
            this.$store.state.jokeList[randomNumberFromZeroToEleven]
          );
        }
      }, 5000);
    },
    fetchJokes() {
      this.$store.dispatch("fetchJokeList");
    }
  }
};
</script>

<style>
</style>
