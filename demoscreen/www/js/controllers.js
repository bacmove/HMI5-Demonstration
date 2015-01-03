angular.module('starter.controllers', [])

.controller('EnergyCtrl', function($scope) {})

.controller('ChartsCtrl', function($scope) {
	
	var data = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "My First dataset",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [65, 59, 80, 81, 56, 55, 40]
			},
			{
				label: "My Second dataset",
				fillColor: "rgba(151,187,205,0.2)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [28, 48, 40, 19, 86, 27, 90]
			}
		]
	};

	// Get the context of the canvas element we want to select
	var ctx = document.getElementById("chart_demo").getContext("2d");

	var chart_demo = new Chart(ctx).Line(data);
})

.controller('RoomCtrl', function($scope, $ionicModal) {
	$ionicModal.fromTemplateUrl('templates/modal-welcome.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
		
		$scope.openModal();
	});
	
	$scope.openModal = function() {
		$scope.modal.show();
	};
	
	$scope.closeModal = function() {
		$scope.modal.hide();
	};
	
	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
	
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
		// Execute action
	});
	
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
		// Execute action
	});
	
	
	
})

.controller('SettingsCtrl', function($scope) {})
