<!-- @format -->

<script>
import appConfig from "@/app.config";
import Layout from "@layout";
import SearchResults from "@components/search-results";
import { eventBus } from "@/main";
import moment from "moment";
import { _searchAll, _loadMore, _filterByType, _filterByDate } from "@api";
import Spinner from "@components/spinner";
import _ from "lodash";

export default {
	page: {
		title: "Search",
		meta: [{ name: "Search", content: appConfig.description }],
	},
	components: { Layout, SearchResults, Spinner },
	data() {
		return {
			results: [],
			loading: false,
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
		// this.scroll();
	},
	created() {
		eventBus.$on("search", (searchParams) => {
			this.searchKeywordFormatted = searchParams.join(" ");
			this.keyword = searchParams.join("+");
			this.results = [];
			this.getSearchResult(this.keyword);
		});
	},
	methods: {
		getSearchResult(searchKeyword) {
			this.loading = true;
			_searchAll(searchKeyword)
				.then((res) => {
					this.results = [];
					this.results = [...this.results, ...res.data.items];
					this.results = Array.from(
						new Set(this.results.map((a) => a.etag))
					).map((id) => {
						return this.results.find((a) => a.etag === id);
					});
					this.nextPageToken = res.data.nextPageToken;
					this.loading = false;
				})
				.catch((error) => {
					console.log("ERROR in search ==>", error);
					this.loading = false;
				});
		},
		loadmore() {
			this.loading = true;
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
					this.loading = false;
				})
				.catch((error) => {
					console.log("ERROR ==>", error);
					this.loading = false;
				});
		},
		filterByType(type) {
			this.loading = true;
			this.filter.kind = "type";
			this.filter.arg = type;
			console.log("type", type);
			console.log("this.keyword", this.keyword);
			_filterByType(this.keyword, type)
				.then((res) => {
					console.log("res", res);
					this.results = [];
					this.results = [...res.data.items];
					this.results = Array.from(
						new Set(this.results.map((a) => a.etag))
					).map((id) => {
						return this.results.find((a) => a.etag === id);
					});
					this.nextPageToken = res.data.nextPageToken;
					this.loading = false;
				})
				.catch((error) => {
					console.log("ERROR in filterbytype ==>", error);
					this.loading = false;
				});
		},
		filterByDate(date) {
			this.loading = true;
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
					this.loading = false;
				})
				.catch((error) => {
					console.log("ERROR in filterbydate ==>", error);
					this.loading = false;
				});
		},
		resetFilter(arg) {
			this[arg] = "";
			document.getElementById(this.filter.arg).checked = false;
			this.getSearchResult(this.keyword);
		},
		scroll: _.debounce(() => {
			window.onscroll = () => {
				let bottomOfWindow =
					document.documentElement.scrollTop + window.innerHeight ===
					document.documentElement.offsetHeight;
				if (bottomOfWindow && window.innerWidth > 600) {
					this.loadmore();
				}
			};
		}, 2000),
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
			<div class="filterContainer">
				<select v-model="selectedType" id="typeFilter">
					<option value="" disabled>Type</option>
					<option v-for="(value, text) in types" :value="value" :key="value">{{
						text
					}}</option>
				</select>
			</div>
			<div class="filterContainer">
				<select v-model="selectedRange">
					<option value="" disabled>Upload Date</option>
					<option v-for="(value, text) in ranges" :value="value" :key="value">{{
						text
					}}</option>
				</select>
				<!-- <button @click="resetFilter('selectedRange')">Reset</button> -->
			</div>
		</div>
		<div class="filters-desktop">
			<button
				class="filterButton"
				@click.prevent="$event.target.classList.toggle('active')"
			>
				<inline-svg
					class="filterButton__icon"
					:src="require('@assets/svg/filter.svg')"
				/>
				<span class="filterButton__text">filter</span>
			</button>
			<div class="filters-desktop__wrapper">
				<div class="filter-desktop">
					<h4>Type</h4>
					<div class="filter-cell" v-for="(value, text) in types" :key="value">
						<input
							name="type"
							type="radio"
							:id="value"
							:value="value"
							v-model="selectedType"
						/>
						<label :for="value">
							{{ text }}
						</label>
						<button class="resetFilterBtn" @click="resetFilter">
							<inline-svg
								class="resetFilterBtn__icon"
								:src="require('@assets/svg/cancel.svg')"
							/>
						</button>
					</div>
				</div>
				<div class="filter-desktop">
					<h4>Upload Date</h4>
					<div class="filter-cell" v-for="(value, text) in ranges" :key="value">
						<input
							name="type"
							type="radio"
							:id="value"
							:value="value"
							v-model="selectedRange"
						/>
						<label :for="value">
							{{ text }}
						</label>
						<button class="resetFilterBtn" @click="resetFilter">
							<inline-svg
								class="resetFilterBtn__icon"
								:src="require('@assets/svg/cancel.svg')"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
		<Spinner v-if="loading" />
		<SearchResults
			v-else
			:loading="loading"
			:results="results"
			:searchKeywordFormatted="searchKeywordFormatted"
		/>
		<!-- <scroll-loader
			class="desktop-loader"
			:loader-method="loadmore"
			:loader-enable="false"
		>
			<Spinner />
		</scroll-loader> -->

		<button
			v-if="results.length > 0"
			:nextPageToken="nextPageToken"
			@click="loadmore"
			class="loadmore"
			:disabled="loading"
		>
			Show More Items
		</button>
	</Layout>
</template>

<style lang="scss">
.filters {
	border-bottom: 1px solid $color-border;
	display: flex;
	padding: 2%;
	@include breakpoint(laptop) {
		display: none;
	}
}
.filterContainer {
	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		background: transparent;
		background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
		background-repeat: no-repeat;
		background-position-x: 100%;
		background-position-y: 50%;
		border: 1px solid #dfdfdf;
		border-radius: 2px;
		margin-right: 2rem;
		padding: 1rem;
		padding-right: 2rem;
	}
}
.loadmore {
	width: 100%;
	height: 3em;
	margin-top: 2em;
	background-color: #fff;
	border: none;
	border-top: 1px solid #ccc;
	cursor: pointer;
	@extend %font-content;
	@include breakpoint(laptop) {
		display: none;
	}
}
.filters-desktop {
	display: none;
	border-bottom: 1px solid $color-border;
	padding: 2%;
	background-color: $color-body-bg;
	@include breakpoint(laptop) {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		flex-direction: column;
	}
	&__wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		height: 0;
		transition: 0.5s all ease;
		overflow: hidden;
		/* align-items: flex-end; */
	}
}
.filter-desktop {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 20%;
	padding: 10%;
	@extend %font-subheading;
	h4 {
		color: $color-heading-text;
		border-bottom: 1px solid $color-border;
		padding-bottom: 3%;
		width: 100%;
	}
	label {
		cursor: pointer;
	}
	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		-ms-appearance: none;
		-o-appearance: none;
		appearance: none;
		position: absolute;
	}
	input[type="radio"]:checked {
		~ button {
			display: block;
		}
		~ label {
			color: black;
			font-weight: bold;
		}
	}
}
.filterButton {
	border: none;
	background-color: transparent;
	cursor: pointer;
	&__icon {
		width: 14px;
		height: 14px;
		margin-right: 6px;
		fill: $color-text;
		pointer-events: none;
	}
	&__text {
		text-transform: uppercase;
		pointer-events: none;
		color: $color-text;
	}
	&.active {
		.filterButton {
			&__icon {
				fill: #000;
			}
			&__text {
				color: #000;
			}
		}
		+ .filters-desktop__wrapper {
			height: 200px;
		}
	}
}
.filter-cell {
	padding: 3%;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.resetFilterBtn {
	background-color: transparent;
	border: none;
	display: none;
	cursor: pointer;
	&__icon {
		width: 10px;
	}
}
.desktop-loader {
	display: none;
	@include breakpoint(laptop) {
		display: block;
	}
}
</style>
