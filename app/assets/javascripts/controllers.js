(function() {
    angular.module('changi').controller('MainController', ['$scope', 'Flight', 'ChatService', 'ChatBox', '$stateParams',
        function ($scope, Flight, ChatService, ChatBox, $stateParams){
        $scope.flightNumber = $stateParams.flight;
        Flight.query({flight_number: $scope.flightNumber}, function(flight){
                $scope.flight = flight[0];
                console.log($scope.flight);
                ChatService.setFlightId($scope.flight.id);
        });
        $scope.hide = true;
        $scope.toggleChatBox = function() { $scope.hide = !$scope.hide;
        }
    }]);
    angular.module('changi').controller('ChatBoxController', ['$scope', 'ChatService', 'ChatBox', 'Comment', 'User', '$timeout',
        function($scope, ChatService, ChatBox, Comment, User, $timeout){
        $scope.user = null;
        $scope.$watch(function(){return ChatService.getFlightId();}, function(flight_id){
            if(flight_id){
                ChatBox.query({flight_id: ChatService.getFlightId()}, function(chatbox){
                    $scope.chatbox = chatbox[0];
                    $scope.comments = $scope.chatbox.comments;
                    poll();
                });
            }
        }, true);
        $scope.addComment = function() {
            Comment.save({user_id: $scope.user.id, content: $scope.newComment, chat_box_id: $scope.chatbox.id}, function(res){
                console.log("Comment added");
                console.log(res.toJSON());
                $scope.comments.push(res.toJSON());
                $scope.newComment = "";
            })
        }
        $scope.addUser = function(){
            User.save({name: $scope.username}, function(res){
                $scope.user = res;
                console.log("User added");
            });
        }

        function poll() {
            Comment.query({chat_box_id:$scope.chatbox.id}, function(comments){
                console.log("Updated comments");
                $scope.comments = comments;
                $timeout(poll, 2000);
            });
        };
    }]);
    angular.module('changi').controller('WelcomeController', ['$scope', function($scope){
        $scope.flightNumber = "123";
    }]);
})();
