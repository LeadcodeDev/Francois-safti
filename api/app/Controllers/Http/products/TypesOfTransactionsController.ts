import ProductResourceValidator from 'App/Validators/ProductResourceValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TypesOfTransaction from 'App/Models/products/TypesOfTransaction'

export default class TypesOfTransactionsController {
	public async get({ params }: HttpContextContract) {
		return await TypesOfTransaction.find(params.id)
	}

	public async list() {
		return await TypesOfTransaction.all()
	}

	public async create({ request }: HttpContextContract) {
		const { label } = await request.validate(ProductResourceValidator)
		return await TypesOfTransaction.create({ label })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(ProductResourceValidator)
		await TypesOfTransaction.query().where('id', params.id).update(datas)
	}

	public async delete({ params }: HttpContextContract) {
		const resource = await TypesOfTransaction.find(params.id)
		resource?.delete()
	}
}
