angular.module('luna').directive('lunatitle', function(){
  return {
    restrict: 'E',
    templateUrl: '../templates/lunaTitle.html',
    bindToController: true,
    link: function(scope, elem, attrs){

    }
  };
});
