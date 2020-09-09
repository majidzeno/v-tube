<!-- @format -->

<template>
	<div>
		<a
			:href="'https://www.youtube.com/watch?v=' + result.id.videoId"
			target="_blank"
		>
			<img
				class=""
				:src="result.snippet.thumbnails.medium.url"
				alt="YouTube thumbnail"
			/>
		</a>
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
