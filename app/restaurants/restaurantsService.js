angular.module('app').service('restaurantsService', ['$http', function($http){
    
    var srv = {

        getRestaurants : function(options) {        
            var url = 'http://www.zaragoza.es/api/recurso/turismo/restaurante.json?';
            if (options.sort){
                url += 'sort=' + options.sort;
            }
            
            return $http.get(url).then(function(response){
                return response.data;
            });
        }        
    }
    
    return srv;
    
}]);
