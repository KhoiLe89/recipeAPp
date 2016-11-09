var mongoose = require("./connection.js")

var IngredientSchema = mongoose.Schema({
  name: String,
})

var RecipeSchema = mongoose.Schema({
  name: String,
  ingredients: [IngredientSchema]
})

var Ingredient = mongoose.model("Ingredient", IngredientSchema)

var Recipe = mongoose.model("Recipe", RecipeSchema)

module.exports = {
  Ingredient, Recipe
}
