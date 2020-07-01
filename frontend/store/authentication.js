import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

export const state = () => ({
	auth: {}
})

export const plugins = createPersistedState({
	storage: {
		getItem: (key) => Cookies.get(key),
		setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
		removeItem: (key) => Cookies.remove(key)
	}
})

export const mutations = {
	set: async function (state, { user, isLogin }) {
		state.auth = {
			user,
			isLogin
		}
	},
	remove: async function (state) {
		state.auth = {}
	}
}
