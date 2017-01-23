'use strict';
angular.module('multiApp')
    .controller('NewAccountCtrl', ['$scope', function ($scope) {
        $scope.title = 'Create account';
        $scope.tab = 0;

        $scope.isTabSelected = function (tabNum) {
            return $scope.tab == tabNum;
        }

        $scope.selectTab = function (tabNum) {
            $scope.tab = tabNum;
        }


    }]);