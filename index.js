var express = require("express")
var app = express()
var mongoose = require("./db/connection.js")
var Recipe =require("./db/schema.js")
var hbs = require("hbs")


app.set("view engine", "hbs")
app.listen(2000,() => {
  console.log("express is working")
})

app.get("/", (req, res) => {
  var recipe = Recipe.find({}).then((recipe) => {
    res.send(recipe)
  })
})

app.get("/:name",(req, res) => {
  Recipe.findOne({name: req.params.name}).then((recipe) => {
    res.render("show", {recipe} )
  })

})
