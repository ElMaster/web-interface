angular
    .module('interfaceApp')
    .run(['$rootScope', '$state', '$stateParams','$http',
        function ($rootScope, $state, $stateParams, $http) {


            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.$on('$stateChangeSuccess', function () {
                window.scrollTo(0, 0);
            });
        }
    ])
    .directive("valueChange", function () {
        return {
            link: function ($scope, $element, $attributes) {
                $scope.appstore.country = $element.val();
                console.log($attributes)
            }
        };
    })
    .config(['$stateProvider', '$urlRouterProvider','$httpProvider',
        function ($stateProvider, $urlRouterProvider,$httpProvider) {
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('appstore', {
                    url: '/',
                    templateUrl: 'views/appstore_views.html'
                })
                .state('googleplay', {
                    url: '/google_play',
                    templateUrl: 'views/googleplay_views.html'
                })

        }
    ]);
