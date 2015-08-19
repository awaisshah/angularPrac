
/*

var app =  angular.module('buttonsDemo1', ['ngMaterial'])
  app.controller('AppCtrl', function($scope) {
        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;
        $scope.googleUrl = 'http://google.com';
    });



*/
/*
angular.module('sidenavDemo1', ['ngMaterial'])
    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');
        /!**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         *!/
        function buildToggler(navID) {
            var debounceFn =  $mdUtil.debounce(function(){
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            },300);
            return debounceFn;
        }
        $scope.user = "";
    })
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    })
    .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };

        $scope.user = "";
    });*/


var app = angular.module('app', ['ngNewRouter' ,'app.home',  'app.school','ngMaterial']);
    app.controller('AppController', ['$router', '$location', AppController]);

AppController.$routeConfig = [

    {
        path:'/',
        component:'home'
    },

    {
        path:'/school',
        component:'school'
    }

];



function AppController($router,$location){


    this.home = function(){
        $location.path('/');
    };


    this.school = function(){
        $location.path('/school');
    };



}
