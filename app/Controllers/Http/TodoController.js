'use strict'

const Todo = use('App/Models/Todo')
const { validate } = use('Validator')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with todos
 */
class TodoController {
  /**
   * Show a list of all todos.
   * GET todos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const todos = await Todo.all()

    return view.render('index', {
      todos: todos.toJSON()
    })
  }

  /**
   * Render a form to be used for creating a new todo.
   * GET todos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new todo.
   * POST todos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, session, response }) {
    // const rules = {
    //   addTodo: 'required|min:3',
    // }

    // const messages = {
    //   'addTodo.required': 'The add todo field is required',
    //   'addTodo.min': 'The add todo field requires at least 3 characters',
    // }

    // const validation = await validate(request.all(), rules, messages)

    // if (validation.fails()) {
    //   session
    //     .withErrors(validation.messages())
    //     .flashAll()

    //   return response.redirect('back')
    // }

    const todo = await Todo.create({
      title: request.input('addTodo')
    })

    session.flash({ successMessage: 'Todo was added!' })
    return response.redirect('back')
  }

  /**
   * Display a single todo.
   * GET todos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing todo.
   * GET todos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const todo = await Todo.findOrFail(params.id)

    return view.render('edit', { todo })
  }

  /**
   * Update todo details.
   * PUT or PATCH todos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, session, request, response }) {
    const todo = await Todo.findOrFail(params.id)
    todo.title = request.input('editTodo')
    todo.completed = request.input('completedCheck') === 'on' ? true : false
    await todo.save()

    session.flash({ successMessage: 'Todo was updated successfully!' })
    return response.route('todos.index')
  }

  /**
   * Delete a todo with id.
   * DELETE todos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, session, request, response }) {
    const todo = await Todo.findOrFail(params.id)
    await todo.delete()

    session.flash({ successMessage: 'Todo was deleted successfully!' })
    return response.redirect('back')
  }
}

module.exports = TodoController
