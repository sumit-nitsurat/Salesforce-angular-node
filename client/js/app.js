(function(){
'use strict';

require('angular');
require('angular-ui-router');
require('angular-material');    
var app = angular.module('app', ['ngMaterial','ui.router']);

var appConfig = require('./config/AppConfig');
var routesConfig = require('./config/Routes');

var storageService = require('./services/StorageService');

var homeController = require('./controllers/HomeController');

app.config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', routesConfig]);
app.constant('ENV', appConfig);

app.factory('storageService', ['$rootScope', storageService]);

app.controller('HomeController', ['$scope', 'storageService', 'ENV',homeController ]);
})();