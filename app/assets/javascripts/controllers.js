(function() {
    angular.module('changi').controller('HomeController', ['$scope', 'Flight', 'ChatService', 'ChatBox', function ($scope, Flight, ChatService, ChatBox){
        $scope.inputFlight = function(){
            Flight.query({flight_number: $scope.flightNumber}, function(flight){
                $scope.flight = flight[0];
                ChatService.setFlightId($scope.flight.id);
            });
        };
    }]);
    angular.module('changi').controller('ChatBoxController', ['$scope', 'ChatService', 'ChatBox', 'Comment', 'User', 
        function($scope, ChatService, ChatBox, Comment, User){
        $scope.user = null;
        $scope.$watch(function(){return ChatService.getFlightId();}, function(flight_id){
            if(flight_id){
                ChatBox.query({flight_id: ChatService.getFlightId()}, function(chatbox){
                    $scope.chatbox = chatbox[0];
                    $scope.comments = $scope.chatbox.comments;
                });
            }
        }, true);
        $scope.addComment = function() {
            Comment.save({user_id: $scope.user.id, content: $scope.newComment, chat_box_id: $scope.chatbox.id}, function(res){
                console.log("Comment added");
                console.log(res.toJSON());
                $scope.comments.push(res.toJSON());
            })
        }
        if(!$scope.user){
            //call this block if user not exist
            // $scope.user = {name: 'David', id: 1}
        }
        $scope.addUser = function(){
            User.save({name: $scope.username}, function(res){
                $scope.user = res;
                console.log("User added");
            });
        }
    }]);
    angular.module('changi').controller('MainController', ['$scope', function($scope){
        
    }]);
})();