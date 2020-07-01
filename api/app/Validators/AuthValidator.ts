import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthValidator {
	constructor(private ctx: HttpContextContract) {}

	public schema = schema.create({
		email: schema.string({ trim: true }, [rules.email()]),
		password: schema.string({ trim: true })
	})

	public cacheKey = this.ctx.routeKey

	public messages = {
		'email.required': 'Veuillez saisir une adresse email valide',
		'email.password': 'Veuillez saisir une adresse email valide'
	}
}
