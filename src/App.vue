<template>
  <div class="container">
      <ul class="list-unstyled">
        <li 
         v-for="item in jokeList"
         :key="item.id"
         >
            {{item.joke}}
            <a href="#" v-on:click="addToFavorties(item)">
                <i  class="fa fa-heart"></i>
            </a>
        </li>
      </ul>
    <b-button @click="fetchJokes" type="submit">Fetch Jokes </b-button>
    <b-button :pressed.sync="toggleTimer" @click="addRandomJokesAsFavorites" variant="outline-success">Add a random joke to favorites after 5 secs</b-button>
     <ul>
        <li v-for="(item, index) in favoritedJokes" :key="item.id">
            {{item.joke}}
            <a href="#" v-on:click="removeFromFavorites(index)">
              <i  class="fa fa-trash"></i>
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios";
import { setTimeout, setInterval } from "timers";

export default {
  name: "App",
  data() {
    return {
      toggleTimer: false
    };
  },
  computed: {
    isTimerOn() {
      return this.$store.state.isTimerOn;
    },
    jokeList() {
      return this.$store.state.jokeList;
    },
    favoritedJokes() {
      return this.$store.state.favoriteJokes;
    }
  },
  methods: {
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
    removeFromFavorites(index) {
      this.$store.dispatch("removeFavoriteJoke", index);
    },
    fetchJokes() {
      this.$store.dispatch("fetchJokeList");
    }
  }
};
</script>

<style scoped>
.container {
  width: 600px;
  margin: 50px auto;
  text-align: center;
}
</style>