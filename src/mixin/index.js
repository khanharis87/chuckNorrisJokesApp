export default {
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
    }
}