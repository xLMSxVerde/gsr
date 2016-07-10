// controller
//

app.controller('page-ctrl', function($scope, $http) {
  $http.get('data/fm/series.json')
       .then(function(res){
          $scope.FMSerien = res.data;
        });
});


// directives
//

app.directive('stay', function(){
  return {
    restrict : "C",
      link: function(scope, element) {
        element.bind("click" , function(e){
          console.log(element.parent().parent().find("button"));
          element.parent().parent().find("button").removeClass("enabled");
          element.addClass("enabled");
        });
      }
  }
});
