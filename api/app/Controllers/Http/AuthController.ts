import AuthValidator from 'App/Validators/AuthValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
	public async login({ auth, request }: HttpContextContract) {
		const { email, password } = await request.validate(AuthValidator)
		const rememberUser = !!request.input('remember_me')
		await auth.attempt(email, password, rememberUser)

		return auth.user
	}

	public async logout({ auth }: HttpContextContract) {
		await auth.logout()
	}
}
