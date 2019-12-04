const data = require('../data.json')

exports.home = function (req, res) {
  return res.render('site/home.njk', { recipes: data.recipes })
}

exports.about = function(req, res) {
  return res.render('site/about.njk')
}

exports.index = function(req, res) {
  return res.render('site/index.njk', { recipes: data.recipes })
}

exports.show = function (req, res) {
  const { id } = req.params

  const foundRecipe = data.recipes.find(function(recipe) {
    return id == recipe.id
  })

  if (!foundRecipe) return res.send('Recipe not found!')

  const recipe = {
    ...foundRecipe,
  }

  return res.render('site/show.njk', { recipe })
}