/**
 * Created by Taimoor on 8/19/2015.
 */
angular.module('app.home')

    .service('nameService', function () {
        var $scope = this;
        $scope.text = null;
        $scope.arr = [];
        $scope.setText = function (userData) {
             $scope.text = userData;
             $scope.arr.push(userData);
        };
        $scope.getText = function () {
            return $scope.arr;
        };

    });
