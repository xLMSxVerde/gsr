var app = angular.module('gsr', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/serie", {
        templateUrl : 'partials/serie'
    })
    .when("/contact", {
        templateUrl : 'partials/contact'
    })
    .otherwise({
        templateUrl : 'partials/news'
    });
});
