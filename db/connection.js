var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/recipe")
var db = mongoose.connection
