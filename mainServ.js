angular.module("practiceApp").controller("mainServ", function($http){

  // http is a parameter

  this.test = "anything";

  this.getThings = function() {
    return $http({
      // used the same as ajax where we can post, delete data, url, id, etc.
    // $.ajax({
      method: "GET",
      url: "http..."
    }).then(function(response){
      return response
    })
  }

// the object in the http request is the method and url lines.
// the promise is the .then wit hthe function lineswhen we returning the response we are returning it to http and return back thourgh the function back to the controller. the response we get from the service get sent back to the mainCtrl mainServ lines. the reponse will be sent back to the data and the data that we getcan be repeated back throough 
