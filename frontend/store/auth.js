import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

export const state = () => ({
	member: {
		user: {},
		logged: false
	}
})

export const plugins = createPersistedState({
	storage: {
		getItem: (key) => Cookies.get(key),
		setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
		removeItem: (key) => Cookies.remove(key)
	}
})

export const mutations = {
	set: function (state, { user, logged }) {
		state.member = { ...state.member, user, logged }
	},
	reload: function (state, { user, logged }) {
		state.member = { ...state.member, user, logged }
		console.log('state:', state)
		console.log('user:', user)
		console.log('logged:', logged)
	},
	remove: function (state) {
		this.$axios.get('http://localhost:3333/api/authentication/logout', { withCredentials: true })
		state.member = { ...state.member, user: {}, logged: false }
	}
}
