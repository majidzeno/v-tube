<!-- @format -->

<script>
import Header from "@components/header";

export default {
	components: { Header },
};
</script>

<template>
	<div class="appContainer">
		<Header />
		<slot />
	</div>
</template>

<style lang="scss">
.appContainer {
	@include breakpoint(laptop) {
		max-width: 800px;
		margin: 0 auto;
		margin-top: 52px;
	}
}
</style>
