<!-- @format -->

<script>
import appConfig from "@/app.config";
import Layout from "@layout";
// import axios from "axios";

export default {
	page: {
		title: "Channel",
		meta: [{ name: "Channel", content: appConfig.description }],
	},
	components: { Layout },
	data() {
		return {
			id: this.$route.params.channelId,
		};
	},
	watch: {
		$route(to) {
			this.id = to.params.id;
		},
	},
};
</script>

<template>
	<Layout>
		<h1>Channel</h1>
		<h2>Channel Id is {{ id }}</h2>
	</Layout>
</template>

<style lang="scss">
/* @import "./app"; */
div {
	background-color: "purple";
}
</style>
