var demoApp= angular.module("demoApp",[]);



var RoomController = function($scope , RoomService) {
	$scope.room=RoomService.getRoom();
};

demoApp.controller('RoomController',RoomController);


