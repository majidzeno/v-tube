<!-- @format -->

<template>
	<div>
		<form action="">
			Logo here Search Bar
			<input
				type="text"
				v-model="keyword"
				@keydown.13.prevent="parseSearch"
				placeholder="Search ... "
			/>
			<button @click.prevent="parseSearch">Search</button>
		</form>
		<h1>{{ keyword }}</h1>
	</div>
</template>
<script>
import { eventBus } from "../main";
export default {
	data() {
		return {
			keyword: "spongebob",
		};
	},
	methods: {
		parseSearch() {
			if (this.keyword.trim() !== "") {
				const searchParams = this.keyword.trim().split(/\s+/);
				// this.$emit("search", searchParams);
				eventBus.$emit("search", searchParams);
				this.keyword = "";
			}
		},
	},
};
</script>
