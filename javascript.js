var app = angular.module("myApp", [])

app.controller("myCtrl" , function($scope){

$scope.name = 7000;
    $scope.countries = [{abc: "pakistan", population: 63.1},
                        {abc: "india", population: 75}
    ];

});