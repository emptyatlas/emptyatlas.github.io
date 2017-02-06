'use strict';

/**
 * @ngdoc overview
 * @name emptyatlasgithubioApp
 * @description
 * # emptyatlasgithubioApp
 *
 * Main module of the application.
 */
angular.module('emptyatlasgithubioApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'angular-click-outside']).config(function ($routeProvider) {
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
}).run(function () {});

/**
 * @ngdoc function
 * @name emptyatlasgithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emptyatlasgithubioApp
 */
angular.module('emptyatlasgithubioApp').controller('MainCtrl', function ($scope, $templateCache, $window, MerchService, NewsService) {

    $scope.$on('$viewContentLoaded', function () {
        $window.scrollTo(0, 0);
    });

    $scope.showContactForm = function () {
        _gscq.push(['trackPage', '/contact']);
    };

    $scope.hideMenu = function () {
        angular.element('#js-navbar-collapse').collapse('hide');
        return true;
    };

    $scope.openLink = function (link) {
        console.log('attempting to open link [' + link + ']');
        $window.open(link, '_blank');
    };

    $scope.merchList = MerchService.merchList;
    $scope.squareStoreLink = MerchService.squareStoreLink;
    $scope.newsList = NewsService.newsList;
    $scope.latestNews = NewsService.newsList.slice(0, 2);

    $scope.getCurrentYear = function () {
        try {
            return new Date().getFullYear();
        } catch (err) {
            console.error(err);
            return "2017";
        }
    };

});