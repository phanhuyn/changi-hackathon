(function() {
    angular.module('changi').controller('MainController', 
        ['$scope', 'Flight', 'ChatService', 'ChatBox', '$stateParams', 'FlightService','$timeout', '$state','$filter',
        function ($scope, Flight, ChatService, ChatBox, $stateParams, FlightService, $timeout, $state, $filter){
        $scope.flight = FlightService.getFlight();
        if($scope.flight == null){
            $state.go('home');
        }
        $scope.notice = false;
        $scope.noticement = '';
        if($scope.flight.delay == null)
            $scope.departureTime = $scope.flight.scheduled;
        else
            $scope.departureTime = $scope.flight.delay;
        var date = new Date($scope.departureTime);
        var checkinTime = new Date($scope.departureTime);
        checkinTime.setHours(date.getHours()-2);
        $scope.checkinTime = checkinTime;
        $scope.hide = true;
        $scope.state = 1;
        $scope.nextState = function() {
            $scope.state++;
            console.log($scope.state);
        }
        $scope.previousState = function() {
            $scope.state--;
        }
        $scope.toggleChatBox = function() {
            $scope.hide = !$scope.hide;
        }
        $scope.markDone = function(step){
            $scope.step = step;
            console.log(step);
        }
        poll();
        function poll() {
            Flight.get({id: $scope.flight.id}, function(newflight){
                console.log(newflight);
                if(newflight.gate.id != $scope.flight.gate.id){
                    console.log("Changing gate");
                    $scope.notice = true;
                    $scope.noticement = "ATTENTION: YOUR BOARDING GATE HAS BEEN CHANGED FROM GATE " 
                                        + $scope.flight.gate.name + 'TO GATE ' + newflight.gate.name + 
                                        "! WE ARE SORRY FOR THE INCONVENIENCE"; 
                }
                if(newflight.delay!=null){
                    console.log("deLAYING");
                    $scope.notice = true;
                    var time = new Date(newflight.delay);
                    var newtime = $filter('date')(time, 'hh:mm a');
                    $scope.noticement = "UNFORTUNATELY YOUR FLIGHT HAS BEEN DELAYED UNTIL " 
                                        + newtime + "! WE ARE SORRY FOR YOUR INCONVENIENCE"; 
                    FlightService.setFlight(newflight);
                }
                $timeout(poll, 10000);
            });
        }

    }]);
    angular.module('changi').controller('ChatBoxController', 
        ['$scope', 'FlightService', 'ChatBox', 'Comment', 'User', '$timeout', 'Utils',
        function($scope, FlightService, ChatBox, Comment, User, $timeout, Utils){
            $scope.user = null;
            var cookies = Utils.getCookies();
            console.log(cookies.user_id);
            console.log(cookies.flight_number);
            console.log(cookies);
            if(cookies.user_id !== undefined){
                User.get({id: cookies.user_id}, function(user) {
                    $scope.user = user;
                    console.log("USER ALR logged in!");
                    console.log(user);
                }, function(err){
                    console.log(err);
                });
            }
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
    angular.module('changi').controller('WelcomeController', ['$scope', 'FlightService', 'Flight', '$state', 'Utils',
        function($scope, FlightService, Flight, $state, Utils){
            var cookies = Utils.getCookies();
            console.log(cookies);
            if(cookies.flight_number !== undefined){
                console.log("cookies got flight number");
                Flight.query({flight_number: cookies.flight_number}, function(flight){
                    console.log(flight[0]);
                    FlightService.setFlight(flight[0]);
                    console.log("FLIGHT ALR SET");
                    $state.go('main');
                }, function(){
                    console.log("FLIGHT number on cookies is not valid");
                });
            }
            $scope.flightNumber = "BR216";
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
