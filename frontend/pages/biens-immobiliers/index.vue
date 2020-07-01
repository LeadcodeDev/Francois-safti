<template>
	<div>
		<slogan hook="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, sit!" backgroundColor="#e65e21" color="white"></slogan>
		<div class="container">
			<product limit="3" title="Mes biens à disposition"></product>
		</div>
		<footer-bottom></footer-bottom>
	</div>
</template>

<script>
import Header from '../../components/header/Header.vue'
import Footer from '../../components/footer/Footer.vue'
import Social from '../../components/social/Social.vue'
import Value from '../../components/value/Value.vue'
import Slogan from '../../components/slogan/Slogan.vue'
import Product from '../../components/product/Product.vue'

export default {
	layout: 'master',
	data() {
		return {
			slide: 0,
			sliding: null,
			product: {
				id: 1,
				title: 'Lorem ipsum, dolor sit amet.',
				price: 200000,
				image: ['https://picsum.photos/1920/1080/', 'https://picsum.photos/1920/1080/'],
				describes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit ullam,'
			}
		}
	},
	components: {
		'header-top': Header,
		'footer-bottom': Footer,
		social: Social,
		value: Value,
		slogan: Slogan,
		product: Product
	},
	methods: {
		onSlideStart(slide) {
			this.sliding = true
		},
		onSlideEnd(slide) {
			this.sliding = false
		}
	}
}
</script>
