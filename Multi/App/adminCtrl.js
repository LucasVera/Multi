'use strict';
angular.module('multiApp')
    .controller('AdminCtrl', ['$scope', '$rootScope', 'adminService', function ($scope, $rootScope, adminService) {
        $scope.title = 'ADMIN';


        $scope.successfulLogin = function (response, saveSessionData) {
            adminService.setUserInfo(response);
            if (saveSessionData) {
                adminService.saveLoginInfo(response);
            }
        }

        // .......................... Root scope stuff ...................................
        $rootScope.loginMsg = '';
        $rootScope.showLoginMsg = false;
        $rootScope.loginMsgClass = 'alert-info';
        $rootScope.cleanLoginModal = function () {
            $rootScope.showLoginMsg = false;
        }

        $rootScope.login = function () {
            $rootScope.showLoginMsg = true;
            $rootScope.loginMsg = 'Autenticando...';
            $rootScope.loginMsgClass = 'alert-info';

            // login through web API
            authService.authResource().save({}, { username: username, password: password, action: 1 }).$promise.then( // action:1 --> login
                function (response) {
                    $scope.successfulLogin(response, true);
                },
                function (response) {
                    if (response.data != undefined && response.data != null && response.data != {}) {
                        $scope.badLogin(response.data.customMsg);
                    }
                    else {
                        $scope.badLogin(response.status + ' ' + response.statusText);
                    }
                });
        }
        $rootScope.logout = function () {
            adminService.authResource().save({}, { action: 2 }).$promise.then( // action: 2 --> logout
              function (response) {
                  $scope.doLogout();
              },
              function (response) {
                  if (response.data != undefined) {
                      console.log('Logout error. ' + response.status + ' ' + response.data.customMsg);
                  }
                  else {
                      console.log('Logout error. ' + response.status + ' ' + response.statusText);
                  }
              });
        }
        // ...............................................................................

    }]);