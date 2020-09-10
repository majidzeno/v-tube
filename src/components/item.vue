<!-- @format -->
<!-- <RouterLink v-if="result.id.videoId" :to="'video/' + result.id.videoId"> -->

<template>
	<div>
		<RouterLink
			v-if="result.id.videoId"
			:to="{
				name: 'video',
				params: { videoId: result.id.videoId },
			}"
		>
			<h1>This is video</h1>
			<img
				class=""
				:src="result.snippet.thumbnails.medium.url"
				alt="YouTube thumbnail"
			/>
		</RouterLink>
		<RouterLink
			v-if="result.id.channelId"
			:to="{
				name: 'channel',
				params: { channelId: result.id.channelId },
			}"
		>
			<h1>This is Channel</h1>

			<img
				class=""
				:src="result.snippet.thumbnails.medium.url"
				alt="YouTube thumbnail"
			/>
		</RouterLink>
		<RouterLink
			v-if="result.id.playlistId"
			:to="{
				name: 'playlist',
				params: { playlistId: result.id.playlistId },
			}"
		>
			<h1>This is Playlist</h1>

			<img
				class=""
				:src="result.snippet && result.snippet.thumbnails.medium.url"
				alt="YouTube thumbnail"
			/>
		</RouterLink>

		<div class="card-body">
			<h5 class="card-title">{{ result.snippet.title }}</h5>
			<h6 class="card-subtitle">
				{{ result.snippet.channelTitle }} |
				{{ result.snippet.publishedAt | formatDate }}
			</h6>
			<p class="card-text">{{ result.snippet.description }}</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "Item",
	props: ["result"],
};
</script>
