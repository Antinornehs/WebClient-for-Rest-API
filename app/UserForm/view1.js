'use strict';

var myApp_view1 = angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function( $routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'UserForm/view1.html',
    controller: 'userController'
  });
      //$httpProvider.defaults.useXDomain = true;
      //delete $httpProvider.defaults.headers.common['X-Requested-With'];

    }])


.controller('userController', function($scope, $http){

      $http.get(url).success(function(response){
        $scope.lissst = response;
          console.log($scope.lissst);
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
