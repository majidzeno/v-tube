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
				})
				.catch((error) =>
					console.log("Error in getting related videos", error)
				);
	},
};
</script>

<template>
	<Layout>
		<youtube
			class="videoPlayer"
			:video-id="this.$route.params.videoId"
		></youtube>
		<div class="video__wrapper ">
			<h3 class="video__title">
				{{ this.videoDetails.snippet && this.videoDetails.snippet.title }}
			</h3>
			<h6 class="video__subtitle">
				{{
					this.videoDetails.snippet && this.videoDetails.snippet.channelTitle
				}}
				|
				{{
					this.videoDetails.snippet &&
						this.videoDetails.snippet.publishedAt | formatDate
				}}
			</h6>
			<p class="video__description">
				{{ this.videoDetails.snippet && this.videoDetails.snippet.description }}
			</p>
		</div>
		<ul class="searchResults">
			<li
				class="searchResults__result"
				v-for="result in this.relatedVideos"
				:key="result.etag"
			>
				<Item :result="result" />
			</li>
		</ul>
	</Layout>
</template>

<style lang="scss">
.videoPlayer {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 5em;
	background-color: #000;
}
.video {
	&__wrapper {
		margin-top: 2em;
		border-bottom: 1px solid $color-border;
	}
}
</style>
