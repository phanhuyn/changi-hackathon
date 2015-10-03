(function() {
    angular.module('changi').controller('MainController', 
        ['$scope', 'Flight', 'ChatService', 'ChatBox', '$stateParams', 'FlightService','$timeout',
        function ($scope, Flight, ChatService, ChatBox, $stateParams, FlightService, $timeout){
        $scope.flight = FlightService.getFlight();
        $scope.hide = true;
        $scope.toggleChatBox = function() {
            $scope.hide = !$scope.hide;
        }
        $scope.markDone = function(step){
            $scope.step = step;
            console.log(step);
        }
        // poll();
        function poll() {
            console.log("Tick");
            $timeout(poll, 2000);
        }
    }]);
    angular.module('changi').controller('ChatBoxController', ['$scope', 'FlightService', 'ChatBox', 'Comment', 'User', '$timeout',
        function($scope, FlightService, ChatBox, Comment, User, $timeout){
            $scope.user = null;
            console.log(FlightService.getFlight());
            ChatBox.query({flight_id: FlightService.getFlight().id}, function(chatbox){
                $scope.chatbox = chatbox[0];
                $scope.comments = $scope.chatbox.comments;
                poll();
            });
            $scope.addComment = function() {
                Comment.save({user_id: $scope.user.id, content: $scope.newComment, chat_box_id: $scope.chatbox.id}, function(res){
                    console.log("Comment added");
                    // $scope.comments.push(res.toJSON());
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
    angular.module('changi').controller('WelcomeController', ['$scope', 'FlightService', 'Flight', '$state', 
        function($scope, FlightService, Flight, $state){
        $scope.flightNumber = "QZ375";
        $scope.findFlight = function() {
            Flight.query({flight_number: $scope.flightNumber}, function(flight){
                console.log(flight[0]);
                FlightService.setFlight(flight[0]);
                $state.go('main');
            }, function(){
                alert("No Flight found, try again!");
            });
        }
    }]);
})();
