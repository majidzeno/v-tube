<!-- @format -->

<template>
	<div>
		<h3>search results for {{ searchKeywordFormatted }}</h3>
		<ul>
			<li v-for="result in results" :key="result.etag">
				<Item :result="result" />
			</li>
		</ul>
		<slot />
	</div>
</template>
<script>
import Item from "./item";
export default {
	components: {
		Item,
	},
	props: ["results", "searchKeywordFormatted"],
};
</script>
