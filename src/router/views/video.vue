<!-- @format -->

<script>
import appConfig from "@/app.config";
import Layout from "@layout";
import Item from "@components/item";

// import axios from "axios";
import { _getVideoDetails, _getRelatedVideos } from "@api";

export default {
	page: {
		title: "Video",
		meta: [{ name: "Video", content: appConfig.description }],
	},

	data() {
		return {
			videoDetails: {},
			relatedVideos: [],
		};
	},
	components: { Layout, Item },
	created() {
		this.$route.params.videoId &&
			_getVideoDetails(this.$route.params.videoId)
				.then((res) => {
					this.videoDetails = res.data.items[0];
				})
				.catch((error) => console.log("Error in getting video data", error));

		this.$route.params.videoId &&
			_getRelatedVideos(this.$route.params.videoId)
				.then((res) => {
					this.relatedVideos = [...res.data.items];
					console.log("related", this.relatedVideos);
				})
				.catch((error) =>
					console.log("Error in getting related videos", error)
				);
	},
};
</script>

<template>
	<Layout>
		<youtube :video-id="this.$route.params.videoId"></youtube>
		<div class="card-body">
			<h5 class="card-title">
				{{ this.videoDetails.snippet && this.videoDetails.snippet.title }}
			</h5>
			<h6 class="card-subtitle">
				{{
					this.videoDetails.snippet && this.videoDetails.snippet.channelTitle
				}}
				|
				{{
					this.videoDetails.snippet &&
						this.videoDetails.snippet.publishedAt | formatDate
				}}
			</h6>
			<p class="card-text">
				{{ this.videoDetails.snippet && this.videoDetails.snippet.description }}
			</p>
		</div>
		<ul>
			<li v-for="result in this.relatedVideos" :key="result.etag">
				<Item :result="result" />
			</li>
		</ul>
		<!-- <h1 v-else>Loading</h1> -->
	</Layout>
</template>

<style lang="scss">
/* @import "./app"; */
div {
	background-color: "purple";
}
</style>
