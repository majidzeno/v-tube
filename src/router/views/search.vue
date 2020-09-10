<!-- @format -->

<script>
import appConfig from "@/app.config";
import Layout from "@layout";
// import { API_KEYS } from "@/../_KEYS";
import SearchResults from "@components/search-results";
import Filters from "@components/filters";
import { eventBus } from "@/main";
// import axios from "axios";
import moment from "moment";
import { _searchAll, _loadMore, _filterByType, _filterByDate } from "@api";
export default {
	page: {
		title: "Search",
		meta: [{ name: "Search", content: appConfig.description }],
	},
	components: { Layout, SearchResults, Filters },
	data() {
		return {
			results: [],
			keyword: "",
			searchKeywordFormatted: "",
			filter: { kind: "", arg: "" },
			lastFilterType: "all",
			nextPageToken: "",
		};
	},
	mounted() {
		// this.getSearchResult(
		// 	`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=spongebob&key=${API_KEYS.youtube_key}&maxResults=2`
		// );
	},
	created() {
		eventBus.$on("search", (searchParams) => {
			this.searchKeywordFormatted = searchParams.join(" ");
			this.keyword = searchParams.join("+");
			this.results = [];
			this.getSearchResult(this.keyword);
		});
		eventBus.$on("selectedchange", (filter) => {
			let today = moment().toISOString();
			let thisWeek = moment()
				.add(7, "days")
				.toISOString();
			let thisMonth = moment()
				.add(30, "days")
				.toISOString();

			if (filter.range) {
				let date;
				if (filter.range === "today") {
					date = today;
				} else if (filter.range === "this-week") {
					date = thisWeek;
				} else if (filter.range === "this-month") {
					date = thisMonth;
				}
				console.log("filter.type", filter.type);
				if (!filter.type) filter.type = this.lastFilterType;
				this.filterByTypeAndDate(filter.type, date);
			} else if (filter.type) {
				this.lastFilterType = filter.type;
				this.filterByType(filter.type);
			}
		});
	},
	methods: {
		getSearchResult(searchKeyword) {
			_searchAll(searchKeyword)
				.then((res) => {
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
			this.filter.kind = "date";
			this.filter.arg = date;
			_filterByDate(this.keyword, date)
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
				.catch((error) => console.log("ERROR in filterbydate ==>", error));
		},
		// filterByTypeAndDate(type, date) {
		// 	console.log("date in here is", date);
		// 	console.log("type in here is", type);
		// 	const { baseUrl, part, order, q, key, maxResults } = this.api;
		// 	const TYPE_DATE_FILTER_URL = `${baseUrl}part=${part}&order=${order}&q=${q}&key=${key}&maxResults=${maxResults}&type=${type}&publishedAfter=${date}`;
		// 	console.log("TYPE_DATE_FILTER_URL", TYPE_DATE_FILTER_URL);
		// 	this.results = [];
		// 	this.getSearchResult(TYPE_DATE_FILTER_URL);
		// },
	},
};
</script>

<template>
	<Layout>
		<Filters />
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
