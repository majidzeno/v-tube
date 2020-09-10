<!-- @format -->

<script>
import appConfig from "@/app.config";
import Layout from "@layout";
// import axios from "axios";
import PlaylistItem from "@components/playlistItem";

import { _getPlaylistById } from "@api";

export default {
	page: {
		title: "playlist",
		meta: [{ name: "Playlist", content: appConfig.description }],
	},
	components: { Layout, PlaylistItem },
	data() {
		return {
			id: this.$route.params.playlistId,
			videos: [],
		};
	},
	watch: {
		$route(to) {
			this.id = to.params.id;
		},
	},
	created() {
		this.$route.params.playlistId &&
			_getPlaylistById(this.$route.params.playlistId)
				.then((res) => {
					console.log("res-->", res);
					this.videos = [...res.data.items];
					console.log("this.videos-->", this.videos);
				})
				.catch((error) => console.log("Error in getting channel data", error));
	},
};
</script>

<template>
	<Layout>
		<h2>Playlist Id is {{ id }}</h2>
		<!-- <h1>
			{{ this.playlistDetails.snippet && this.playlistDetails.snippet.title }}
		</h1>
		<img
			:src="
				this.playlistDetails.snippet &&
					this.playlistDetails.snippet.thumbnails.medium.url
			"
			alt="channel-image"
		/>
		<p>{{ this.playlistDetails.description }}</p> -->

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
