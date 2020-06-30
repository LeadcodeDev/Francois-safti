import Image from 'App/Models/products/Image'
import Room from 'App/Models/products/Room'
import Material from 'App/Models/products/Material'
import State from 'App/Models/products/State'
import HeatingMechanism from 'App/Models/products/HeatingMechanism'
import HeatingMode from 'App/Models/products/HeatingMode'
import TypesOfHeating from 'App/Models/products/TypesOfHeating'
import ExhibitionStay from 'App/Models/products/ExhibitionStay'
import TypesOfTransaction from 'App/Models/products/TypesOfTransaction'
import TypesOfProduct from 'App/Models/products/TypesOfProduct'
import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	// General informations
	@belongsTo(() => TypesOfProduct)
	public typesOfProduct: BelongsTo<typeof TypesOfProduct>

	@belongsTo(() => TypesOfTransaction)
	public typesOfTransaction: BelongsTo<typeof TypesOfTransaction>

	@column()
	public reference: string

	@column()
	public mandat: number

	@hasMany(() => Image)
	public images: HasMany<typeof Image>

	// Location in the world
	@column()
	public postalcode: string

	@column()
	public city: string

	@column()
	public distanceOfTrade: number

	@column()
	public distanceOfSchool: number

	@column()
	public subdivision: boolean

	// Price
	@column()
	public price: number

	@column()
	public financialTaxes: number

	@column()
	public electricalAnsWaterCharges: number

	// Interior fitting
	@column()
	public room: number

	@column()
	public bedroom: number

	@column()
	public waterroom: number

	@column()
	public wc: number

	@column()
	public kitchen: string

	@column()
	public fullFoot: boolean

	@column()
	public level: number

	@belongsTo(() => ExhibitionStay)
	public exhibitionStay: BelongsTo<typeof ExhibitionStay>

	@belongsTo(() => TypesOfHeating)
	public typesOfHeating: BelongsTo<typeof TypesOfHeating>

	@belongsTo(() => HeatingMechanism)
	public heatingMechanism: BelongsTo<typeof HeatingMechanism>

	@belongsTo(() => HeatingMode)
	public heatingMode: BelongsTo<typeof HeatingMode>

	@column()
	public hotWaterSize: number

	@column()
	public hotWaterDate: number

	@column()
	public interiorState: string

	@column()
	public firePlace: string

	@column()
	public stove: boolean

	// Exterior fitting
	@column()
	public garden: string

	@column()
	public coverage: string

	@belongsTo(() => State)
	public coverageState: BelongsTo<typeof State>

	@belongsTo(() => State)
	public standing: BelongsTo<typeof State>

	@belongsTo(() => State)
	public generalState: BelongsTo<typeof State>

	@column()
	public dependancies: number

	@belongsTo(() => Material)
	public constuctMaterial: BelongsTo<typeof Material>

	@column()
	public windows: string

	@column()
	public shutters: string

	@column()
	public insulation: string

	@column()
	public sanitation: string

	// Area
	@column()
	public habitableArea: string

	@column()
	public garageArea: string

	@column()
	public lifeArea: string

	@column()
	public groundArea: string

	@hasMany(() => Room)
	public rooms: HasMany<typeof Room>

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}
