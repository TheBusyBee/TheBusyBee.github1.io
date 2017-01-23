//--App.js
var bionexApp = angular.module('bionexApp', [
  'ngRoute', 'ngTouch',
  'bionexControllers', "ngSanitize"
]);

bionexApp.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
      $routeProvider.
       when('/bumblebee.html', {
           templateUrl: 'views/bumblebee.min.html'
           //controller: 'InstrumentCtrl'
       }).when('/centrifuge.html', {
           templateUrl: 'views/centrifuge.min.html'
           //controller: 'InstrumentCtrl'
       }).when('/systems.html', {
           templateUrl: 'views/systems.min.html',
           //controller: 'HomeCtrl'
       }).
        when('/', {
            templateUrl: 'views/home.min.html',
            //controller: 'MainCtrl'
        }).
        when('/home.html', {
            templateUrl: 'views/home.min.html',
            //controller: 'MainCtrl'
        }).when('/home-alt.html', {
                      templateUrl: 'views/home-alt.min.html',
                      //controller: 'MainCtrl'
                  }).
        when('/contact.html', {
            templateUrl: 'views/contact.min.html',
            //controller: 'HomeCtrl'
        }).
       when('/software.html', {
           templateUrl: 'views/software.min.html',
           //controller: 'HomeCtrl'
       }).when('/beesure.html', {
           templateUrl: 'views/beesure.min.html',
           //controller: 'HomeCtrl'
       }).when('/bnx1536.html', {
           templateUrl: 'views/bnx1536.min.html',
           //controller: 'HomeCtrl'
       }).
       when('/nanodrop.html', {
           templateUrl: 'views/nanodrop.min.html',
           //controller: 'HomeCtrl'
       }).
       when('/stinger.html', {
          templateUrl: 'views/stinger.min.html',
                     //controller: 'HomeCtrl'
       }).
      when('/stacker.html', {
                     templateUrl: 'views/stacker.min.html',
                     //controller: 'HomeCtrl'
                 }).
       when('/about.html', {
           templateUrl: 'views/about.min.html',
           //controller: 'HomeCtrl'
       }).
       when('/hive.html', {
           templateUrl: 'views/hive.min.html',
           //controller: 'HomeCtrl'
       }).when('/alternate', {
           templateUrl: 'views/home-alternate.html',
           //controller: 'HomeCtrl'
       }).when('/partnership.html', {
           templateUrl: 'views/partnership.min.html',
           //controller: 'HomeCtrl'
       }).when('/vworks.html', {
           templateUrl: 'views/VWorks.min.html',
           //controller: 'HomeCtrl'
       }).when('/synapsis.html', {
           templateUrl: 'views/Synapsis.min.html',
           //controller: 'HomeCtrl'
       }).when('/careers.html', {
           templateUrl: 'views/careers.min.html',
           //controller: 'HomeCtrl'
       }).when('/information.html', {
           templateUrl: 'views/information.min.html',
           //controller: 'HomeCtrl'
       }).when('/support.html', {
           templateUrl: 'support.html',
           //controller: 'HomeCtrl'
       }).when('/slas.html', {
           templateUrl: 'views/slas.min.html',
           //controller: 'HomeCtrl'
       }).otherwise({
           redirectTo: '/home.html'
       });
      $locationProvider.html5Mode(true);




      //window.location.hash = '/'
  }]).run(function ($rootScope, $location) {



  });

