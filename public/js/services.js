angular.module('app.services',[]).factory('getData',function($http){
	return {
		fetch: function(){
			return $http({method: 'GET',url: '/todolist'});
		}
	}
}).factory('postData',function($http){
	return {
		post: function(dt){
			return $http({method: 'POST',url: '/todolist',data: dt});
		}
	}
}).factory('delData',function($http){
	return{
		delete: function(id){
			return $http.delete('/todolist/' + id);
		}
	}
});