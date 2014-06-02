var demoApp=angular.module("demoApp",[]);

var RoomController = function($scope,RoomService){
	$scope.names=RoomService.getNames();
};

demoApp.controller("RoomController",RoomController);


demoApp.directive('hello',function(){
	return{
		restrict : 'E',
		template : 'hello world'
	};	
});