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
})();