'use strict';

/**
 * @ngdoc overview
 * @name emptyatlasgithubioApp
 * @description
 * # emptyatlasgithubioApp
 *
 * Main module of the application.
 */
angular.module('emptyatlasgithubioApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/store', {
      templateUrl: 'views/store.html',
      controller: 'MainCtrl',
      controllerAs: 'about'
    })
    .when('/news', {
      templateUrl: 'views/news.html',
      controller: 'MainCtrl',
      controllerAs: 'about'
    }).when('contact-form.php', {})
    .otherwise({
      redirectTo: '/'
    });
}).run(function($templateCache) {
  // $templateCache.put('news', 'views/news.html');
});

/**
 * @ngdoc function
 * @name emptyatlasgithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emptyatlasgithubioApp
 */
angular.module('emptyatlasgithubioApp').controller('MainCtrl', function($scope, $http, $templateCache, $templateRequest, $sce, $compile, $sanitize) {

  $scope.showContactForm = function() {
    _gscq.push(['trackPage', '/contact']);
  };

  $scope.hideMenu = function() {
    angular.element('#js-navbar-collapse').collapse('hide');
    return true;
  };

  $scope.getLatestNews = function() {
    console.log('attempting to get news template');
    var template = $templateCache.get('newsTemplate')
      // console.log(template);
    var latest = $(template).filter('div.blog-post').splice(0, 2);
    // console.log(latest);
    $scope.latestNews = latest;
  };

});