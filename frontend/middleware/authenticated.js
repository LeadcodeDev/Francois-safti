export default function ({ store, redirect }) {
	if (!store.state.authentication.auth.isLogin) {
		return redirect('/login')
	}
}
