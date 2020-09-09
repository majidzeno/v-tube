<!-- @format -->

<script>
import Header from "@components/header";

export default {
	components: { Header },
};
</script>

<template>
	<div>
		<Header />
		<slot />
	</div>
</template>

<style lang="scss" module>
/* @import '@design'; */
/* .container { */
/* min-width: $size-content-width-min;
  max-width: $size-content-width-max; */
/* @media screen and (min-width: 768px) {
    border: 2px solid blue;
  }

  margin: 0 auto;
} */
</style>
