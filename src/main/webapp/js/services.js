var demoApp=angular.module("demoApp",[]);

var RoomService = function(){
	var names=['pratik','adhau'];
	this.getNames = function(){
		return names;
	};
	return this;
};

demoApp.service("RoomService", RoomService);