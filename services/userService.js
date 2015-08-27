angular.module('rtfmApp').service('userService', function( $firebaseAuth, fb, $location){

    //Todo: don't hardcode this
    var user = {
        name: ''
    };

    var ref = new Firebase(fb.url);
    var authObj = $firebaseAuth(ref);

    var info = authObj.$getAuth();
    if (info){
    	user.name = info.google.displayName;
    };

    this.getLoggedInUser = function(){
        return user;
    }

    this.loginWithGoogle = function(){
    	
        //TODO: Actually login with google
        authObj.$authWithOAuthPopup("google").then(function(authData) {
        	$location.path('main')
        	console.log(authData)
		 	console.log("Logged in as:", authData.uid);
		  	user.name = authData.google.displayName;
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
    }

    this.logout = function(){
    	authObj.$unauth()
    	$location.path('login');
    }
  

});