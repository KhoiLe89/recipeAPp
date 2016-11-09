angular
  .module("recipeApp", [
    "ui.router",
    "ngResource"  // so you dont hav eyou use AJAX
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .factory("RecipeFactory", [
    "$resource",
    RecipeFactoryFunction
  ])
  .controller("recipeIndex", [
    "RecipeFactory",
    recipeIndexControllerFunction
  ])
function recipeIndexControllerFunction (RecipeFactory){
  this.recipes = RecipeFactory.query()
  console.log(this.recipes)
}

function Router ($stateProvider) {
  $stateProvider
    .state("index", {
      url: "/index",
      templateUrl: "/ng-views/index.html",
      controller: "recipeIndex",
      controllerAs: "vm"
    })
}

function RecipeFactoryFunction($resource){
  return $resource("http://localhost:2000/", {}, {
    update: {method: "GET"}
  })
}
