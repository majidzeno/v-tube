<!-- @format -->

<template>
	<div>
		<select v-model="selectedOption" @input="changeInSelect">
			<option v-for="(value, text) in options" :value="value" :key="value">{{
				text
			}}</option>
		</select>
	</div>
</template>

<script>
import { eventBus } from "../main";

export default {
	data() {
		return {
			selectedOption: "",
		};
	},
	props: {
		value: String,
		name: String,
		options: {
			type: Object,
			required: true,
		},
	},
	methods: {
		changeInSelect(event) {
			this.$emit("input", event.target.value);
			eventBus.$emit("selectedchange", {
				[this.name]: event.target.value,
			});

			this.keyword = "";
		},
	},
	mounted() {
		this.selectedOption = this.value;
	},
	watch: {
		value: function(newValue) {
			this.selectedOption = newValue;
		},
	},
};
</script>
