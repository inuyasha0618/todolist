 var app = angular.module('app',['app.services']);
app.controller('listCtrl',['$scope','getData','postData','delData',function($scope,getData,postData,delData){
	$scope.todos = [];
	$scope.formdata = {text:""};
	getData.fetch().success(function(data){
		$scope.todos = data;
	});

	$scope.createTodo = function(){
		if($scope.formdata.text !== ""){
			    postData.post($scope.formdata).success(function(data){
				$scope.todos = data;
				$scope.formdata = {text:""};
			});
		}else{
			alert("待办事项不能为空！！！");
		}
		
	}

	$scope.deleteTodo = function(id){
		delData.delete(id).success(function(data){
			$scope.todos = data;
		});
	}
}])