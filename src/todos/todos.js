import _ from 'lodash';

export default function($scope, todoFactory) {
	let params = {
		createHasInput: false
	};
console.log(todoFactory.createTask);
	$scope.todos=[
	{
		task: 'do dishes',
		isCompleted: false,
		isEditing: false

	},
	{
		task: 'Walk the dog',
		isCompleted: false,
		isEditing: false
	}
	];

	$scope.onCompletedClick = todo =>{
		todo.isCompleted = !todo.isCompleted;
	};

	$scope.onEditClick = todo => {
		todo.isEditing = true;
		todo.updatedTask = todo.task;
	};

	$scope.onCancelClick = todo =>{
		todo.isEditing =false;
	}; 

	const	{ createTask, updateTask, deleteTask, watchCreateTaskInput } = todoFactory;

	$scope.createTask= _.partial(todoFactory.createTask, $scope, params);

	$scope.updateTask = _.partial(updateTask);

	$scope.deleteTask = _.partial(deleteTask, $scope);

	$scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, params,$scope));
}