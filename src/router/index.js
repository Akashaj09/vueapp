import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Register from '@/pages/Register'

Vue.use(Router)


export default new Router({
	routes: [
		{
			path: '/',
			component: Index,
			name: 'Home'
		},
		{
			path: '/login',
			component: Login,
			name: 'login'
		},
		{
			path: '*',
			component: Index
		},
		{
			path: '/dashboard',
			component: Dashboard,
			name: 'dashboard',
			meta: {isAuth: true}
		},
		{
			path: '/register',
			component: Register,
			name: 'register'
		}
	],
	mode: 'history'
})