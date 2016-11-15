app.controller('ErrorMessageCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    console.info($stateParams);
    $scope.status = $stateParams.status;
    $scope.msg = $stateParams.msg;
}]);