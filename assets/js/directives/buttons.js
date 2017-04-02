angular.module('luna').directive('buttons', function(){
  return {
    restrict: 'E',
    templateUrl: '../templates/buttons.html',
    bindToController: true,
    link: function(scope, elem, attrs){

    }
  };
});
