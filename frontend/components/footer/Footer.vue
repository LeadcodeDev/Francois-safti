<template>
	<footer>
		<div class="container">
			<b-row class="py-5">
				<b-col md-5>
					<div v-if="auth">
						<a href="" @click.prevent="logout">Logout</a>
						<nuxt-link to="/admin">Tableau de bord</nuxt-link>
					</div>
					<nuxt-link v-else to="/login">Connexion</nuxt-link>
				</b-col>
				<b-col md-5>d</b-col>
			</b-row>
		</div>
		<div class="copyright">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vero aperiam nam quam laudantium excepturi, magni natus a illum quia deleniti corporis dolore voluptas praesentium porro rem aut minima eveniet?</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	computed: {
		auth() {
			return this.$store.state.authentication.auth.isLogin
		}
	},
	methods: {
		logout: async function () {
			this.$store.commit('authentication/remove')
		}
	}
}
</script>

<style scoped lang="scss" src="./footer.scss"></style>
