<!-- @format -->

<template>
	<div class="header">
		<Searchbar />
	</div>
</template>
<script>
import Searchbar from "./search-bar";
export default {
	components: {
		Searchbar,
	},
};
</script>
<style lang="scss">
.header {
	background-color: $color-main;
	@include breakpoint(laptop) {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		box-shadow: 1px 1px 4px rgb(128 128 128 / 66%);
		height: 52px;
		width: 100%;
		padding: 0 5%;
	}
}
</style>
