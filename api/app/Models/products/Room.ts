import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Room extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public level: number

	@column()
	public label: string

	@column()
	public size: number

	@column()
	public comments: string
}
