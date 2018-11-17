'use strict'

/*
|--------------------------------------------------------------------------
| TodoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Todo = use('App/Models/Todo')

class TodoSeeder {
  async run () {
    // await Factory
    //   .model('App/Models/Todo')
    //   .createMany(5)

    await Todo.create({
      user_id: 1,
      title: 'Finish AdonisJS screencast'
    })

    await Todo.create({
      user_id: 1,
      title: 'Work out'
    })

    await Todo.create({
      user_id: 2,
      title: 'Take over world'
    })
  }
}

module.exports = TodoSeeder
