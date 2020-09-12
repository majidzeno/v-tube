<!-- @format -->

<script>
import appConfig from "@/app.config";
import Layout from "@layout";
import SearchResults from "@components/search-results";
import { eventBus } from "@/main";
import moment from "moment";
import { _searchAll, _loadMore, _filterByType, _filterByDate } from "@api";
import Spinner from "@components/spinner";

export default {
	page: {
		title: "Search",
		meta: [{ name: "Search", content: appConfig.description }],
	},
	components: { Layout, SearchResults, Spinner },
	data() {
		return {
			results: [
				{
					kind: "youtube#searchResult",
					etag: "irKAbg-OaqIUlfIuZJWusFk_tFI",
					id: {
						kind: "youtube#channel",
						channelId: "UCx27Pkk8plpiosF14qXq-VA",
					},
					snippet: {
						publishedAt: "2019-01-15T23:58:20Z",
						channelId: "UCx27Pkk8plpiosF14qXq-VA",
						title: "SpongeBob SquarePants Official",
						description:
							"The SpongeBob Official Channel is the best place to see Nickelodeon's SpongeBob SquarePants on YouTube! Come follow the adventures of the world's most ...",
						thumbnails: {
							default: {
								url:
									"https://yt3.ggpht.com/-pSKmnh7ulHU/AAAAAAAAAAI/AAAAAAAAAAA/gZGYOqsSgOY/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
							},
							medium: {
								url:
									"https://yt3.ggpht.com/-pSKmnh7ulHU/AAAAAAAAAAI/AAAAAAAAAAA/gZGYOqsSgOY/s240-c-k-no-mo-rj-c0xffffff/photo.jpg",
							},
							high: {
								url:
									"https://yt3.ggpht.com/-pSKmnh7ulHU/AAAAAAAAAAI/AAAAAAAAAAA/gZGYOqsSgOY/s800-c-k-no-mo-rj-c0xffffff/photo.jpg",
							},
						},
						channelTitle: "SpongeBob SquarePants Official",
						liveBroadcastContent: "none",
						publishTime: "2019-01-15T23:58:20Z",
					},
				},
				{
					kind: "youtube#searchResult",
					etag: "lTaKUNaZMJZ5KpgJnNFV5KaYGEI",
					id: {
						kind: "youtube#video",
						videoId: "XvKfYI4IBkQ",
					},
					snippet: {
						publishedAt: "2020-09-12T02:00:07Z",
						channelId: "UCTJDdO9klWGpTekswnXreGQ",
						title: "SpongeBob SquarePants | Film Horor | Nickelodeon Bahasa",
						description:
							"Spongebob dan Patrick merasa mereka cukup dewasa untuk menonton film horor menakutkan. Apakah mereka cukup berani? #nickelodeon ...",
						thumbnails: {
							default: {
								url: "https://i.ytimg.com/vi/XvKfYI4IBkQ/default.jpg",
								width: 120,
								height: 90,
							},
							medium: {
								url: "https://i.ytimg.com/vi/XvKfYI4IBkQ/mqdefault.jpg",
								width: 320,
								height: 180,
							},
							high: {
								url: "https://i.ytimg.com/vi/XvKfYI4IBkQ/hqdefault.jpg",
								width: 480,
								height: 360,
							},
						},
						channelTitle: "Nickelodeon Bahasa",
						liveBroadcastContent: "none",
						publishTime: "2020-09-12T02:00:07Z",
					},
				},
				{
					kind: "youtube#searchResult",
					etag: "ebxPYWhKXFYZmPiY2mDPN7qOINI",
					id: {
						kind: "youtube#playlist",
						playlistId: "PLTjHc6tMisa9wfg48XCrny_q3kntthafI",
					},
					snippet: {
						publishedAt: "2015-02-09T11:36:22Z",
						channelId: "UCHiceVclOIFCgAcveITRLLw",
						title: "SpongeBob SquarePants | Every Day at 4pm",
						description:
							"Come follow the adventures of the world's most lovable sponge and his starfish sidekick! Though they have the best intentions, SpongeBob and Patrick are ...",
						thumbnails: {
							default: {
								url: "https://i.ytimg.com/vi/POKv99u5jG4/default.jpg",
								width: 120,
								height: 90,
							},
							medium: {
								url: "https://i.ytimg.com/vi/POKv99u5jG4/mqdefault.jpg",
								width: 320,
								height: 180,
							},
							high: {
								url: "https://i.ytimg.com/vi/POKv99u5jG4/hqdefault.jpg",
								width: 480,
								height: 360,
							},
						},
						channelTitle: "Nickelodeon UK",
						liveBroadcastContent: "none",
						publishTime: "2015-02-09T11:36:22Z",
					},
				},
				{
					kind: "youtube#searchResult",
					etag: "SPRXSH8MsPvTYq6Y1UEimrUhiek",
					id: {
						kind: "youtube#video",
						videoId: "XaYifgsoO0I",
					},
					snippet: {
						publishedAt: "2020-07-02T14:00:16Z",
						channelId: "UCZTLU39XbfN04FBXVc0vD1g",
						title:
							"SpongeBob | Nickelodeon Arabia | سبونج بوب | لحظات كرابي باتي 1",
						description:
							"تحدث أشياء غير طبيعية عندما يتجمع الجميع في أفضل مطعم في المدينة. اشترك الآن لمشاهدة أفضل الأحداث والمغامرات المسلية من عروضكم المفضلة مثل سبونج بوب سكوير ...",
						thumbnails: {
							default: {
								url: "https://i.ytimg.com/vi/XaYifgsoO0I/default.jpg",
								width: 120,
								height: 90,
							},
							medium: {
								url: "https://i.ytimg.com/vi/XaYifgsoO0I/mqdefault.jpg",
								width: 320,
								height: 180,
							},
							high: {
								url: "https://i.ytimg.com/vi/XaYifgsoO0I/hqdefault.jpg",
								width: 480,
								height: 360,
							},
						},
						channelTitle: "Nickelodeon Arabia",
						liveBroadcastContent: "none",
						publishTime: "2020-07-02T14:00:16Z",
					},
				},
				{
					kind: "youtube#searchResult",
					etag: "-XLfuisLnTmUKsvSeLUjpHBoCck",
					id: {
						kind: "youtube#video",
						videoId: "IsYZ_k4VBUs",
					},
					snippet: {
						publishedAt: "2020-08-06T13:00:08Z",
						channelId: "UCx27Pkk8plpiosF14qXq-VA",
						title:
							"Meet Patricia! (Who is Definitely Not Patrick) 💄🌟Full Scene | SpongeBob",
						description:
							"Meet Patricia - SpongeBob's new friend (NOT girlfriend) who is definitely not Patrick Star! Everyone falls head over fins for Patricia, even Squidward!",
						thumbnails: {
							default: {
								url: "https://i.ytimg.com/vi/IsYZ_k4VBUs/default.jpg",
								width: 120,
								height: 90,
							},
							medium: {
								url: "https://i.ytimg.com/vi/IsYZ_k4VBUs/mqdefault.jpg",
								width: 320,
								height: 180,
							},
							high: {
								url: "https://i.ytimg.com/vi/IsYZ_k4VBUs/hqdefault.jpg",
								width: 480,
								height: 360,
							},
						},
						channelTitle: "SpongeBob SquarePants Official",
						liveBroadcastContent: "none",
						publishTime: "2020-08-06T13:00:08Z",
					},
				},
				{
					kind: "youtube#searchResult",
					etag: "krPie-ztntsiGxInaAMSO5CEIdM",
					id: {
						kind: "youtube#video",
						videoId: "04N8-RCaLrM",
					},
					snippet: {
						publishedAt: "2019-06-27T08:00:00Z",
						channelId: "UCTJDdO9klWGpTekswnXreGQ",
						title:
							"SpongeBob SquarePants | Cinta tetangga | Nickelodeon Bahasa",
						description:
							"Siapa yang tidak mencintai tetangganya? #nickelodeon #nickelodeonbahasa Langganan sekarang untuk melihat semua momen terbaik dan adegan lucu dari ...",
						thumbnails: {
							default: {
								url: "https://i.ytimg.com/vi/04N8-RCaLrM/default.jpg",
								width: 120,
								height: 90,
							},
							medium: {
								url: "https://i.ytimg.com/vi/04N8-RCaLrM/mqdefault.jpg",
								width: 320,
								height: 180,
							},
							high: {
								url: "https://i.ytimg.com/vi/04N8-RCaLrM/hqdefault.jpg",
								width: 480,
								height: 360,
							},
						},
						channelTitle: "Nickelodeon Bahasa",
						liveBroadcastContent: "none",
						publishTime: "2019-06-27T08:00:00Z",
					},
				},
				{
					kind: "youtube#searchResult",
					etag: "f8h8C0GXCndXaJrHc8VolI9ELZA",
					id: {
						kind: "youtube#video",
						videoId: "t8eZUYQI2cg",
					},
					snippet: {
						publishedAt: "2020-09-10T13:00:26Z",
						channelId: "UCx27Pkk8plpiosF14qXq-VA",
						title:
							"SpongeBob: Patty Pursuit 🍔 Full Walkthrough and Gameplay Part 2 | WORLD 7 New Update",
						description:
							"Walkthrough for Worlds 1-6 in part 1: http://at.nick.com/PattyPursuitGuide1 An update for SpongeBob: Patty Pursuit has been released featuring an extra world ...",
						thumbnails: {
							default: {
								url: "https://i.ytimg.com/vi/t8eZUYQI2cg/default.jpg",
								width: 120,
								height: 90,
							},
							medium: {
								url: "https://i.ytimg.com/vi/t8eZUYQI2cg/mqdefault.jpg",
								width: 320,
								height: 180,
							},
							high: {
								url: "https://i.ytimg.com/vi/t8eZUYQI2cg/hqdefault.jpg",
								width: 480,
								height: 360,
							},
						},
						channelTitle: "SpongeBob SquarePants Official",
						liveBroadcastContent: "none",
						publishTime: "2020-09-10T13:00:26Z",
					},
				},
				{
					kind: "youtube#searchResult",
					etag: "dd2EwgdBbWg338ouAoNQYX4uzlw",
					id: {
						kind: "youtube#video",
						videoId: "XfiSZQsMXNE",
					},
					snippet: {
						publishedAt: "2020-06-02T14:00:15Z",
						channelId: "UCx27Pkk8plpiosF14qXq-VA",
						title:
							"SpongeBob and Patrick Start a Sand Castle War! 🏰 Sand Castles in the Sand",
						description:
							'Patrick has finally crossed the line! The clearly drawn line in the sand, that is. In this full scene from the episode "Sand Castles in the Sand" we see SpongeBob ...',
						thumbnails: {
							default: {
								url: "https://i.ytimg.com/vi/XfiSZQsMXNE/default.jpg",
								width: 120,
								height: 90,
							},
							medium: {
								url: "https://i.ytimg.com/vi/XfiSZQsMXNE/mqdefault.jpg",
								width: 320,
								height: 180,
							},
							high: {
								url: "https://i.ytimg.com/vi/XfiSZQsMXNE/hqdefault.jpg",
								width: 480,
								height: 360,
							},
						},
						channelTitle: "SpongeBob SquarePants Official",
						liveBroadcastContent: "none",
						publishTime: "2020-06-02T14:00:15Z",
					},
				},
				{
					kind: "youtube#searchResult",
					etag: "u2rlfvABonVPEINQgHqu5VzRVWs",
					id: {
						kind: "youtube#video",
						videoId: "4jNsQhmKxtE",
					},
					snippet: {
						publishedAt: "2020-09-09T13:00:01Z",
						channelId: "UCx27Pkk8plpiosF14qXq-VA",
						title:
							"If SpongeBob was a BATTLE ROYALE Game! ⚔️ SpongeBob SquareOff",
						description:
							"What if you dropped SpongeBob and Patrick into a map with just a few resources and a countdown clock? Let's find out what would happen if SpongeBob was a ...",
						thumbnails: {
							default: {
								url: "https://i.ytimg.com/vi/4jNsQhmKxtE/default.jpg",
								width: 120,
								height: 90,
							},
							medium: {
								url: "https://i.ytimg.com/vi/4jNsQhmKxtE/mqdefault.jpg",
								width: 320,
								height: 180,
							},
							high: {
								url: "https://i.ytimg.com/vi/4jNsQhmKxtE/hqdefault.jpg",
								width: 480,
								height: 360,
							},
						},
						channelTitle: "SpongeBob SquarePants Official",
						liveBroadcastContent: "none",
						publishTime: "2020-09-09T13:00:01Z",
					},
				},
				{
					kind: "youtube#searchResult",
					etag: "gM7hmyw6u0MM1YVXKcz9A1IJGRc",
					id: {
						kind: "youtube#video",
						videoId: "uP-Gy7vOOn4",
					},
					snippet: {
						publishedAt: "2019-01-02T23:50:47Z",
						channelId: "UCX1HAeoE5ys5FZkYibWPYIw",
						title:
							"SpongeBob SquarePants Full Episodes 1 ❂ SpongeBob SquarePants: Plankton&#39;s Robotic Revenge - Joshua",
						description:
							"SpongeBob SquarePants Full Episodes 1 ❂ SpongeBob SquarePants: Plankton's Robotic Revenge - Joshua.",
						thumbnails: {
							default: {
								url: "https://i.ytimg.com/vi/uP-Gy7vOOn4/default.jpg",
								width: 120,
								height: 90,
							},
							medium: {
								url: "https://i.ytimg.com/vi/uP-Gy7vOOn4/mqdefault.jpg",
								width: 320,
								height: 180,
							},
							high: {
								url: "https://i.ytimg.com/vi/uP-Gy7vOOn4/hqdefault.jpg",
								width: 480,
								height: 360,
							},
						},
						channelTitle: "Joshua",
						liveBroadcastContent: "none",
						publishTime: "2019-01-02T23:50:47Z",
					},
				},
				{
					kind: "youtube#searchResult",
					etag: "okuONpMTcacm4zdl5KtAV2Qsu5k",
					id: {
						kind: "youtube#video",
						videoId: "mjmzF-qQWy8",
					},
					snippet: {
						publishedAt: "2020-09-04T14:00:10Z",
						channelId: "UCZTLU39XbfN04FBXVc0vD1g",
						title:
							"Spongebob Squarepants | Nickelodeon Arabia | سبونج بوب | !عقول طنانة",
						description:
							"يحصل سبونج بوب وباتريك على لعبة جديدة! وكالعادة، يتسببان في إحداث فوضى عارمة وإزعاج سكويدوارد. اشترك الآن لمشاهدة أفضل الأحداث والمغامرات المسلية من عروضكم ...",
						thumbnails: {
							default: {
								url: "https://i.ytimg.com/vi/mjmzF-qQWy8/default.jpg",
								width: 120,
								height: 90,
							},
							medium: {
								url: "https://i.ytimg.com/vi/mjmzF-qQWy8/mqdefault.jpg",
								width: 320,
								height: 180,
							},
							high: {
								url: "https://i.ytimg.com/vi/mjmzF-qQWy8/hqdefault.jpg",
								width: 480,
								height: 360,
							},
						},
						channelTitle: "Nickelodeon Arabia",
						liveBroadcastContent: "none",
						publishTime: "2020-09-04T14:00:10Z",
					},
				},
			],
			desktop: false,
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
		if (window.innerWidth > 600) {
			this.desktop = true;
		} else {
			this.desktop = false;
		}
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
		desktop: function() {
			console.log("desktop", this.desktop);
			if (window.innerWidth > 600) {
				this.desktop = true;
			} else {
				this.desktop = false;
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
		<scroll-loader
			class="desktop-loader"
			:loader-method="loadmore"
			:loader-enable="desktop"
		>
			<Spinner />
		</scroll-loader>

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
