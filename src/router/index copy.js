import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter);

const Home = () => import('@/views/homes/home');
const Mine = () => import('@/views/mines/mine');
const Part = () => import('@/views/parts/part');
const Layout = () => import('@/views/layout/layout');
const Login = () => import('@/views/login/login');

const routes = [
	{
		path: '/',
		component: Layout,
		children: [
			{
				path: '',
				name: 'Home',
				component: Home
			},
			{
				path: '/mine',
				name: 'Mine',
				component: Mine
			},
			{
				path: '/part',
				name: 'Part',
				component: Part
			}
		]

	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	}

];

const router = new VueRouter({
	routes
});
export default router
