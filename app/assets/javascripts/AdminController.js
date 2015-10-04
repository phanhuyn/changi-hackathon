(function(){
    angular.module('changi').controller('AdminController', ['$scope', 'Flight', function($scope, Flight){
        $scope.ready = false;
        $scope.getFlight = function(){
            Flight.get({id: $scope.flight_id}, function(flight) {
                console.log(flight);
                $scope.flight = flight;
            });
        }
    }]);
})();