// Weather SERVICE
function weatherService($http) {
    return {
        get : function() {
            return $http.get('/weathers');
        },
        update : function(id, data){
            return $http.put('/weathers/' + id, data);
        },
        create : function(data) {
            return $http.post('/weathers', data);
        },
        delete : function(id) {
            return $http.delete('/weathers/' + id);
        }
    }
};
