(function() {
  'use strict';

  angular
    .module('h2o')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/exercises', {
        templateUrl: 'app/exercises/exercises.html',
        controller: 'ExercisesController',
        controllerAs: 'exerc'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'app/contact/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
