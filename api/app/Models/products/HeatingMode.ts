import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class HeatingMode extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public label: string
}
