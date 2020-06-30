import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class ProductValidator {
	constructor(private ctx: HttpContextContract) {}
	public schema = schema.create({
		label: schema.string({ trim: true })
	})

	public cacheKey = this.ctx.routeKey

	public messages = {}
}
