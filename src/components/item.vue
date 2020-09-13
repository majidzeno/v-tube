<!-- @format -->

<script>
export default {
	name: "Item",
	props: ["result"],
};
</script>

<template>
	<div class="ytContainer">
		<div class="video" v-if="result.id.videoId">
			<RouterLink
				class="video__link"
				:to="{
					name: 'video',
					params: { videoId: result.id.videoId },
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
		<div class="channel" v-if="result.id.channelId">
			<RouterLink
				class="channel__link"
				:to="{
					name: 'channel',
					params: { channelId: result.id.channelId },
				}"
			>
				<img
					:src="result.snippet.thumbnails.medium.url"
					alt="YouTube thumbnail"
				/>
			</RouterLink>
			<div class="channel__body">
				<h3 class="channel__title">{{ result.snippet.title }}</h3>
				<p class="channel__description">{{ result.snippet.description }}</p>
			</div>
		</div>
		<div class="playlist" v-if="result.id.playlistId">
			<RouterLink
				class="playlist__link"
				:to="{
					name: 'playlist',
					params: { playlistId: result.id.playlistId },
				}"
			>
				<img
					:src="result.snippet && result.snippet.thumbnails.medium.url"
					alt="YouTube thumbnail"
				/>
				<div class="playlist__cover">
					<inline-svg
						class="playlist__icon"
						:src="require('../assets/svg/playlist.svg')"
					/>
				</div>
			</RouterLink>

			<div class="playlist__body">
				<h3 class="playlist__title">{{ result.snippet.title }}</h3>
				<p class="playlist__subtitle">
					{{ result.snippet.channelTitle }}
				</p>
				<p class="playlist__trail">
					Published at {{ result.snippet.publishedAt | formatDate }}
				</p>
				<p class="playlist__description">
					{{ result.snippet.description | trimExcerpt }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.ytContainer {
	/* border: 2px solid red; */
}
%resultContainer {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 0 2%;
	max-height: 14em;
	overflow: hidden;
	height: 100%;
	margin: 3% 0;
}
.video {
	@extend %resultContainer;
	&__link {
		flex-basis: 35%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-basis: 55%;
		img {
			width: 100%;
			max-width: 100%;
		}
	}
	&__body {
		flex-basis: 45%;
		padding: 0 3%;
	}

	&__title {
		@extend %font-heading;
		margin: 0;
		margin-bottom: 2px;
	}
	&__subtitle {
		@extend %font-subheading;
		margin: 0;
		margin-bottom: 1px;
	}
	&__description {
		@extend %font-content;
		@include breakpoint(mobile) {
			display: none;
		}
	}
	&__trail {
		@extend %font-content;
		margin: 0;
	}
}

.channel {
	@extend %resultContainer;
	&__link {
		flex-basis: 35%;
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			width: 100%;
			max-width: 80%;
		}
	}
	&__body {
		flex-basis: 65%;
		padding-right: 3%;
	}
	&__title {
		@extend %font-heading;
		margin: 0;
		margin-bottom: 0;
	}
	&__description {
		@extend %font-content;
	}
}
.playlist {
	@extend %resultContainer;
	&__link {
		flex-basis: 35%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-basis: 55%;
		position: relative;
		img {
			width: 100%;
			max-width: 100%;
		}
	}
	&__body {
		flex-basis: 45%;
		padding: 0 3%;
	}

	&__title {
		@extend %font-heading;
		margin: 0;
		margin-bottom: 2px;
	}
	&__subtitle {
		@extend %font-subheading;
		margin: 0;
		margin-bottom: 1px;
	}
	&__description {
		@extend %font-content;
		@include breakpoint(mobile) {
			display: none;
		}
	}
	&__trail {
		@extend %font-content;
		margin: 0;
	}
	&__cover {
		position: absolute;
		top: 0;
		left: 50%;
		width: 50%;
		background-color: rgba(0, 0, 0, 0.74);
		height: 100%;
	}
	&__icon {
		fill: #fff;
		height: 15%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
	}
}
</style>
