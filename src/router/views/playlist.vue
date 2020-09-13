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
					this.videos = [...res.data.items];
				})
				.catch((error) => console.log("Error in getting channel data", error));
	},
};
</script>

<template>
	<Layout>
		<div class="playlistpage">
			<ul class="searchResults">
				<li
					class="searchResults__result"
					v-for="result in this.videos"
					:key="result.etag"
				>
					<PlaylistItem :result="result" />
				</li>
			</ul>
		</div>
	</Layout>
</template>

<style lang="scss">
.playlistpage {
	margin-top: 5em;
}
</style>
