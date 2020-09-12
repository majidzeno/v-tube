<!-- @format -->
<script>
export default {
	name: "Spinner",
};
</script>
<template>
	<div class="cont">
		<div class="cont__spinner" />
		<div class="cont__text">Loading</div>
	</div>
</template>
<style lang="scss">
.cont {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	flex-direction: column;

	&__spinner {
		display: inline-block;
		font-size: 10px;
		border-radius: 0.5em;
		width: 1em;
		height: 1em;
		margin: 1.5em;
		margin-bottom: 3em;
		overflow: hidden;
		text-indent: 100%;
		-moz-animation: spinner-loader 1500ms infinite linear;
		-webkit-animation: spinner-loader 1500ms infinite linear;
		animation: spinner-loader 1500ms infinite linear;
		box-shadow: rgba(0, 0, 51, 0.3) 1.5em 0 0 0,
			rgba(0, 0, 51, 0.3) 1.1em 1.1em 0 0, rgba(0, 0, 51, 0.3) 0 1.5em 0 0,
			rgba(0, 0, 51, 0.3) -1.1em 1.1em 0 0, rgba(0, 0, 51, 0.3) -1.5em 0 0 0,
			rgba(0, 0, 51, 0.3) -1.1em -1.1em 0 0, rgba(0, 0, 51, 0.3) 0 -1.5em 0 0,
			rgba(0, 0, 51, 0.3) 1.1em -1.1em 0 0;
	}
	&__text {
		@extend %font-heading;
	}
}
@-moz-keyframes spinner-loader {
	0% {
		-moz-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-moz-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@-webkit-keyframes spinner-loader {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@keyframes spinner-loader {
	0% {
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-moz-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
</style>
