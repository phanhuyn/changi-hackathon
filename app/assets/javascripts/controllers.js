(function() {
    angular.module('changi').controller('HomeController', ['$scope', 'Flight', 'ChatService', 'ChatBox', function ($scope, Flight, ChatService, ChatBox){
        console.log("FAWEFAE");
        $scope.inputFlight = function(){
            Flight.query({flight_number: $scope.flightNumber}, function(flight){
                $scope.flight = flight[0];
                ChatService.setFlightId($scope.flight.id);
                console.log(ChatService.getFlightId());
            });
        };
    }]);
    angular.module('changi').controller('ChatBoxController', ['$scope', 'ChatService', 'ChatBox', function($scope, ChatService, ChatBox){
        $scope.$watch(function(){return ChatService.getFlightId();}, function(flight_id){
            console.log(flight_id);
            if(flight_id){
                ChatBox.query({flight_id: ChatService.getFlightId()}, function(chatbox){
                    $scope.chatbox = chatbox[0];
                    $scope.comments = $scope.chatbox.comments;
                    console.log($scope.comments);
                });
            }
        }, true);
    }]);
    angular.module('changi').controller('ChatBoxController', ['$scope', function($scope){
        
    }]);
})();