export default {
	/*
	 ** Nuxt rendering mode
	 ** See https://nuxtjs.org/api/configuration-mode
	 */
	mode: 'universal',
	/*
	 ** Nuxt environment settings
	 ** See https://fr.nuxtjs.org/api/configuration-env/
	 */
	env: {
		api: process.env.NODE_ENV === 'dev' ? 'http://localhost:3333/api' : 'https://my-domain.com'
	},

	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: 'server',
	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	/*
	 ** Global CSS
	 */
	css: ['@/assets/icons/themify-icons/themify-icons.css'],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,

	/**
	 * Router properties
	 * See https://fr.nuxtjs.org/guide/routing#middleware
	 */
	router: {},

	/**
	 * Pages transition
	 * See https://fr.nuxtjs.org/api/configuration-transition/
	 */
	pageTransition: 'page',
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc : https://github.com/nuxt-community/modules/tree/master/packages/toast
		'@nuxtjs/toast'
	],
	/**
	 ** Toast module settings
	 */
	toast: {
		position: 'bottom-left',
		duration: 5000
	},
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {}
}
