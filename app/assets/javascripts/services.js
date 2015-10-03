(function() {
    angular.module('changi').factory('Flight', function($resource){
        return $resource('/flights.json');
    });
    angular.module('changi').factory('ChatBox', function($resource){
        return $resource('/chat_boxes.json');
    })
    angular.module('changi').factory('ChatService', function(){
        var flight_id = null;
        return {
            setFlightId: function(id) {
                flight_id = id;
            },
            getFlightId: function() {
                return flight_id;
            }
        }
    });
    angular.module('changi').factory('Comment', function($resource) {
        return $resource('/comments.json');
    });
    angular.module('changi').factory('User', function($resource){
        return $resource('/users.json/:id', {id: '@id'},
            {
                post: {
                    method: "POST",
                    isArray: false,
                    headers: {
                        'Accept':'application/json'
                    }
                }
            });
    })
})();