<template>
	<div>
		<slogan hook="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, sit!" backgroundColor="#e65e21" color="white"></slogan>
		<div class="container py-5">
			<b-form class="py-5">
				<b-form-group label="Adresse email" label-for="email">
					<b-form-input name="email" v-model="form.email" type="email" required placeholder="Entrez votre adresse email"></b-form-input>
				</b-form-group>

				<b-form-group label="Mot de passe" label-for="input-2">
					<b-form-input name="password" v-model="form.password" type="password" required placeholder="Entrez votre mot de passe"></b-form-input>
				</b-form-group>

				<b-form-group>
					<b-button @click.prevent="handleSubmit" variant="primary">Connexion</b-button>
				</b-form-group>
			</b-form>
		</div>
		<footer-bottom></footer-bottom>
	</div>
</template>

<script>
import Slogan from '../components/slogan/Slogan.vue'
import Footer from '../components/footer/Footer.vue'
import Axios from 'axios'

export default {
	layout: 'master',
	middleware: 'unauthenticated',
	data() {
		return {
			form: {
				email: '',
				password: ''
			}
		}
	},
	methods: {
		logout: async function () {
			this.$store.commit('authentication/remove')
		},
		handleSubmit: async function () {
			const { status, data } = await Axios.post('http://localhost:3333/api/authentication/login', this.form, { withCredentials: true })
			if (status === 200) {
				console.log(data)
				this.$store.commit('authentication/set', {
					user: data,
					isLogin: true
				})
				this.$router.push('/')
			}
		}
	},
	components: {
		slogan: Slogan,
		'footer-bottom': Footer
	}
}
</script>
