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
					this.channelDetails = res.data.items[0];
					_getChannelVideos(
						this.channelDetails.contentDetails.relatedPlaylists.uploads
					).then((secRes) => {
						return (this.videos = [...secRes.data.items]);
					});
				})
				.catch((error) => console.log("Error in getting channel data", error));
	},
};
</script>

<template>
	<Layout>
		<div class="channelpage">
			<div class="channelpage__header">
				<img
					:src="
						this.channelDetails.snippet &&
							this.channelDetails.snippet.thumbnails.medium.url
					"
					alt="channel-image"
				/>
				<div class="channelpage__details">
					<h1 class="channelpage__title">
						{{
							this.channelDetails.snippet && this.channelDetails.snippet.title
						}}
					</h1>
					<p>{{ this.channelDetails.description }}</p>
					<div class="subscribe">
						<inline-svg
							class="subscribe__btn"
							:src="require('@assets/svg/subscribe-youtube.svg')"
						/>
						<h6 class="subscribe__text">
							{{
								(this.channelDetails.statistics &&
									this.channelDetails.statistics.subscriberCount)
									| numberWithCommas
							}}
						</h6>
					</div>
				</div>
			</div>
			<ul class="channelpage__list">
				<li v-for="result in this.videos" :key="result.etag">
					<PlaylistItem :result="result" />
				</li>
			</ul>
		</div>
	</Layout>
</template>

<style lang="scss">
.channelpage {
	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		background-color: #fff;
		img {
			max-width: 35%;
			width: 100%;
			padding: 5%;
		}
	}
	&__title {
		@extend %font-heading;
	}
	&__details {
		max-width: 45%;
		width: 100%;
		padding: 5%;

		h1 {
			text-align: left;
		}
	}
	&__list {
		display: block;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	border-bottom: 1px solid $color-border;
}
.subscribe {
	display: flex;
	align-items: center;
	&__text {
		margin-left: 15px;
		@extend %font-heading;
	}
	&__btn {
		width: 100px;
		height: auto;
	}
}
</style>
