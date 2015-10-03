(function() {
    angular.module('changi').controller('MainCtrl', ['$scope', 'Flight', function ($scope, Flight){
        $scope.inputFlight = function(){
            $scope.flight = Flight.query({flight_number: $scope.flightNumber}, function(flight){
                console.log(flight);
            });
        };  
    }]);
})();