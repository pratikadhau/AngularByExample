var RoomService = function(){
	var room= 	{
				address:"KumbarePark, Pune",
				roomie:[{firstname:'pratik',lastname:'adhau',city:'amravati'},
				        {firstname:'swapnil',lastname:'pande',city:'amravati'},
				        {firstname:'sunit',lastname:'thakare',city:'daryapur'},
				        {firstname:'tushar',lastname:'chakote',city:'chandur'}
				        ]
				};
	this.getRoom = function(){
		return room;
	};
	return this;
};
demoApp.service("RoomService", RoomService);