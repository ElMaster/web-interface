'use strict';

angular
    .module('interfaceApp')
    .controller('AppCtrl', ['$scope','$http','$location',
        function AppCtrl($scope, $http, $location) {
            $scope.appstore = {};
            $scope.country = '';
            $scope.recvetTrue = true;

            $('.ui.search.dropdown').dropdown({
                    useLabels: false,
                    onChange: function(value, text, $selectedItem) {
                        $scope.appstore.country = value;
                    }
                });

            $scope.appstoreFn = function (data) {

                var parsedURL = new URL(data.url);

                var transformUrl = 'https://itunes.apple.com/lookup?id='+parsedURL.pathname.split( '/id')[1]+'&country='+$scope.appstore.country+'&callback=JSON_CALLBACK';
                console.log(transformUrl)
                $scope.test = 'f';
                $http.jsonp(transformUrl).success(function(data) {
                    $scope.recvetTrue = false;
                    $scope.appstoreResponse = data;

                });
            }

        }
    ]);

