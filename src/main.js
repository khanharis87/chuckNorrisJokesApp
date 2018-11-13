import 'es6-promise/auto'
import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "font-awesome/css/font-awesome.min.css"
import "./styles.css"
import router from './router'
import App from './App'

Vue.use(BootstrapVue)

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})