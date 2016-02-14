



angular.module('devMtIn')
.controller('homeCtrl', function($scope, profileService, $http) {
	$scope.myProfile = profileService.checkForProfile();

	// {
	// 	name: '',
	// 	likes: '',
	// 	favColor: '',
	// 	friends:[{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
	// }
	$scope.sortOptions =[{
		display:'Ascending',
		valuse:false
	},
	{
		display: 'Descending'
		,value: true
	}
	];

	profileService.serviceTest();

	$scope.editing= false;

	$scope.saveProfile = function(){
		profileService.saveProfile($scope.myProfile);
		$scope.editing = false;
	};

	$scope.deleteProfile = function(){
	  profileService.deleteProfile();
		// .then(function(deletedProfile) {
		// localStorage.removeItem('profileId');
		// $scope.myProfile = {};
		// })
		// .catch(function(err) {
		// console.error(err);
		// });
	}
	
})
