import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TypesOfProduct extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public label: string
}
