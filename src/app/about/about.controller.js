(function() {
  'use strict';

  angular
    .module('h2o')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($routeParams, $scope) {
    $scope.status = 'instructors';
    $scope.isActive = function(status) {
      return status === $scope.status;
      // return status === $routeParams['name'] || angular.equals({}, $routeParams) && status === 'instructors';
    };
  }
})();
