<!-- @format -->
<template>
	<div class="ytContainer">
		<div class="video" v-if="result.snippet.resourceId.videoId">
			<RouterLink
				class="video__link"
				:to="{
					name: 'video',
					params: { videoId: result.snippet.resourceId.videoId },
				}"
			>
				<img
					:src="result.snippet.thumbnails.medium.url"
					alt="YouTube thumbnail"
				/>
			</RouterLink>
			<div class="video__body">
				<h3 class="video__title">{{ result.snippet.title }}</h3>
				<p class="video__subtitle">
					{{ result.snippet.channelTitle }}
				</p>
				<p class="video__trail">
					Published at {{ result.snippet.publishedAt | formatDate }}
				</p>
				<p class="video__description">
					{{ result.snippet.description | trimExcerpt }}
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "PlaylistItem",
	props: ["result"],
};
</script>
