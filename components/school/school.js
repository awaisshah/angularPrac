/**
 * Created by Taimoor on 8/18/2015.
 */
angular.module('app.school', ['ngNewRouter', 'app.home'])
    .controller('SchoolController', function(nameService){
        var $scope = this;
        $scope.data = nameService.getText();

    });
