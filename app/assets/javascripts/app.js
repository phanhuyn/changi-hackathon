(function(){
    angular.module('flapperNews', ['ui.router', 'templates']).config(['$stateProvider','$urlRouterProvider',
        function($stateProvider, $urlRouterProvider){
            $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: 'home.html',
              controller: 'MainCtrl'
            })
            .state('posts', {
              url: '/posts/{id}',
              templateUrl: 'posts.html',
              controller: 'PostsCtrl'
          });
            $urlRouterProvider.otherwise('home');
        }]);
})();
