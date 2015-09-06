(function() {
  'use strict';

  angular
    .module('h2o')
    .directive('footinfo', footinfo);

  /** @ngInject */
  function footinfo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footinfo/footinfo.html',
      scope: {
          creationDate: '='
      }
    };

    return directive;
  }

})();
