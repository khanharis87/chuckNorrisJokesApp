<template>
    <div class="col-12 col-md-6 list-unstyled">
        <h3 class="mb-3">Favorite Jokes</h3>
        <ul class="list-unstyled">
            <li v-for="(item, index) in favoritedJokes" :key="item.id" class="mb-5">
                {{item.joke}}
                <a href="#" v-on:click="removeFromFavorites(index)">
                    <i class="fa fa-trash"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "FavoriteTopTenJokes",
  props: {
    timer: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    favoritedJokes() {
      return this.$store.state.favoriteJokes;
    }
  },
  methods: {
    addRandomJokesAsFavorites() {
      setInterval(() => {
        if (this.timer) {
          const randomNumberFromZeroToEleven = Math.floor(Math.random() * 11);
          this.addToFavorties(
            this.$store.state.jokeList[randomNumberFromZeroToEleven]
          );
        }
      }, 5000);
    },
    removeFromFavorites(index) {
      this.$store.dispatch("removeFavoriteJoke", index);
    }
  }
};
</script>

