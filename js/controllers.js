angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Create the about modal that we will use later
  $ionicModal.fromTemplateUrl('templates/about.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the about modal to close it
  $scope.closeAbout = function() {
    $scope.modal.hide();
  };

  // Open the about modal
  $scope.about = function() {
    $scope.modal.show();
  };
})

.controller('ReadObjectCtrl', ['$scope','hmi5helper', function ($scope, hmi5helper) {
  $scope.objectTypes = [
    { title: 'Analog Input', id: 0 },
    { title: 'Analog Output', id: 1 },
    { title: 'Analog Value', id: 2 },
    { title: 'Binary Input', id: 3 },
    { title: 'Binary Output', id: 4 },
    { title: 'Binary Value', id: 5 }, 
    { title: 'Multi-State Input', id: 13 }, 
    { title: 'Multi-State Output', id: 14 }, 
    { title: 'Multi-State Value', id: 19 }
  ];
  
  $scope.propertyIdentifiers = [
    { title: 'Present Value', id: 85 }
  ];
  
  // Form data for the login modal
  $scope.readObjectData = hmi5helper.getReadObjectData();
  
	$scope.$on('$viewContentLoaded', function() {
		_initialize();
	});

  $scope.changeDeviceID = function() {
		_normalize();
		
		JSInterface.whoIs($scope.readObjectData.deviceID, $scope.readObjectData.deviceID);
  };

  // read the object
  $scope.readObject = function() {
		try 
		{
			_normalize();
			
			JSInterface.readDeviceObjectProperty($scope.readObjectData.deviceID, 
													$scope.readObjectData.objectType, 
													$scope.readObjectData.objectInstance, 
													$scope.readObjectData.propertyIdentifier, 
													/*$scope.readObjectData.arrayIndex*/-1);
													
			hmi5helper.saveReadObjectData($scope.readObjectData);
		}
		catch (e)
		{
			alert(e);
		}
  };
  
  function _initialize() 
  {
		_normalize();
		hmi5helper.startWhoIsTimer();
  }
  
  function _normalize()
  {
		$scope.readObjectData.deviceID = parseInt($scope.readObjectData.deviceID, 10);
		$scope.readObjectData.objectType = parseInt($scope.readObjectData.objectType, 10);
		$scope.readObjectData.objectInstance = parseInt($scope.readObjectData.objectInstance, 10);
		$scope.readObjectData.propertyIdentifier = parseInt($scope.readObjectData.propertyIdentifier, 10);
		$scope.readObjectData.arrayIndex = parseInt($scope.readObjectData.arrayIndex, 10);
		
		hmi5helper.setDeviceID($scope.readObjectData.deviceID);
  }
  
}])

.controller('WriteObjectCtrl', ['$scope','hmi5helper', function ($scope, hmi5helper) {
  $scope.objectTypes = [
    { title: 'Analog Input', id: 0 },
    { title: 'Analog Output', id: 1 },
    { title: 'Analog Value', id: 2 },
    { title: 'Binary Input', id: 3 },
    { title: 'Binary Output', id: 4 },
    { title: 'Binary Value', id: 5 }, 
    { title: 'Multi-State Input', id: 13 }, 
    { title: 'Multi-State Output', id: 14 }, 
    { title: 'Multi-State Value', id: 19 }
  ];
  
  $scope.propertyIdentifiers = [
    { title: 'Present Value', id: 85 }
  ];
  
  $scope.priorities = [
    { title: '1', id: 1 }, 
    { title: '2', id: 2 }, 
    { title: '3', id: 3 }, 
    { title: '4', id: 4 }, 
    { title: '5', id: 5 }, 
    { title: '6', id: 6 }, 
    { title: '7', id: 7 }, 
    { title: '8', id: 8 }, 
    { title: '9', id: 9 }, 
    { title: '10', id: 10 }, 
    { title: '11', id: 11 }, 
    { title: '12', id: 12 }, 
    { title: '13', id: 13 }, 
    { title: '14', id: 14 }, 
    { title: '15', id: 15 }, 
    { title: '16', id: 16 } 
  ];
  
  // Form data for the login modal
  $scope.writeObjectData = hmi5helper.getWriteObjectData();
  
	$scope.$on('$viewContentLoaded', function() {
		_initialize();
	});

  $scope.changeDeviceID = function() {
		_normalize();
		
		JSInterface.whoIs($scope.writeObjectData.deviceID, $scope.writeObjectData.deviceID);
  };

  // write the object
  $scope.writeObject = function() {
		try 
		{
			// $scope.writeObjectData.message = '';
			
			_normalize();
			
			JSInterface.writeDeviceObjectProperty($scope.writeObjectData.deviceID, 
													$scope.writeObjectData.objectType, 
													$scope.writeObjectData.objectInstance, 
													$scope.writeObjectData.propertyIdentifier, 
													/*$scope.writeObjectData.arrayIndex*/-1, 
													$scope.writeObjectData.priority, 
													$scope.writeObjectData.value, 
													$scope.writeObjectData.isNullValue);
						
			hmi5helper.saveWriteObjectData($scope.writeObjectData);
		}
		catch (e)
		{
			alert(e);
		}
  };
  
  function _initialize() 
  {
		_normalize();
		hmi5helper.startWhoIsTimer();
  }
  
  function _normalize()
  {
		$scope.writeObjectData.deviceID = parseInt($scope.writeObjectData.deviceID, 10);
		$scope.writeObjectData.objectType = parseInt($scope.writeObjectData.objectType, 10);
		$scope.writeObjectData.objectInstance = parseInt($scope.writeObjectData.objectInstance, 10);
		$scope.writeObjectData.propertyIdentifier = parseInt($scope.writeObjectData.propertyIdentifier, 10);
		$scope.writeObjectData.arrayIndex = parseInt($scope.writeObjectData.arrayIndex, 10);
		$scope.writeObjectData.priority = parseInt($scope.writeObjectData.priority, 10);
		$scope.writeObjectData.value = parseInt($scope.writeObjectData.value, 10);
			
		if (typeof $scope.writeObjectData.isNullValue === 'string')
		{
			$scope.writeObjectData.isNullValue = ($scope.writeObjectData.isNullValue === 'true');
		}
		
		hmi5helper.setDeviceID($scope.writeObjectData.deviceID);
  }
	
}])

.controller('PlatformCtrl', function($scope) {
  
  $scope.platformNotificationAlert = function() {
		JSInterface.platformNotificationAlert("title", "message", "OK", true, "info");
  };
  
  $scope.platformNotificationConfirm = function() {
		JSInterface.platformNotificationConfirm("title", "message", "Yes", "No", true, "info");
  };
  
  $scope.platformNotificationVibrate = function() {
		JSInterface.platformNotificationVibrate(250);
  };
  
  $scope.platformNotificationBeep = function() {
		JSInterface.platformNotificationBeep();
  };
  
  $scope.platformIsWiFiConnected = function() {
		JSInterface.platformIsWiFiConnected();
  };
  
});
