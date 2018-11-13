<template>
    <b-form @submit="login()" id="login">
        <h1 class="text-center mb-3">Login</h1>
         <b-form-group id="username"
                    label="Username"
                    label-for="usernameInput">
                <b-form-input id="username"
                      type="text"
                      v-model="input.username"
                      required
                      placeholder="Enter username">
                </b-form-input>
         </b-form-group>
         <b-form-group id="password"
                    label="Passsword"
                    label-for="passwordInput">
                <b-form-input id="password"
                      type="password"
                      v-model="input.password"
                      required
                      placeholder="Enter password">
                </b-form-input>
         </b-form-group>
        <b-button type="submit" size="md" class="mb-3" variant="primary">Submit</b-button>
        <uL>
            <li v-show="!hasIncreasingStraightLetters">Passwords must include one increasing straight of at least three letters, like abc, and no numbers</li>
            <li v-show="!hasTwoPairsOfLetter">Passwords must contain at least two non-overlapping pairs of letters, like aa, bb, or cc.</li>
            <li v-show="!isLessThanThirtyTwoCharacters">Passwords cannot be longer than 32 characters.</li>
            <li v-show="!isAllLowerCase">Passwords can only contain lower case alphabetic characters.</li>
            <li v-show="hasConfusingAlphabets">Passwords may not contain the letters i, O, or l, as these letters can be mistaken for other characters and are therefore confusing.</li>
        </ul>
    </b-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    hasIncreasingStraightLetters() {
      return /[a-z]{3}$/.test(this.input.password);
    },
    hasTwoPairsOfLetter() {
      return /(.*[a-z]){2}/i.test(this.input.password);
    },
    hasConfusingAlphabets() {
      return /[iOl]/.test(this.input.password);
    },
    isLessThanThirtyTwoCharacters() {
      return this.input.password.length <= 32;
    },
    isAllLowerCase() {
      return /[a-z]/.test(this.input.password);
    }
  },
  methods: {
    login() {
      if (
        this.input.username != "" &&
        this.input.password != "" &&
        this.hasIncreasingStraightLetters &&
        this.hasTwoPairsOfLetter &&
        !this.hasConfusingAlphabets &&
        this.isLessThanThirtyTwoCharacters &&
        this.isAllLowerCase
      ) {
        this.$router.push({ name: "home" });
      } else {
        console.log("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>