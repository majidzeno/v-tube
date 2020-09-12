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
	/* color: $color-main; */
}
</style>
