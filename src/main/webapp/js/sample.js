var demoApp=angular.module("demoApp",[])

var RoomController = function($scope,RoomFactory){
	$scope.names=RoomFactory.getNames();
}

var RoomFactory = function(){
	var names=['pratik','adhau']
	this.getNames = function(){
		return names;
	}
	return this;
}

demoApp.directive("helloWorld", function(){
	return{
		restrict :'E',
		scope:{
			helloname:'bind'
		},
		templateUrl: 'views/hello.html'
	};	
});

demoApp.controller("RoomController",RoomController);
demoApp.factory("RoomFactory", RoomFactory)

