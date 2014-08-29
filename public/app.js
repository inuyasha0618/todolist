var app = angular.module('app',[]);
app.controller('listCtrl',['$scope','$http',function($scope,$http){
	$scope.todos = [];
	$scope.formdata = {text:""};
	$http.get('/todolist').success(function(data){
		$scope.todos = data;
	});

	$scope.createTodo = function(){
		if($scope.formdata.text !== ""){
			$http.post('/todolist',$scope.formdata).success(function(data){
				$scope.todos = data;
				$scope.formdata = {text:""};
			});
		}else{
			alert("待办事项不能为空！！！");
		}
		
	}

	$scope.deleteTodo = function(id){
		$http.delete('/todolist/' + id).success(function(data){
			$scope.todos = data;
		});
	}
}])