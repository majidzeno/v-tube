<!-- @format -->

<script>
import { eventBus } from "../main";
import _ from "lodash";

export default {
	data() {
		return {
			// keyword: this.$route.query.query || "spongebob",
			keyword: "Spongebob",
			lastKeyword: "",
		};
	},
	methods: {
		resetSearch() {
			this.keyword = "";
		},
		parseSearch() {
			if (this.keyword.trim() !== "") {
				const searchParams = this.keyword.trim().split(/\s+/);
				if (searchParams[0] === this.lastKeyword) {
					this.$router
						.replace({
							name: "search",
							// path: "/search",
							query: { query: this.keyword },
						})
						.catch((error) => {
							if (error.name != "NavigationDuplicated") {
								throw error;
							}
						});
				}
				eventBus.$emit("search", searchParams);
				this.$router
					.push({
						name: "search",
						query: { query: this.keyword },
					})
					.catch((error) => {
						if (error.name != "NavigationDuplicated") {
							throw error;
						}
					});
				this.lastKeyword = this.keyword;
				this.keyword = this.$route.query.query;
			}
		},
	},
	created() {
		this.parseSearch = _.debounce(this.parseSearch, 1000);
	},
};
</script>

<template>
	<div class="searchBar">
		<inline-svg
			class="searchBar__logo"
			:src="require('../assets/svg/youtube.svg')"
		/>
		<inline-svg
			class="searchBar__logofull"
			:src="require('../assets/svg/youtube_full.svg')"
		/>

		<form class="searchBar__form form">
			<div class="form__inputContainer">
				<input
					type="text"
					v-model="keyword"
					@keydown.13.prevent="parseSearch"
					placeholder="Search"
					class="form__input"
				/>
				<button class="form__resetInput" @click.prevent="resetSearch">
					<inline-svg
						class="form__cancelIcon"
						:src="require('../assets/svg/cancel.svg')"
					/>
				</button>
			</div>

			<button @click.prevent="parseSearch" class="form__searchButton">
				<inline-svg
					class="form__searchIcon"
					:src="require('../assets/svg/searchIcon.svg')"
				/>
			</button>
		</form>
	</div>
</template>

<style lang="scss">
.searchBar {
	display: flex;
	justify-content: space-between;
	align-items: stretch;
	@include breakpoint(laptop) {
		max-width: 90%;
	}
	&__logo {
		max-width: 12%;
		width: 100%;
		padding: 3%;
		> path {
			fill: #fff;
		}
		@include breakpoint(laptop) {
			display: none;
		}
	}
	&__logofull {
		display: none;
		@include breakpoint(laptop) {
			display: block;
			height: auto;
			max-width: 100px;
			width: 100%;
		}
	}

	&__form {
		max-width: 85%;
		width: 100%;
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		padding: 4% 0%;
		@include breakpoint(laptop) {
			max-width: 80%;
			padding: 1% 0%;
		}
	}
	.form {
		&__inputContainer {
			display: flex;
			width: 100%;
			max-width: 80%;
			@include breakpoint(laptop) {
				max-width: 90%;
				align-items: center;
				margin-right: -1px;
			}
			&:focus-within {
				outline: 1px solid $color-outline;
				.form {
					&__input {
						color: $color-heading-text;
						background-color: $color-body-bg;
						border-color: $color-border;
						box-shadow: inset 0 1px 2px $color-shadow;
					}
					&__resetInput {
						background: #fff;
						border-color: $color-border;
						box-shadow: inset 0 1px 2px $color-shadow;
					}
					&__cancelIcon {
						fill: #000;
					}
				}
			}
		}
		&__searchButton {
			max-width: 20%;
			width: 100%;
			background-color: transparent;
			border: none;
			padding: 2%;
			outline: none;
			cursor: pointer;
			@include breakpoint(laptop) {
				padding: 0;
				max-width: 10%;
				background-color: #f8f8f8;
				border: 1px solid $color-border;
				border-radius: 2px;
				border-left: 0;
			}
			&:focus {
				&__searchIcon {
					outline: 1px solid $color-outline;
				}
			}
		}
		&__searchIcon {
			background-color: transparent;
			width: 40%;
			height: auto;
			path {
				fill: #fff;
			}
			@include breakpoint(laptop) {
				width: 25%;
				path {
					fill: #8b8b8b;
				}
			}
		}
		&__input {
			width: 100%;
			padding: 2%;
			border-radius: 2px;
			border-right: 0;
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			background-color: $color-main;
			color: #fff;
			border: 1px solid $color-main;
			box-shadow: inset 0 1px 2px $color-main;
			backface-visibility: hidden;
			-webkit-backface-visibility: hidden;
			&:focus {
				outline: none;
			}
			@include breakpoint(laptop) {
				padding: 1%;
				color: $color-heading-text;
				background-color: $color-body-bg;
				border-color: $color-border;
				box-shadow: inset 0 1px 2px $color-shadow;
			}
		}
		&__resetInput {
			background: #fff;
			border: 1px solid $color-border;
			box-shadow: inset 0 1px 2px $color-shadow;
			border-radius: 2px;
			border-left: 0;
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
			margin-left: -1px;
			display: flex;
			align-items: center;
			padding: 1em;
			cursor: pointer;
			background: $color-main;
			border-color: $color-main;
			box-shadow: inset 0 1px 2px $color-main;
			backface-visibility: hidden;
			-webkit-backface-visibility: hidden;
			&:focus {
				outline: none;
			}
			@include breakpoint(laptop) {
				display: none;
			}
		}
		&__cancelIcon {
			width: 0.75em;
			fill: $color-main;
			backface-visibility: hidden;
			-webkit-backface-visibility: hidden;
		}
	}
}
</style>
