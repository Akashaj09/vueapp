import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Register from '@/pages/Register'
import Ask from '@/pages/Ask'
import Question from '@/pages/Question'
import Tags from '@/pages/Tags'


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
			path: '/register',
			component: Register,
			name: 'register'
		},{
			path: '/dashboard',
			component: Dashboard,
			name: 'dashboard',
			meta: {isAuth: true}
		},
		{
			path: '/ask',
			component: Ask,
			name: 'ask',
			meta: { isAuth:true }	
		},
		{
			path: '/new-questions',
			component: Question,
			name: 'question',
			meta: { isAuth: true }
		},
		{
			path: '/tags',
			component: Tags,
			name: 'tags',
			meta: {isAuth: true}
		}
	],
	mode: 'history'
})