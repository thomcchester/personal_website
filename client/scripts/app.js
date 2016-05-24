var chickApp = angular.module("chickApp", ['ngMessages', 'ngRoute']);

chickApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
        when("/bioList", {
            templateUrl: "/views/partials/bioList.html",
            controller: "BioController"
        }).
        when("/coreList", {
            templateUrl: "/views/partials/coreList.html",
            controller: "CoreController"
        }).
        when("/developmentList", {
            templateUrl: "/views/partials/developmentList.html",
            controller: "DevelopmentController"
        }).
        when("/interestsList", {
            templateUrl: "/views/partials/interestsList.html",
            controller: "InterestsController"
        }).

        otherwise({
            redirectTo: '/'
        });
}]);

var chickAppAdmin = angular.module("chickAppAdmin", ['ngMessages', 'ngRoute', 'md.data.table']);

chickAppAdmin.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider.
        when("/admin", {
            templateUrl: "/views/admin.html",
            controller: "AdminController"
        }).
        when("/emailList", {
            templateUrl: "/views/partials/emailList.html",
            controller: "EmailController"
        }).
        when("/setVariables", {
            templateUrl: "/views/partials/setVariables.html",
            controller: "SetVariablesController"
        }).
        otherwise({
            redirectTo: '/setVariables'
        });
}]);
// chickApp.run(function ($rootScope, $location) {
//   $rootScope.$on("$locationChangeStart", function (event, next, current) {
//     $rootScope.path = $location.path();
//   });
// });

var chickAppRegistration = angular.module("chickAppRegistration", ['ngRoute']);

chickAppRegistration.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

}]);

var chickAppLogin = angular.module("chickAppLogin", ['ngRoute']);

chickAppLogin.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

}]);
