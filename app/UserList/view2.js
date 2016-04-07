'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'UserList/view2.html',
    controller: 'userController'
  });
}])

.controller('userController', function($scope, $http){

  $http.get(url).success(function(response){
    $scope.listOfUsers = response;
    console.log($scope.listOfUsers);
    //$scope.listProducts = response.toJSON();
  });
  //
  //$scope.listProducts = [
  //    {
  //    address : 'yoooo'
  //  },
  //    {
  //    address : 'yaaaa'
  //  }
  //  ]
});


var url ='http://localhost:8080/elementary/players';
