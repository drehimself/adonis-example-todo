'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TodoSchema extends Schema {
  up () {
    // based on Knex: https://knexjs.org/#Schema-Building
    this.create('todos', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.boolean('completed').default(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('todos')
  }
}

module.exports = TodoSchema
