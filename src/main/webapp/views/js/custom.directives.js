demoApp.directive("hello",function(){
	return{
		restrict:'E',
		scope :{
			name:"@"
		},
		templateUrl:'hello.html'
	};
});