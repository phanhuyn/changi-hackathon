(function() {
    angular.module('changi').factory('Flight', function($resource){
        return $resource('/flights/:id');
    });
    angular.module('changi').factory('ChatBox', function($resource){
        return $resource('/chat_boxes.json');
    });
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
        return $resource('/users/:id', {id: '@id'},
            {
                post: {
                    method: "POST",
                    isArray: false,
                    headers: {
                        'Accept':'application/json'
                    }
                }
            });
    });
    angular.module('changi').factory('FlightService', function () {
        var flight = null;
        return{
            getFlight: function() {
                return flight;
            },
            setFlight: function(f) {
                flight = f;
            }
        }
    });
    angular.module('changi').factory('Utils', function() {
        return {
            getCookies: getCookies,
            deleteCookies: deleteCookies
        };
        function getCookies(){
            console.log(document.cookie);
            var cookies = {};
            var splitCookies = document.cookie.split(';');
            for(var i=0;i<splitCookies.length;i++){
                var temp = splitCookies[i].trim().split('=');
                cookies[temp[0]] = temp[1];
            }
            return cookies;
        }
        function deleteCookies() {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        }
    });
})();