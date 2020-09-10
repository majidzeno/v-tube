<!-- @format -->

<template>
	<div>
		<form action="">
			Logo here Search Bar
			<input
				type="text"
				v-model="keyword"
				@keydown.13.prevent="parseSearch"
				placeholder="Search ..."
			/>
			<button @click.prevent="parseSearch">Search</button>
			<!-- <RouterLink tag="button"></RouterLink> -->
		</form>
		<h1>{{ keyword }}</h1>
	</div>
</template>
<script>
import { eventBus } from "../main";
export default {
	data() {
		return {
			keyword: this.$route.query.query || "spongebob",
			lastKeyword: "spongebob",
		};
	},
	methods: {
		parseSearch() {
			// console.log("this.$route.params", this.$route);
			if (this.keyword.trim() !== "") {
				const searchParams = this.keyword.trim().split(/\s+/);
				// console.log("this.$route.fullPath", this.$route.fullPath);
				// console.log(
				// 	'"/search?query=" + this.keyword',
				// 	"/search?query=" + this.keyword
				// );
				// if (
				// 	searchParams[0] === this.lastKeyword &&
				// 	this.$route.fullPath === "/search?query=" + this.keyword
				// ) {
				// 	// alert("sdf");
				// 	// this.$router.push({
				// 	// 	name: "search",
				// 	// 	query: { query: this.keyword },
				// 	// });
				// 	return;
				// } else
				if (searchParams[0] === this.lastKeyword) {
					this.$router.replace({
						name: "search",
						// path: "/search",
						query: { query: this.keyword },
					});
				}
				// this.$emit("search", searchParams);
				eventBus.$emit("search", searchParams);

				this.$router.push({
					name: "search",
					// path: "/search",
					query: { query: this.keyword },
				});
				this.lastKeyword = this.keyword;
				this.keyword = this.$route.query.query;
			}
		},
	},
	created() {
		// console.log("this.$router", this.$router);
		// console.log("this.$route", this.$route);
		// console.log("this.lastKeyword", this.lastKeyword);
		// console.log("this.keyword.trim", this.keyword.trim().split(/\s+/));
	},
};
</script>
