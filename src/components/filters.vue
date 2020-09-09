<!-- @format -->

<template>
	<div class="filters">
		<!-- <Dropdown>
			<option v-for="type in types" value="type.value" :key="type.value">{{
				type.text
			}}</option>
		</Dropdown>
		<Dropdown>
			<option v-for="range in ranges" value="range.value" :key="range.value">{{
				range.text
			}}</option>
		</Dropdown> -->
		<Dropdown :options="types" v-model="selectedType" name="type"></Dropdown>
		<Dropdown :options="ranges" v-model="selectedRange" name="range"></Dropdown>
	</div>
</template>
<script>
import Dropdown from "./_base-dropdown";
export default {
	components: {
		Dropdown,
	},
	data() {
		return {
			// types: [
			// 	{ text: "All", value: "all" },
			// 	{ text: "Channel", value: "channel" },
			// 	{ text: "Playlist", value: "playlist" },
			// ],
			selectedType: "Playlist",
			types: {
				All: "all",
				Channel: "channel",
				Playlist: "playlist",
			},
			selectedRange: "Today",
			ranges: {
				Today: "today",
				"This Week": "this-week",
				"This Month": "this-month",
			},
		};
	},
};
</script>
<style lang="scss">
.filters {
	display: flex;
}
</style>
