'use strict';

var ngModule = angular.module('multiApp', [
    'ngResource',
    'ngRoute'
]);

var baseUrl = 'http://localhost:64212';
var baseUrlApiFull = baseUrl + 'api/';

ngModule.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'contact'
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminCtrl',
            controllerAs: 'admin'
        })
        .when('/newAccount', {
            templateUrl: 'views/newAccount.html',
            controller: 'NewAccountCtrl',
            controllerAs: 'newAccount'
        })
        .otherwise({
            redirectTo: '/'
        });
});