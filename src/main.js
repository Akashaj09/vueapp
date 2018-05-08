import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import store from './store'
import App from './App.vue'

import router from './router'

Vue.use(BootstrapVue, axios);

Vue.config.productionTip = false
window.axios = require('axios')

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


router.beforeEach((to, from, next) => {
	if(to.meta.isAuth === true){
		const authUser = JSON.parse(window.localStorage.getItem('authUser'));
		if(authUser && authUser.access_token){
			next();
		}else{
			next({ path: '/login' })
		}
		next();
	}
	next();
})

new Vue({
	router,store,
  	render: h => h(App)
}).$mount('#app')
