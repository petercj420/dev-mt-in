angular.module('devMtIn').service('profileService', function($http) {
	this.serviceTest = function() {
 		//console.log('profileService is connected!');
 	// 	[AllowAnonymous]
		// [Route("Register")]
		// [AcceptVerbs("OPTIONS")]
		// public async Task<IHttpActionResult> Register()
		// {
		//     return Ok();
		// }
	}

	//function ResultSet(dataset) {}
	this.saveProfile = function(myProfile){
		localStorage.setItem('myProfile', JSON.stringify(myProfile));
		
	}
	// $window.localstorage.set(key, value)
	// .get('key')
	this.checkForProfile = function(){
		if(JSON.parse(localStorage.getItem('myProfile'))){
			return JSON.parse(localStorage.getItem('myProfile'));
		}
		return {
	    friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
	  	}
	}
		this.deleteProfile = function() {
		  var profileId = JSON.parse(localStorage.getItem('myProfile'));
		  var baseUrl = '127.0.0.1'
		  return $http({
		    method: 'DELETE'
		  , url: baseUrl + 'api/profiles/' + profileId
		  });
		}
})