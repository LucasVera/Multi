'use strict';

angular.module('panelApp')
    .service('adminService', ['$resource', '$window', '$rootScope', function ($resource, $window, $rootScope) {

        var userInfo = {};
        this.setUserInfo = function (user) {
            userInfo = user;
        }
        this.getUserInfo = function () {
            return userInfo;
        }

        this.authResource = function () {
            return $resource(baseUrlApiFull + 'auth');
        }

        // ----------- LOCAL STORAGE ----------------------------------------------------------------------------------------------
        // ideally, this goes on a separate service/factory. Implementing here for now...
        this.saveLoginInfo = function (userInfo) {
            $window.localStorage.setItem('userInfo', userInfo);
        }

        this.clearLoginInfo = function () {
            $window.localStorage.clear();
        }

        this.getUserInfoFromStorage = function () {
            return $window.localStorage.getItem('userInfo');
        }

        this.checkAuth = function () {
            try {
                if (!$rootScope.isLogged) {
                    return false;
                }
                if (userInfo == {}) {
                    userInfo = this.getUserInfoFromStorage();
                } else {
                    return true;
                }
                if (userInfo != null && userInfo != undefined && userInfo != {}) {
                    return true;
                }
                userInfo = {};
            } catch (e) {
                console.log('Error checking auth info. ' + e.message);
            }
            return false;
        }
        //-------------------------------------------------------------------------------------------------------------------------


    }]);