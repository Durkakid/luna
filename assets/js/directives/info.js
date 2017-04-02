angular.module('luna').directive('information', function(){
  return {
    restrict: 'E',
    templateUrl: '../templates/info.html',
    bindToController: true,
    link: function(scope, elem, attrs){

    }
  };
});
