<template>
	<div class="application">
		<navbar></navbar>
		<Nuxt />
	</div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue'

export default {
	name: 'master',
	components: {
		navbar: Navbar
	}
}
</script>

<style lang="scss" src="../scss/master.scss"></style>
