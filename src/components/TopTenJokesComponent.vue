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
import mixin from "../mixin";

export default {
  name: "TopTenJokes",
  mixins: [mixin],
  computed: {
    jokeList() {
      return this.$store.state.jokeList;
    }
  }
};
</script>
