'use strict';

/**
 * @ngdoc overview
 * @name emptyatlasgithubioApp
 * @description
 * # emptyatlasgithubioApp
 *
 * Main module of the application.
 */

var app = angular.module('emptyatlasgithubioApp', ['angular-click-outside', 'ngRoute', 'ngSanitize']).config(function ($httpProvider, $routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html'
        })
        .when('/download', {
            templateUrl: 'views/download.html'
        })
        .otherwise({
            redirectTo: '/'
        });

});

app.run(function () {});

/**
 * @ngdoc function
 * @name emptyatlasgithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emptyatlasgithubioApp
 */
app.controller('MainCtrl', function ($scope, $templateCache, $window, $document, $timeout, MusicService) {

    $scope.songs = MusicService.songs;

    $(document).ready(function () {
        $('.parallax').parallax();
    });

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

    $scope.getCurrentYear = function () {
        try {
            return new Date().getFullYear();
        } catch (err) {
            console.error(err);
            return "2017";
        }
    };

    $scope.elementIsActive = function (element) {
        var el = document.getElementById(element);
        return angular.element(el).hasClass('active');
    };

    $scope.scrollTo = function (id) {
        console.log('attempting to scroll to element: ' + id);
        var target = document.getElementById(id);
        var targetPosition = getPosition(target);
        var navBar = document.getElementById('nav');
        var navBarHeight = navBar.offsetHeight;
        if (targetPosition.y === navBarHeight) {
            console.log('target already in frame');
        } else {
            $('html, body').animate({
                scrollTop: (target.offsetTop - navBarHeight),
                easing: 'slow'
            }, 1000, function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                }
            });
        }
    };

    function getPosition(element) {
        var xPosition = 0;
        var yPosition = 0;

        while (element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }

        return {
            x: xPosition,
            y: yPosition
        };
    }

    $(document).ready(function () {
        $('.collapsible').collapsible();
        $('#lyrics-display').collapsible();
    });

    $scope.activeSong = undefined;

    $scope.showLyrics = function (s) {
        console.log('Imma show da [' + s + '] lyrics!');
        var songs = MusicService.songs;
        var index = songs.findIndex(function (obj) {
            return obj.title === s;
        });
        var song = angular.copy(songs[index]);
        if ($scope.activeSong !== undefined && song.title === $scope.activeSong.title) {
            console.log('closing lyric box');
            $('#lyrics-display').collapse('hide');
            $timeout(function () {
                $scope.activeSong = undefined;
            }, 1000);
        } else {
            console.log('opening lyric box');
            $scope.activeSong = song;
            $timeout(function () {
                $('#lyrics-display').collapse('show');
            }, 250);
        }
    };

});
