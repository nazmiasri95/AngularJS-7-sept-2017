 // Declaring the angular module 
 // Doing dependency injection to add libraries such as:
 //  - ngRoute
 //  - firebase
 //  

var app = angular.module("starterApp", ["ngRoute"])
	
	.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: 'templates/main.html',
				controller: 'HomeController'
			})

			.when("/about-us", {
				templateUrl: 'templates/about_us.html',
				controller: 'AboutUsController'
			})

			.when("/contact-us", {
				templateUrl: 'templates/contact_us.html',
				controller: 'ContactUsController'
			})

			.otherwise({ redirectTo: '/' })
	})