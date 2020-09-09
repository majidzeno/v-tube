<!-- @format -->

<script>
import appConfig from "@/app.config";
import Layout from "@layout";
// import axios from "axios";

export default {
	page: {
		title: "Video",
		meta: [{ name: "Video", content: appConfig.description }],
	},
	components: { Layout },
	created() {
		console.log("this.$route", this.$route.params.videoId);
	},
};
</script>

<template>
	<Layout>
		<youtube :video-id="this.$route.params.videoId"></youtube>
	</Layout>
</template>

<style lang="scss">
/* @import "./app"; */
div {
	background-color: "purple";
}
</style>
