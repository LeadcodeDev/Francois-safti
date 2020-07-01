<template>
	<div>
		<header-top class="mb-5"></header-top>
		<b-row class="container-fluid py-5 m-auto">
			<b-col sm="12" md="4">
				<social></social>
			</b-col>
			<b-col sm="12" md="8">
				<value></value>
			</b-col>
		</b-row>
		<slogan hook="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, sit!" backgroundColor="#e65e21" color="white"></slogan>
		<div class="container">
			<product limit="6" title="Les biens en ma possession"></product>
		</div>
		<footer-bottom></footer-bottom>
	</div>
</template>

<script>
import Header from '../components/header/Header.vue'
import Footer from '../components/footer/Footer.vue'
import Social from '../components/social/Social.vue'
import Value from '../components/value/Value.vue'
import Slogan from '../components/slogan/Slogan.vue'
import Product from '../components/product/Product.vue'

export default {
	layout: 'master',
	components: {
		'header-top': Header,
		'footer-bottom': Footer,
		social: Social,
		value: Value,
		slogan: Slogan,
		product: Product
	}
}
</script>
