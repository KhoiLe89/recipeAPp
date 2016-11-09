var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/recipe")
var db = mongoose.connection

db.on('error', function(err){
  console.log(err);
})

db.once('open', function() {
  console.log("Connected to MongoDB!")
})
mongoose.Promise = global.Promise
module.exports = mongoose
