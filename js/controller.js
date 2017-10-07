app
.controller("HomeController", ["$scope", function($scope) {
	console.log("This is Home Controller");

	$(function(){
	    $('.carousel').carousel({
	      interval: 1000
	    });
	});

}])

.controller("AboutUsController", ["$scope", function($scope) {
	console.log("This is About Us Controller");
}])

.controller("ContactUsController", ["$scope", function($scope) {
	console.log("This is Contact Us Controller");
}])