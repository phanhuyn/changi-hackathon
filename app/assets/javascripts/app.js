(function(){
    angular.module('changi', ['ui.router', 'templates', 'ngResource']).config(['$stateProvider','$urlRouterProvider',
        function($stateProvider, $urlRouterProvider){
            $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: 'home.html',
              controller: 'HomeController'
            });
            $urlRouterProvider.otherwise('home');
        }]);
})();
