<!-- @format -->
<!-- :to="'video' + result.snippet.resourceId.videoId" -->

<template>
	<div>
		<RouterLink
			v-if="result.snippet.resourceId.videoId"
			:to="{
				name: 'video',
				params: { videoId: result.snippet.resourceId.videoId },
			}"
		>
			<h1>This is video</h1>
			<img
				class=""
				:src="result.snippet.thumbnails.medium.url"
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
