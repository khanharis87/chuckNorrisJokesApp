import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from './components/Login.vue'
import HomeComponent from './components/HomePage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name:'Login',
            component: LoginComponent
        },
        {
            path: "/home",
            name: "home",
            component: HomeComponent
        }
    ]
})