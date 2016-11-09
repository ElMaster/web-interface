'use strict';

angular
    .module('interfaceApp')
    .controller('AppCtrl', ['$scope','$http','$location','$timeout',
        function AppCtrl($scope, $http, $location,$timeout) {
            $scope.appstore = {};
            $scope.country = '';
            $scope.recvetTrue = true;
            $scope.errorMessage = false;
            $scope.resize = {
                resizeFull: '1300px'
            };
            $('.ui.search.dropdown').dropdown({
                    useLabels: false,
                    onChange: function(value, text, $selectedItem) {
                        $scope.appstore.country = value;
                    }
                });
           
            $scope.appstoreFn = function (data) {

                $scope.loaderSlider = true;

                var parsedURL = new URL(data.url);

                var transformUrl = 'https://itunes.apple.com/lookup?id='+parsedURL.pathname.split( '/id')[1]+'&country='+$scope.appstore.country+'&callback=JSON_CALLBACK';


                $http.jsonp(transformUrl).success(function(data) {
                    console.log('dd')
                    $scope.recvetTrue = false;
                    $scope.appstoreResponse = data.results[0];
                    // console.log(data.results);

                    $timeout(function () {
                        $scope.loaderSlider = false
                    }, 50);
                    $scope.errorMessage = false;
                }).error(function (data, status, headers, config) {


                    $scope.recvetTrue = true;
                    $timeout(function () {
                        $scope.loaderSlider = false
                    }, 0);
                    $scope.errorMessage = true;
                });
                $scope.$watch('appstoreResponse', function () {
                    $timeout(function () {
                        function removeClass($this) {
                            $($this).parent('.buttons').find('a').addClass('basic');
                            $($this).removeClass('basic')
                        }
                        $('.ui.button.tabs1').on('click', function() {
                            removeClass(this)
                            $.tab('change tab', 'tabs1');
                        });
                        $('.ui.button.tabs2').on('click', function() {
                            removeClass(this)
                            $.tab('change tab', 'tabs2');
                        });
                        $('.ui.button.tabs3').on('click', function() {
                            removeClass(this)
                            $.tab('change tab', 'tabs3');
                        });

                        $('.flexslider').flexslider({
                            animation: "slide",
                            animationLoop: false,
                            itemWidth: 150,
                            itemMargin: 5,
                            minItems: 1,
                            maxItems: 4,
                            prevText: "",
                            nextText: ""
                        });
                    }, 100);
                });
            }

        }
    ]);

