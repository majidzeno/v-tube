<!-- @format -->

<script>
import appConfig from "@/app.config";
import Layout from "@layout";
import SearchResults from "@components/search-results";
import { eventBus } from "@/main";
import moment from "moment";
import { _searchAll, _loadMore, _filterByType, _filterByDate } from "@api";
export default {
	page: {
		title: "Search",
		meta: [{ name: "Search", content: appConfig.description }],
	},
	components: { Layout, SearchResults },
	data() {
		return {
			results: [],
			keyword: this.$route.query.query,
			searchKeywordFormatted: "",
			filter: { kind: "", arg: "" },
			lastFilterType: "all",
			nextPageToken: "",
			selectedType: "",
			types: {
				All: "all",
				Channel: "channel",
				Playlist: "playlist",
			},
			selectedRange: "",
			ranges: {
				Today: "today",
				"This Week": "this-week",
				"This Month": "this-month",
			},
		};
	},
	mounted() {
		// this.getSearchResult(
		// 	`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=spongebob&key=${API_KEYS.youtube_key}&maxResults=2`
		// );
	},
	created() {
		this.$router.push("path").catch((error) => {
			if (error.name != "NavigationDuplicated") {
				throw error;
			}
		});
		eventBus.$on("search", (searchParams) => {
			this.searchKeywordFormatted = searchParams.join(" ");
			this.keyword = searchParams.join("+");
			this.results = [];
			this.getSearchResult(this.keyword);
		});
	},
	methods: {
		getSearchResult(searchKeyword) {
			// console.log("initiated");
			_searchAll(searchKeyword)
				.then((res) => {
					// console.log("res", res);
					this.results = [];
					this.results = [...this.results, ...res.data.items];
					this.results = Array.from(
						new Set(this.results.map((a) => a.etag))
					).map((id) => {
						return this.results.find((a) => a.etag === id);
					});
					this.nextPageToken = res.data.nextPageToken;
				})
				.catch((error) => console.log("ERROR in search ==>", error));
		},
		loadmore() {
			// const LOADMORE_URL = `${baseUrl}part=${part}&order=${order}&q=${q}&key=${key}&maxResults=${maxResults}&pageToken=${nextPageToken}`;
			// const LOADMORE_URL = `${this.lastRequestUrl}&pageToken=${nextPageToken}`;
			// this.getSearchResult(LOADMORE_URL);
			_loadMore(this.keyword, this.nextPageToken, this.filter)
				.then((res) => {
					this.results = [...this.results, ...res.data.items];
					this.results = Array.from(
						new Set(this.results.map((a) => a.etag))
					).map((id) => {
						return this.results.find((a) => a.etag === id);
					});
					this.lastRequestUrl = this.$route.fullPath;
					this.nextPageToken = res.data.nextPageToken;
				})
				.catch((error) => console.log("ERROR ==>", error));
		},
		filterByType(type) {
			this.filter.kind = "type";
			this.filter.arg = type;
			// console.log("keyword", this.keyword);
			// console.log("type", type);
			_filterByType(this.keyword, type)
				.then((res) => {
					this.results = [];
					this.results = [...res.data.items];
					this.results = Array.from(
						new Set(this.results.map((a) => a.etag))
					).map((id) => {
						return this.results.find((a) => a.etag === id);
					});
					this.nextPageToken = res.data.nextPageToken;
				})
				.catch((error) => console.log("ERROR in filterbytype ==>", error));
		},
		filterByDate(date) {
			let todayDate = moment().toISOString();
			let thisWeekDate = moment()
				.subtract(7, "days")
				.toISOString();
			let thisMonthDate = moment()
				.subtract(30, "days")
				.toISOString();
			let filterDate;
			if (date === "today") {
				filterDate = todayDate;
			} else if (date === "this-week") {
				filterDate = thisWeekDate;
			} else if (date === "this-month") {
				filterDate = thisMonthDate;
			}
			this.filter.kind = "date";
			this.filter.arg = filterDate;

			_filterByDate(this.keyword, filterDate)
				.then((res) => {
					this.results = [];
					this.results = [...res.data.items];
					this.nextPageToken = res.data.nextPageToken;
				})
				.catch((error) => console.log("ERROR in filterbydate ==>", error));
		},
		resetFilter(arg) {
			this[arg] = "";
			this.getSearchResult(this.keyword);
		},
	},
	watch: {
		selectedType: function(newValue) {
			this.selectedType = newValue;
			this.selectedRange = "";
			if (newValue !== "") {
				this.filterByType(this.selectedType);
			}
		},
		selectedRange: function(newValue) {
			this.selectedRange = newValue;
			this.selectedType = "";
			// console.log("this.selectedRange", this.selectedRange);
			if (newValue !== "") {
				this.filterByDate(this.selectedRange);
			}
		},
	},
};
</script>

<template>
	<Layout>
		<!-- <Filters /> -->
		<div class="filters">
			<div>
				<!-- <label for="typeFilter">Type</label> -->
				<select v-model="selectedType" id="typeFilter">
					<option value="" disabled>Type</option>
					<option v-for="(value, text) in types" :value="value" :key="value">{{
						text
					}}</option>
				</select>
				<button @click="resetFilter('selectedType')">Reset</button>
			</div>
			<div>
				<select v-model="selectedRange">
					<option value="" disabled>Upload Date</option>
					<option v-for="(value, text) in ranges" :value="value" :key="value">{{
						text
					}}</option>
				</select>
				<button @click="resetFilter('selectedRange')">Reset</button>
			</div>
		</div>
		<SearchResults
			v-if="results.length > 0"
			:results="results"
			:searchKeywordFormatted="searchKeywordFormatted"
		/>
		<button
			v-if="results.length > 0"
			:nextPageToken="nextPageToken"
			@click="loadmore"
		>
			Load More
		</button>
	</Layout>
</template>

<style lang="scss">
/* @import "./app"; */
div {
	background-color: "purple";
}
</style>
