(function() {
  'use strict';

  angular
    .module('h2o')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $location, $anchorScroll, $interval) {
    $anchorScroll.yOffset = 70;
    $scope.goDownload = function(){
      $location.hash('download');
      $anchorScroll();
    }

    $scope.goFreatures = function(){
      $location.hash('freatures');
      $anchorScroll();
    }
    $scope.bg = 1;
    $interval(function(){
      if($scope.bg === 3) {
        $scope.bg = 1;
      } else {
        $scope.bg++;
      }
    }, 5000);
  }
})();
