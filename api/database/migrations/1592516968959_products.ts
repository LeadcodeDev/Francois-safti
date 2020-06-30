import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
	protected tableName = 'products'

	public async up() {
		this.schema.table(this.tableName, (table) => {
			table.integer('material').unsigned().references('id').inTable('materials')
			table.integer('typesOfProduct').unsigned().references('id').inTable('types_of_products')
			table.integer('typesOfTransaction').unsigned().references('id').inTable('types_of_transactions')
			table.integer('exhibitionStay').unsigned().references('id').inTable('exhibition_stays')
			table.integer('typesOfHeating').unsigned().references('id').inTable('types_of_heatings')
			table.integer('heatingMechanism').unsigned().references('id').inTable('heating_mechanisms')
			table.integer('heatingMode').unsigned().references('id').inTable('heating_modes')
			table.integer('coverageState').unsigned().references('id').inTable('states')
			table.integer('standing').unsigned().references('id').inTable('states')
			table.integer('generalState').unsigned().references('id').inTable('states')
			table.integer('rooms').unsigned().references('id').inTable('rooms')
		})
	}

	public async down() {
		this.schema.table(this.tableName, (table) => {
			table.dropColumn('material')
			table.dropColumn('exhibitionStay')
			table.dropColumn('typesOfTransaction')
			table.dropColumn('exhibitionStay')
			table.dropColumn('typesOfHeating')
			table.dropColumn('heatingMechanism')
			table.dropColumn('heatingMode')
			table.dropColumn('coverageState')
			table.dropColumn('standing')
			table.dropColumn('generalState')
			table.dropColumn('rooms')
		})
	}
}
