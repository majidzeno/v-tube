/** @format */

import Vue from "vue";
import App from "./app.vue";
import { router } from "@router";
import VueYouTubeEmbed from "vue-youtube-embed";

Vue.config.productionTip = false;
Vue.use(VueYouTubeEmbed);

Vue.filter("formatDate", function(value) {
	if (!value) return "";
	let date = new Date(value);
	return date.toISOString().substring(0, 10);
});

export const eventBus = new Vue();

new Vue({ VueYouTubeEmbed, router, render: (h) => h(App) }).$mount("#app");
