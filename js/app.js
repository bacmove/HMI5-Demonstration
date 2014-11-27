// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'ReadObjectCtrl'
        }
      }
    })

    .state('app.readobject', {
      url: "/readobject",
      views: {
        'menuContent' :{
          templateUrl: "templates/readobject.html",
          controller: 'ReadObjectCtrl'
        }
      }
    })
    
    .state('app.writeobject', {
      url: "/writeobject",
      views: {
        'menuContent' :{
          templateUrl: "templates/writeobject.html",
          controller: 'WriteObjectCtrl'
        }
      }
    })
    
    .state('app.platform', {
      url: "/platform",
      views: {
        'menuContent' :{
          templateUrl: "templates/platform.html",
          controller: 'PlatformCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

