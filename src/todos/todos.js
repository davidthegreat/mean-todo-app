export default function($scope) {
	$scope.todos=[
	{
		task: 'do dishes',
		isCompleted: true
	},
	{
		task: 'Walk the dog',
		isCompleted: true
	}
	];

	$scope.onCompletedClick = todo =>{
		todo.isCompleted = !todo.isCompleted;
	};
}