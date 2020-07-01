<template>
	<header class="header-top">
		<img src="https://images.alphacoders.com/435/thumb-1920-435117.jpg" class="header-background" alt="" />
		<img src="~/assets/images/avatar.png" class="header-avatar" :class="{ loaded: isLoaded }" alt="" />
		<div class="header-container">
			<h1 class="display-2" :class="{ fadeFromRight: isLoaded }">François Delhommeau</h1>
			<p class="subtitle pt-3" :class="{ fadeFromRight: isLoaded }">Agent immobilier</p>
			<nuxt-link to="/" class="btn btn-primary btn-lg" :class="{ fadeFromRight: isLoaded }">
				Contactez-moi
			</nuxt-link>
		</div>
		<scroll-icon></scroll-icon>
	</header>
</template>

<script>
import ScrollIcon from '../scroll-icon/Scroll-icon.vue'

export default {
	name: 'Header',
	data() {
		return {
			isLoaded: false
		}
	},
	mounted() {
		this.isLoaded = true
	},
	components: {
		'scroll-icon': ScrollIcon
	}
}
</script>

<style scoped lang="scss" src="./header.scss"></style>
