class RestaurantsService {
    
    //public static $inject = ['$http'];
    
    constructor(private $http: angular.IHttpService){
        
    }
        
    public getRestaurants(options: {sort: string}): angular.IPromise<any> {
        
        var url = 'http://www.zaragoza.es/api/recurso/turismo/restaurante.json?';
        if (options.sort){
            url += 'sort=' + options.sort;
        }
        
        return this.$http.get(url).then(function(response){
            return response.data;
        });
    }
    
}

angular.module('app').service('restaurantsService', ['$http', RestaurantsService]);
