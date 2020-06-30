import ProductResourceValidator from 'App/Validators/ProductResourceValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TypesOfProduct from 'App/Models/products/TypesOfProduct'

export default class TypesOfProductsController {
	public async get({ params }: HttpContextContract) {
		return await TypesOfProduct.find(params.id)
	}

	public async list() {
		return await TypesOfProduct.all()
	}

	public async create({ request }: HttpContextContract) {
		const { label } = await request.validate(ProductResourceValidator)
		return await TypesOfProduct.create({ label })
	}

	public async update({ params, request }: HttpContextContract) {
		const datas = await request.validate(ProductResourceValidator)
		await TypesOfProduct.query().where('id', params.id).update(datas)
	}

	public async delete({ params }: HttpContextContract) {
		const resource = await TypesOfProduct.find(params.id)
		resource?.delete()
	}
}
