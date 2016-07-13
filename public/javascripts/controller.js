var selectedSerie;
var selectedDetail = 1;
var data;
var serieInformation;

// controller
//

app.controller('page-ctrl', function($scope, $http) {
  $http.get('data/fm/series.json')
       .then(function(res){
          $scope.FMSerien = res.data;
          data = res.data;
        });
});

app.controller('radios-ctrl', function($scope, $http) {
  $scope.serie = function(s) {
    serieInformation = data[s];
    switch (selectedDetail) {
      case 1:
        $scope.Informationen = true;
        $scope.Results = false;
        $scope.Standings = false;
        $scope.Titel = serieInformation.Titel;
        $scope.Laeufe = serieInformation.Laeufe;
        $scope.Hinweise = serieInformation.Hinweise;
        $scope.Fahrzeuge = serieInformation.Fahrzeuge;
        $scope.Setup = serieInformation.Setup;
        $scope.Regeln = serieInformation.Regeln;
        $scope.Punktesystem = serieInformation.Punktesystem;
        $scope.wa = serieInformation.wa;
        $scope.q1 = serieInformation.q1;
        $scope.r1 = serieInformation.r1;
        $scope.q2 = serieInformation.q2;
        $scope.r2 = serieInformation.r2;
        break;
      case 2:
        $scope.Informationen = false;
        $scope.Results = true;
        $scope.Standings = false;
        $scope.Titel = serieInformation.Titel;
        break;
      case 3:
        $scope.Informationen = false;
        $scope.Results = false;
        $scope.Standings = true;
        $scope.Titel = serieInformation.Titel;
        break;
      default:
        console.console.log("Fehler");
    }
  }
  $scope.update = function(d) {
    selectedDetail = d;
    switch (selectedDetail) {
      case 1:
        $scope.Informationen = true;
        $scope.Results = false;
        $scope.Standings = false;
        $scope.Titel = serieInformation.Titel;
        break;
      case 2:
        $scope.Informationen = false;
        $scope.Results = true;
        $scope.Standings = false;
        $scope.Titel = serieInformation.Titel;
        break;
      case 3:
        $scope.Informationen = false;
        $scope.Results = false;
        $scope.Standings = true;
        $scope.Titel = serieInformation.Titel;
        break;
      default:
        console.console.log("Fehler");
    }
  }
});

app.controller('details-ctrl', function($scope) {

});

// directives
//

app.directive('stay', function(){
  return {
    restrict : "C",
      link: function(scope, element) {
        element.bind("click" , function(e){
          element.parent().parent().find("button").removeClass("enabled");
          element.addClass("enabled");
        });
      }
  }
});
