var Schema = require("./schema.js")

var Recipe = Schema.Recipe
var Ingredient = Schema.Ingredient //we don't understand why we do this

Recipe.remove({}, err => {
  if (err) {
    console.log(err)
  }
})

Ingredient.remove({}, err => {
  if (err) {
    console.log(err)
  }
})
var noodle = Ingredient.create({name: "Noodles"})
var sauce = Ingredient.create({name: "Tomato Sauce"})

var chicken = Ingredient.create({name: "Chicken"})
var flour = Ingredient.create({name: "Flour"})

Recipe.create({name: "Lasagna", ingredients: [noodle, sauce]})
Recipe.create({name: "Fried Chicken", ingredients: [chicken, flour]})

process.exit()
