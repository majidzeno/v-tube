<!-- @format -->

<script>
import Layout from "@layout";

export default {
	page: {
		title: "404",
		meta: [{ name: "description", content: "404" }],
	},
	components: { Layout },
	// props: {
	// 	resource: {
	// 		type: String,
	// 		default: "",
	// 	},
	// },
};
</script>

<template>
	<Layout>
		<h1>
			404
			<!-- <template v-if="resource">
				{{ resource }}
			</template> -->
			Not Found
		</h1>
	</Layout>
</template>

<style lang="scss" module>
h1 {
	text-align: center;
}
</style>
