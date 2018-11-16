'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('index')

Route.get('/', async({ response }) => {
  return response.redirect('/todos')
})

Route.get('/todos', 'TodoController.index').as('todos.index')
Route.post('/todos', 'TodoController.store').as('todos.store').validator('StoreTodo')
Route.get('/todos/:id/edit', 'TodoController.edit').as('todos.edit')
Route.patch('/todos/:id', 'TodoController.update').as('todos.update').validator('UpdateTodo')
Route.delete('/todos/:id', 'TodoController.destroy').as('todos.delete')


