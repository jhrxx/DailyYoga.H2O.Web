(function() {
  'use strict';

  angular
    .module('h2o')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
