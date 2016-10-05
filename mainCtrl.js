angular.module("practiceApp").controller("mainCtrl", function($scope){
  // this is called setting up our controller
// the controller takes two arguments, mainCtrl and a call back function
// $scope allows you to display every variable very easily on the view, as is, it is two way binding
// next link the controller to the index.html body tag

function($scope, mainServ){

// this is where most of our code will go
// dont need to write var in the $scope or worry about the local and the global scope becuase it is already scoped to our app.js
$scope.test ="this is a test";

// two way binding measn we take our data from js file and push it to the view. it also works in the opposite diection ex: put a text input in our html then use next angular directive: ng-model, it works the same as the double curly brackets and will be put on the view the same as {{test}} was

// it will change with the test value if you change it on the view screen

$scope.checktest = function(){
  console.log($scope.test);
}

//
// $scope.data = [{
// name: "Lance",
// hobby: "Choppin' Wood"
// }, {
//   name: "Nick",
//   hobby: "teachin' code"
// },{
//   name: "Andy",
//   hobby: "Shreddin' powder"
// }];

$scope.getThings = function(){

mainServ.getThings()
.then(function(response){
  $scope.data=response;
});
}
// when the controller runs wt willtell it to go to the main serv and tell it to getThings, thenit wil have a promise that whenit comes back with the response it will do the next step

// reference where we awnt to go to get this i.e mainServ

// two way binding between the controller and the service not the controller and the view

});
