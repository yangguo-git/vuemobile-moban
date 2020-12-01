import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter);

const Merchant = () => import('@/views/merchant/merchant');

const routes = [
	{
		path: '/',
		name: 'merchant',
		component: Merchant

	},
	// {
	// 	path: '/login',
	// 	name: 'Login',
	// 	component: Login
	// }

];

const router = new VueRouter({
	routes
});
export default router
