import AuthValidator from 'App/Validators/AuthValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
	public async login({ auth, request }: HttpContextContract) {
		const { email, password, remember_user } = await request.validate(AuthValidator)
		auth.attempt(email, password, remember_user)

		return auth.user
	}

	public async logout({ auth }: HttpContextContract) {
		await auth.logout()
	}
}
