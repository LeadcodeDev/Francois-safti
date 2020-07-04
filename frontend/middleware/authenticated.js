export default function ({ store, redirect }) {
	if (!store.state.auth.member.logged) {
		return redirect('/login')
	}
}
