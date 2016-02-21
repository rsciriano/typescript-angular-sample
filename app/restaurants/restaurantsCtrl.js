angular.module('app').controller("restaurantsCtrl", ['restaurantsService', '$scope', function(restaurantsService, $scope) {
    var vm = this;
    
    vm.title = 'Listado de restaurantes de Zaragoza';
    vm.sortCriteria = 'id asc';
    
    function loadData() {
        restaurantsService.getRestaurants({sortCriteria: vm.sortCriteria}).then(function(data) {
            vm.restaurants = data; 
        });
    }
    
    $scope.$watch('vm.sortCriteria', function(value) {
        loadData();
    });
    
    loadData();
}]);