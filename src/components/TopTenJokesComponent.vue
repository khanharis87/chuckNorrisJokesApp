<template>
  <div class="col-12 col-md-6">
    <h3 class="mb-3">Top 10 Jokes</h3>
    <ul class="list-unstyled">
      <li v-for="item in jokeList" :key="item.id" class="mb-5">
        {{item.joke}}
        <a href="#" v-on:click="addToFavorties(item)">
          <i class="fa fa-heart"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TopTenJokes",
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
      if (
        !this.isAlreadyFavorite(joke.id) &&
        this.favoritedJokes.length <= 10
      ) {
        this.$store.dispatch("addFavoriteJoke", joke);
      }
    }
  }
};
</script>
