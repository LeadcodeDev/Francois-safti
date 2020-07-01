<template>
	<div class="slogan" :style="{ backgroundColor, color }">
		<h4>{{ hook }}</h4>
	</div>
</template>

<script>
export default {
	name: 'Slogan',
	props: {
		hook: String,
		color: String,
		backgroundColor: String
	}
}
</script>

<style scoped lang="scss" src="./slogan.scss"></style>
