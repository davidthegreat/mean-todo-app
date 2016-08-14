import angular from 'angular'

const todoFactory = angular.module('app.todoFactory', [])

.factory('todoFactory', () => {
	function createTask($scope, params) {
		params.createHasInput = false;
		$scope.createTaskInput = '';
	}

	function updateTask(todo){
		todo.task = todo.updatedTask;
		todo.isEditing = false;
	}

	return{
		createTask,
		updateTask
	};
});

export default todoFactory;