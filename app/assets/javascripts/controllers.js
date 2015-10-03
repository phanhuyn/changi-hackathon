(function() {
    angular.module('changi').controller('MainCtrl', ['$scope', 'Flight', function ($scope, Flight){
        $scope.inputFlight = function(){
            Flight.query({flight_number: $scope.flightNumber}, function(flight){
                $scope.flight = flight;
            });
        };
        
    }]);
})();