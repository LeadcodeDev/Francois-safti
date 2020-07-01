import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UsersValidator {
	constructor(private ctx: HttpContextContract) {}

	public schema = schema.create({
		firstname: schema.string(),
		lastname: schema.string(),
		email: schema.string({ trim: true }, [
			rules.email(),
			rules.unique({
				table: 'users',
				column: 'email'
			})
		]),
		password: schema.string({ trim: true }, [rules.confirmed()])
	})

	public cacheKey = this.ctx.routeKey

	public messages = {}
}
