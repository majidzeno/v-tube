<!-- @format -->

<script>
import appConfig from "@/app.config";
import Layout from "@layout";
// import axios from "axios";
import PlaylistItem from "@components/playlistItem";

import { _getChannelById, _getChannelVideos } from "@api";

export default {
	page: {
		title: "Channel",
		meta: [{ name: "Channel", content: appConfig.description }],
	},
	components: { Layout, PlaylistItem },
	data() {
		return {
			id: this.$route.params.channelId,
			channelDetails: {},
			videos: [],
		};
	},
	watch: {
		$route(to) {
			this.id = to.params.id;
		},
	},
	created() {
		this.$route.params.channelId &&
			_getChannelById(this.$route.params.channelId)
				.then((res) => {
					console.log("res-->", res);
					this.channelDetails = res.data.items[0];
					console.log("this.channelDetails-->", this.channelDetails);
					_getChannelVideos(
						this.channelDetails.contentDetails.relatedPlaylists.uploads
					).then((secRes) => {
						console.log("secRes-->", secRes);

						return (this.videos = [...secRes.data.items]);
					});
				})
				.catch((error) => console.log("Error in getting channel data", error));
	},
};
</script>

<template>
	<Layout>
		<h2>Channel Id is {{ id }}</h2>
		<h1>
			{{ this.channelDetails.snippet && this.channelDetails.snippet.title }}
		</h1>
		<img
			:src="
				this.channelDetails.snippet &&
					this.channelDetails.snippet.thumbnails.medium.url
			"
			alt="channel-image"
		/>
		<p>{{ this.channelDetails.description }}</p>
		<h6>
			{{
				this.channelDetails.statistics &&
					this.channelDetails.statistics.subscriberCount
			}}
			Subscriber
		</h6>
		<ul>
			<li v-for="result in this.videos" :key="result.etag">
				<PlaylistItem :result="result" />
			</li>
		</ul>
	</Layout>
</template>

<style lang="scss">
/* @import "./app"; */
div {
	background-color: "purple";
}
</style>
