import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import Product from "../views/Product.vue";
import Category from "../views/Category.vue";
import Search from "../views/Search.vue";
import Cart from "../views/Cart.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/AboutView.vue"),
	},
	{
		path: "/search",
		name: "Search",
		component: Search,
	},
	{
		path: "/cart",
		name: "Cart",
		component: Cart,
	},
	{
		path: "/:category_slug/:product_slug/",
		name: "Product",
		component: Product,
	},
	{
		path: "/:category_slug",
		name: "Category",
		component: Category,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
