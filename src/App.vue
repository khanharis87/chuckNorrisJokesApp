<template>
  <div class="container">
      <ul class="list-unstyled">
        <li 
         v-for="item in jokes"
         :key="item.id"
         >
            {{item.joke}}
        </li>
      </ul>
      {{jokes}}
    <b-button @click="fetchJokes" type="submit">Fetch Jokes </b-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      title: "Chcuk Norries Jokes",
      jokes: []
    };
  },
  methods: {
    fetchJokes() {
      const uri = "http://api.icndb.com/jokes/random/10";
      axios.get(uri).then(response => (this.jokes = response.data.value));
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