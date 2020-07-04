export const state = () => ({
	data: null
})

export const actions = {
	// nuxtServerInit is called by Nuxt.js before server-rendering every page
	async nuxtServerInit({ commit, dispatch }) {
		await dispatch('storeDispatchFunc')
	},

	async storeDispatchFunc({ commit }) {
		try {
			const { data } = await this.$axios.get('http://localhost:3333/api/auth', { withCredentials: true })
			commit('auth/reload', { user: data, logged: true })
		} catch (error) {
			commit('auth/reload', { user: {}, logged: false })
		}
	}
}
