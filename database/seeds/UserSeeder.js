'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')


class UserSeeder {
  async run () {
    await User.create({
      username: 'blah@blah.com',
      email: 'blah@blah.com',
      password: 'password',
    })

    await User.create({
      username: 'another@another.com',
      email: 'another@another.com',
      password: 'password',
    })
  }
}

module.exports = UserSeeder
