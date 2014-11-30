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

.controller('ReadObjectCtrl', function($scope) {
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
  $scope.readObjectData = {deviceID: 10103, 
							objectType: 2, 
							objectInstance: 0, 
							propertyIdentifier: 85, 
							arrayIndex:-1, 
							value: ''};
  
  $scope.changeDeviceID = function() {
		JSInterface.whoIs($scope.readObjectData.deviceID, $scope.readObjectData.deviceID);
  };

  // read the object
  $scope.readObject = function() {
		try 
		{
			JSInterface.whoIs($scope.readObjectData.deviceID, $scope.readObjectData.deviceID);
			
			JSInterface.readDeviceObjectProperty($scope.readObjectData.deviceID, 
													$scope.readObjectData.objectType, 
													$scope.readObjectData.objectInstance, 
													$scope.readObjectData.propertyIdentifier, 
													/*$scope.readObjectData.arrayIndex*/-1);
		}
		catch (e)
		{
			alert(e);
		}
  };
})

.controller('WriteObjectCtrl', function($scope) {
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
  $scope.writeObjectData = {deviceID: 10103, 
							objectType: 2, 
							objectInstance: 0, 
							propertyIdentifier: 85, 
							arrayIndex:-1, 
							priority: 8, 
							value: 0, 
							isNullValue: false, 
							message: ''};
  
  $scope.changeDeviceID = function() {
		JSInterface.whoIs($scope.writeObjectData.deviceID, $scope.writeObjectData.deviceID);
  };

  // write the object
  $scope.writeObject = function() {
		try 
		{
			// $scope.writeObjectData.message = '';
			
			JSInterface.whoIs($scope.writeObjectData.deviceID, $scope.writeObjectData.deviceID);
			
			JSInterface.writeDeviceObjectProperty($scope.writeObjectData.deviceID, 
													$scope.writeObjectData.objectType, 
													$scope.writeObjectData.objectInstance, 
													$scope.writeObjectData.propertyIdentifier, 
													/*$scope.writeObjectData.arrayIndex*/-1, 
													$scope.writeObjectData.priority, 
													$scope.writeObjectData.value, 
													$scope.writeObjectData.isNullValue);
		}
		catch (e)
		{
			alert(e);
		}
  };
})

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
