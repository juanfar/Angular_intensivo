var miAppAngular = angular.module('navegacion', ['ngRoute']);

miAppAngular.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/inicio.html',
		controller: 'inicio'
	})
	.when('/galeria', {
		templateUrl: 'templates/galeria.html',
		controller: 'inicio'
	}).when('/mapa', {
		templateUrl: 'templates/mapa.html',
		controller: 'inicio'
	}).when('/contacto', {
		templateUrl: 'templates/contacto.html',
		controller: 'inicio'
	})

}])