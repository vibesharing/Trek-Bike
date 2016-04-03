// Weather SERVICE
function weatherService($http) {
    return {
        geta : function(city) {
            return $http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=295594b2f0f74cb1eafdf26d818de19b"+"&units=metric");
        },
        getb : function(city) {
            return $http.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID=295594b2f0f74cb1eafdf26d818de19b"+"&units=metric");
        }
    };
}
