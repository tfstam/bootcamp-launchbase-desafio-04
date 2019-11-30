const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  autoscape: false,
  noCache: true
})

server.get('/', function (req, res) {
  return res.render('home', { recipes })
})

server.get('/about', function(req, res) {
  return res.render('about')
})

server.get('/recipes', function(req, res) {
  return res.render('recipes', { recipes })
})

server.get("/recipes/:index", function (req, res) {
  const recipeData = [...recipes] // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index
  const recipe = recipeData[recipeIndex]

  return res.render('recipe', { recipe })
})



server.listen(5000, function () {
  console.log('Server is running')
})