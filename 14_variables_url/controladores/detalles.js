miAppAngular.controller('detalles', function($scope, $http, $routeParams, configuracionGlobal ){//$routeParams me permite leer la informacion que viene del url

	$http.get(configuracionGlobal.api_url + "/detalles.php", {

		params: { userID: $routeParams.empleadoID }
	})

	.then(function(respuesta) {

		$scope.empleado = respuesta.data[0];

	})
});