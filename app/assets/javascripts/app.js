(function(){
    angular.module('changi', ['ui.router', 'templates', 'ngResource']).config(['$stateProvider','$urlRouterProvider',
        function($stateProvider, $urlRouterProvider){
            $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: 'home.html',
              controller: 'WelcomeController'
            })
            .state('main', {
                url: '/main',
                templateUrl: 'main.html',
                controller: 'MainController'
            })
            .state('test', {
              url: '/test',
              templateUrl: 'test.html',
              controller: 'MainController'
            })
            .state('admin', {
              url: '/admin',
              templateUrl: 'admin.html',
              controller: 'AdminController'
            });
            $urlRouterProvider.otherwise('home');
        }]);
})();
