angular.module('devMtIn', [])  
	.config([
        '$httpProvider',
        function($httpProvider) {
            $httpProvider.defaults.withCredentials = true;
        }
]);