var RoomService = function(){
	this.getNames = function(){
		return ['pratik','adhau'];
	};
	return this;
};
demoApp.service("RoomService", RoomService);