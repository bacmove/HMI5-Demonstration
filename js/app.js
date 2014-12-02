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
})

.factory("hmi5helper", function ($rootScope, $interval) 
{
    var deviceID = 0;
    var timer = null;
	
    var hmi5helperService = {};
	
	function _initialize()
	{
		deviceID = parseInt(hmi5helperService.loadJSONObject('hmi5demo2.deviceID'), 10);
	}
	
	hmi5helperService.setDeviceID = function(new_deviceID)
	{
		deviceID = parseInt(new_deviceID, 10);
	}
	
	hmi5helperService.getReadObjectData = function()
	{
		var data = hmi5helperService.loadJSONObject('hmi5demo2.readObjectData');
		
		if (data !== null)
		{
			return data;
		}
		else
		{
			return {deviceID: 10103, 
					objectType: 2, 
					objectInstance: 0, 
					propertyIdentifier: 85, 
					arrayIndex:-1, 
					value: ''};
		}
	}
	
	hmi5helperService.saveReadObjectData = function(readObjectData)
	{
		hmi5helperService.saveJSONObject('hmi5demo2.readObjectData', readObjectData);
	}
	
	hmi5helperService.getWriteObjectData = function()
	{
		var data = hmi5helperService.loadJSONObject('hmi5demo2.writeObjectData');
		
		if (data !== null)
		{
			return data;
		}
		else
		{
			return {deviceID: 10103, 
					objectType: 2, 
					objectInstance: 0, 
					propertyIdentifier: 85, 
					arrayIndex:-1, 
					priority: 8, 
					value: 0, 
					isNullValue: false, 
					message: ''};
		}
	}
	
	hmi5helperService.saveWriteObjectData = function(writeObjectData)
	{
		hmi5helperService.saveJSONObject('hmi5demo2.writeObjectData', writeObjectData);
	}
	
    hmi5helperService.startWhoIsTimer = function() 
	{
		if (timer === null)
		{
			JSInterface.whoIs(deviceID, deviceID);
			
			timer = $interval(function() {
				JSInterface.whoIs(deviceID, deviceID);
			}, 10000);
		}
    };
	
    hmi5helperService.stopWhoIsTimer = function() 
	{
        if (timer !== null)
		{
			$interval.cancel(timer);
			timer = null;
        }
    };
	
	hmi5helperService.saveJSONObject = function(name, data) 
	{
		var ret = false;
		
		if (window.localStorage) 
		{
			// Store an object using JSON
			var data_str;
			
			data_str = JSON.stringify(data);
			localStorage.setItem(name, data_str);
			
			console.log('save; ' + name + '=' + data_str);
			
			ret = true;
		}
		else
		{
			console.log("Cannot save, localStorage not supported.");
		}
		
		return ret;
	}
	
	hmi5helperService.loadJSONObject = function(name)
	{
		var data = false;
		var data_str;
		
		if (window.localStorage) 
		{
			data_str = localStorage.getItem(name);
			
			data = JSON.parse(data_str);
			
			try
			{
				data = JSON.parse(data);
			}
			catch (e)
			{
			}
			
			console.log('load; ' + name + '=' + data_str);
		}
		else
		{
			console.log("Cannot load, localStorage not supported.");
		}
		
		return data;
	}
	
	_initialize();

    return hmi5helperService;
});

