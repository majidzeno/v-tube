<!-- @format -->

<script>
import Item from "@components/item";

export default {
	components: {
		Item,
	},
	props: ["results"],
};
</script>
<template>
	<div>
		<ul class="searchResults">
			<li
				class="searchResults__result"
				v-for="result in results"
				:key="result.etag"
			>
				<Item :result="result" />
			</li>
		</ul>
		<slot />
	</div>
</template>

<style lang="scss">
.searchResults {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
