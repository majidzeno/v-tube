/** @format */

import Vue from "vue";
import App from "./App.vue";
import { router } from "@router";
import VueYouTubeEmbed from "vue-youtube-embed";
import { InlineSvgPlugin } from "vue-inline-svg";
import ScrollLoader from "vue-scroll-loader";

Vue.config.productionTip = false;
Vue.use(VueYouTubeEmbed);
Vue.use(InlineSvgPlugin);
Vue.use(ScrollLoader);

Vue.filter("formatDate", function(value) {
	if (!value) return "";
	let date = new Date(value);
	return date.toISOString().substring(0, 10);
});
Vue.filter("trimExcerpt", function(value) {
	if (!value) return "";
	return value.replace(/^(.{100}[^\s]*).*/, "$1....");
});

export const eventBus = new Vue();

new Vue({
	InlineSvgPlugin,
	VueYouTubeEmbed,
	router,
	render: (h) => h(App),
}).$mount("#app");
