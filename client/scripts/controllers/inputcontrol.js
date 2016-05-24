chickApp.controller('InputController',  ['$scope', '$log', '$http', '$window','ClientService',function($scope, $log, $http, $window,  ClientService) {
    //Independent Variables
    var clientService = ClientService;

    $scope.boolForTernary = false;

   $scope.toggleBoolean = function (value) {
       $scope.boolForTernary = !$scope.boolForTernary;
       console.log($scope.boolForTernary)
   };


    $scope.toBioList = function(){
      $window.location.href = '#bioList';
    };

    $scope.toCoreList = function(){
      $window.location.href = '#bioList';
    };

    $scope.toDevelopmentList = function(){
      $window.location.href = '#bioList';
    };

    $scope.toInterestsList = function(){
      $window.location.href = '#bioList';
    };


  $scope.inputData = {};
  $scope.minMax = {};
  $scope.getDefaults = function() {
    $http.get("/defaults").then(function(response){
        defaultVariables = response.data[0];
        $scope.minMax = defaultVariables;

        $scope.bio = defaultVariables.bio;
        $scope.coreBeliefs = defaultVariables.coreBeliefs;
        $scope.development = defaultVariables.development;
        $scope.interests = defaultVariables.interests;
        console.log($scope.bio, "bio");
        console.log($scope.coreBeliefs, "coreBeliefs");
        console.log($scope.development, "development");
        console.log($scope.interests, "interests");
    });
  };
  $scope.getDefaults();

  var service = ClientService;



}]); //InputController

//
// chickApp.controller('BioController',['$scope','$http','$window', function($scope, $http, $window){
//   $scope.pancake=100;
//   console.log($scope.pancake, "pancakes")
// }])

chickApp.controller('BioController',  ['$scope', '$http', '$window','ClientService',function($scope, $http, $window, ClientService) {

    $scope.boolForTernary = false;

   $scope.toggleBoolean = function (value) {
       $scope.boolForTernary = !$scope.boolForTernary;
       console.log($scope.boolForTernary)
   };

    $scope.getDefaults = function() {
      $http.get("/defaults").then(function(response){
          $scope.defaultVariables = response.data[0];
      });
    };

    $scope.getDefaults();

}]);

chickApp.controller('CoreController',  ['$scope', '$http', '$window','ClientService',function($scope, $http, $window, ClientService) {
  var clientService = ClientService;

    $scope.getDefaults = function() {
      $http.get("/defaults").then(function(response){
          $scope.defaultVariables = response.data[0];
      });
    };

    $scope.getDefaults();

}]);

chickApp.controller('DevelopmentController',  ['$scope', '$http', '$window','ClientService',function($scope, $http, $window, ClientService) {
  var clientService = ClientService;

    $scope.getDefaults = function() {
      $http.get("/defaults").then(function(response){
          $scope.defaultVariables = response.data[0];
      });
    };

    $scope.getDefaults();

}]);

chickApp.controller('InterestsController',  ['$scope', '$http', '$window','ClientService',function($scope, $http, $window, ClientService) {
  var clientService = ClientService;

    $scope.getDefaults = function() {
      $http.get("/defaults").then(function(response){
          $scope.defaultVariables = response.data[0];
      });
    };

    $scope.getDefaults();

}]);
