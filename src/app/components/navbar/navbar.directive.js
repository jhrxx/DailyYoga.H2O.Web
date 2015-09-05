(function() {
  'use strict';

  angular
    .module('h2o')
    .directive('navbar', navbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      }//,
      // controller: NavbarController,
      // // controllerAs: 'vm',
      // bindToController: true
    };

    return directive;

    /** @ngInject */
    // function NavbarController() {
    //   var vm = this;
    // }
  }

})();
