

angular.module('app.home', ['ngNewRouter'])
    .controller('HomeController', function(nameService){
        var $scope = this;
        $scope.userData = '';
        $scope.arr = [];
        $scope.submit = function (userData) {

            nameService.setText(userData);
            $scope.userData = '';

        }


    });
