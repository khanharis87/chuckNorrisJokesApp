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
  computed: {
    favoritedJokes() {
      return this.$store.state.favoriteJokes;
    }
  },
  methods: {
    removeFromFavorites(index) {
      this.$store.dispatch("removeFavoriteJoke", index);
    }
  }
};
</script>

