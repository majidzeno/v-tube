/** @format */

import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.filter("formatDate", function(value) {
	if (!value) return "";
	let date = new Date(value);
	return date.toISOString().substring(0, 10);
});
export const router = new VueRouter({
	routes,
	mode: "history",
});
export const eventBus = new Vue();

new Vue({
	render: (h) => h(App),
}).$mount("#app");
