(function() {
    angular.module('changi').factory('Flight', function($resource){
        return $resource('/flights');
    });
})();