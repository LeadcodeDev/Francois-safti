import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
	protected tableName = 'products'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			// General informations
			table.integer('user_id').unsigned().references('id').inTable('users')
			table.string('reference').notNullable()
			table.string('mandat').notNullable()
			table.string('avatar').nullable()

			// Location in the world
			table.string('postalcode')
			table.string('city')
			table.integer('distanceOfTrade')
			table.integer('distanceOfSchool')
			table.boolean('subdivision')

			// Price
			table.integer('price')
			table.integer('financialTaxes')
			table.integer('electricalAnsWaterCharges')

			// Interior fitting
			table.integer('room')
			table.integer('bedroom')
			table.integer('waterroom')
			table.integer('wc')
			table.string('kitchen')
			table.boolean('fullFoot')
			table.integer('level')
			table.integer('hotWaterSize')
			table.integer('hotWaterDate')
			table.string('interiorState')
			table.string('firePlace')
			table.boolean('stove')

			// Exterior fitting
			table.string('garden')
			table.string('coverage')
			table.integer('dependancies')
			table.string('windows')
			table.string('shutters')
			table.string('insulation')
			table.string('sanitation')

			// Area
			table.string('habitableArea')
			table.string('garageArea')
			table.string('lifeArea')
			table.string('groundArea')
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
