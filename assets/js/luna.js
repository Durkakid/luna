var myApp = angular.module('luna', ['ngMaterial']);

myApp.controller('crater', ['$scope', 'funfacts', function($scope, funfacts) {

  $scope.funfacts = funfacts;
  $scope.showInfo_a = $scope.showInfo_b = $scope.showInfo_c = $scope.showInfo_d = false;
  /*console.log(funfacts.info1);*/

  var vm = this;
  vm.isActive = [];
  for (var i = 0, len = $scope.funfacts.length; i < len; i++) {
    vm.isActive[i] = false;
  }

  vm.setActive = function(ind) {
    for (var i = 0, len = vm.isActive.length; i < len; i++) {
      vm.isActive[i] = i === ind;
    }
  };
}]);
