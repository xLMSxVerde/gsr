app.controller('page-ctrl', function($scope, $http) {
  $http.get('data/fm/series.json')
       .then(function(res){
          $scope.FMSerien = res.data;
        });
  $scope.changeTitle = function(expression) {
    $scope.title = expression;
  }
});

app.controller('sidebar-ctrl', function($scope) {
    $scope.showFMSeries = function() {
      $scope.listFMSeries = !$scope.listFMSeries;
      $scope.showFMMore = !$scope.showFMMore;
    }

    $scope.showPCSeries = function() {
      $scope.listPCSeries = !$scope.listPCSeries;
      $scope.showPCMore = !$scope.showPCMore;
    }
});

app.controller('serieCtrl', function($scope) {
    $scope.test = $scope.title;
});

app.controller('contactCtrl', function($scope) {
    $scope.test = $scope.title;
});

app.controller('newsCtrl', function($scope) {
    $scope.test = $scope.title;
});
