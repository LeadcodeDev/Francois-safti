<template>
	<footer>
		<div class="container">
			<b-row class="py-5">
				<b-col md-5>
					<div v-if="auth">
						<nuxt-link to="/administration">Tableau de bord</nuxt-link>
						<a href="" @click.prevent="logout">Logout</a>
					</div>
					<nuxt-link v-else to="/login">Connexion</nuxt-link>
					{{ this.$store.state.auth.member.logged }}
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
			console.log(this.$store.state.auth.member)
			return this.$store.state.auth.member.logged
		}
	},
	methods: {
		async logout() {
			this.$store.commit('auth/remove')
		}
	}
}
</script>

<style scoped lang="scss" src="./footer.scss"></style>
