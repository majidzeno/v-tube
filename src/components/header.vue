<!-- @format -->

<template>
	<div class="header">
		<ul>
			<!-- <li><RouterLink to="search?query=heybrother">Search</RouterLink></li> -->
			<li><RouterLink to="channel/10">Channel</RouterLink></li>
			<li><RouterLink to="video/he">Video</RouterLink></li>
		</ul>
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
