app.controller('page-ctrl', function($scope, $http) {
  $http.get('data/fm/series.json')
       .then(function(res){
          $scope.FMSerien = res.data;
        });
});
