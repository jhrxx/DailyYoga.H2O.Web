(function() {
  'use strict';

  angular
    .module('h2o')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $location, $anchorScroll) {
    $anchorScroll.yOffset = 70;
    $scope.goDownload = function(){
      $location.hash('download');
      $anchorScroll();
    }

    $scope.goFreatures = function(){
      $location.hash('freatures');
      $anchorScroll();
    }
  }
})();
