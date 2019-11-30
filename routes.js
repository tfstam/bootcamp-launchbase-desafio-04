const express = require('express')
const recipes = require('./data')
const routes = express.Router()

// client
routes.get('/', function (req, res) {
  return res.render('home', { recipes })
})

routes.get('/about', function(req, res) {
  return res.render('about')
})

routes.get('/recipes', function(req, res) {
  return res.render('recipes', { recipes })
})

routes.get("/recipes/:index", function (req, res) {
  const recipeData = [...recipes] // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index
  const recipe = recipeData[recipeIndex]

  return res.render('recipe', { recipe })
})



module.exports = routes