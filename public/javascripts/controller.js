var selectedSerie = 0;
var selectedDetail = -1;
var seriesData;
var raceResults;
var serieInformation;

// controller
//

app.controller('page-ctrl', function($scope, $http) {
  $http.get('data/fm/00_series.json')
       .then(function(res){
          $scope.FMSerien = res.data;
          seriesData = res.data;
        });
});

app.controller('radios-ctrl', function($scope, $http) {
  $scope.update = function(s) {
    $scope.secondLevelButtons = true;
    if(s == -1 || s == -2 || s == -3){
      selectedDetail = s;
    }else{
      serieInformation = seriesData[s];
      $scope.selectedResults = false;
    }
    switch (selectedDetail) {
      case -1:
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
      case -2:
        var buttonLaeufe =[];
        for (i = 1; i <= serieInformation.Laeufe; i++){
            buttonLaeufe.push(i);
        }
        $scope.buttonLaeufe = buttonLaeufe;
        $scope.Informationen = false;
        $scope.Results = true;
        $scope.Standings = false;
        break;
      case -3:
        $scope.Informationen = false;
        $scope.Results = false;
        $scope.Standings = true;
        break;
      default:
        console.log("Fehler");
    }
  }
  $scope.selectLauf = function(b) {
    $scope.selectedResults = true;
    $http.get('data/fm/' + serieInformation.id)
         .then(function(res){
            raceResults = res.data;
            $scope.qualy1 = true;
            $scope.race1 = true;
            $scope.qualy2 = true;
            $scope.race2 = true;
            //Quali1
            if(raceResults[b-1].q1.length == 0) {
              $scope.qualy1 = false;
            }
            //Race1
            if(raceResults[b-1].r1.length == 0) {
              $scope.race1 = false;
            }
            //Quali2
            if(raceResults[b-1].q2.length == 0) {
              $scope.qualy2 = false;
            }
            //Race2
            if(raceResults[b-1].r2.length == 0) {
              $scope.race2 = false;
            }
            $scope.resultR1 = raceResults[b-1].r1;
          });
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
