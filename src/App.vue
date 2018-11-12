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

export default {
  name: "App",
  computed: {
    jokeList() {
      return this.$store.state.jokeList;
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
      if (!this.isAlreadyFavorite(joke.id)) {
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