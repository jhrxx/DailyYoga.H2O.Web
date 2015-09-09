(function() {
  'use strict';

  angular
    .module('h2o')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController
      // // controllerAs: 'vm',
      // bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, $location, $log) {
      $scope.isActive = function(path) {
        return $location.path() == path;
      }
    }
  }

})();
