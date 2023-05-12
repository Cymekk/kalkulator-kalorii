import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AutoCalc from '../views/AutoCalcView.vue'
import SelfCalc from '../views/SelfCalcView.vue'
import AddProductView from '../views/AddProductView.vue'
import PushToArrayView from '../views/PushToArrayView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/autocalc',
		name: 'autocalc',
		component: AutoCalc,
	},
	{
		path: '/selfcalc',
		name: 'selfcalc',
		component: SelfCalc,
	},
	{
		path: '/addproduct',
		name: 'addproductview',
		component: AddProductView,
	},
	{
		path: '/pushtoarray',
		name: 'pushtoarray',
		component: PushToArrayView,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
