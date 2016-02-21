angular.module('app').directive('robTableSort', [function(){
  
  return {
      restrict: "A",
      scope: {
        sortCriteria: '=robTableSort'  
      },
      link: function link(scope, element, attrs) {
        
        function applyStyles() {
            if (scope.sortCriteria === attrs.field + ' asc'){
                element.removeClass('sorting');
                element.removeClass('sorting_desc');
                element.addClass('sorting_asc');
            }            
            else if (scope.sortCriteria === attrs.field + ' desc'){
                element.removeClass('sorting');
                element.removeClass('sorting_asc');
                element.addClass('sorting_desc');
            }            
            else {
                element.removeClass('sorting_asc');
                element.removeClass('sorting_desc');
                element.addClass('sorting');
            }            
        }
        
        
        element.click(function() {
            var newSort;
            if (scope.sortCriteria === attrs.field + ' asc'){
                newSort = attrs.field + ' desc'
            }            
            else if (scope.sortCriteria === attrs.field + ' desc'){
                newSort = attrs.field + ' asc'
            }            
            else {
                newSort = attrs.field + ' asc'
            }     
            
            scope.$apply(function(){
                scope.sortCriteria = newSort;
            });       
            
        });
          
        scope.$watch('sortCriteria', function(value) {
            applyStyles();
        });
        
        applyStyles();    
      }
  }
    
}]);