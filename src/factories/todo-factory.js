import _ from 'lodash'
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

	function deleteTask($scope, todoToDelete){
		_.remove($scope.todos, todo => todo.task === todoToDelete.task)	
	}

	return{
		createTask,
		updateTask,
		deleteTask
	};
});

export default todoFactory;