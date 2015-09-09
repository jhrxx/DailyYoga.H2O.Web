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
      $scope.isCollapsed = false;
      angular.element(window).bind('click', function($event) {
        // $log.log($event)
        if($event.target.className === "icon-bar" || $event.target.className === "navbar-toggle") {
          $scope.isCollapsed = !$scope.isCollapsed;
          $scope.$apply();
        } else if ($event.target.className != "nav navbar-nav navbar-right" && $event.target.className != "navbar-header" && $event.target.className != "navbar-collapse collapse in") {
          if($event.target.className !== "icon-bar" || $event.target.className !== "navbar-toggle") {
            $scope.isCollapsed = false;
            $scope.$apply();
          }
        }
      });
    }
  }

})();
