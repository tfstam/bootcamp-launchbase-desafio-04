const express = require('express')
const routes = express.Router()

const recipes = require('./controllers/recipesController')
const site = require('./controllers/siteController')

// client
routes.get('/', site.home)
routes.get('/about', site.about)
routes.get('/recipes', site.index)
routes.get('/recipes/:id', site.show)

// admin
routes.get('/admin/recipes', recipes.index)
routes.get('/admin/recipes/create', recipes.create)
routes.post('/admin/recipes', recipes.post)
routes.get('/admin/recipes/:id', recipes.show)
routes.get('/admin/recipes/:id/edit', recipes.edit)
routes.put('/admin/recipes', recipes.put)
routes.delete('/admin/recipes', recipes.delete)

module.exports = routes