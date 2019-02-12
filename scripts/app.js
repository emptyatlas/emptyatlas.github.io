'use strict';

/**
 * @ngdoc overview
 * @name emptyatlasgithubioApp
 * @description
 * # emptyatlasgithubioApp
 *
 * Main module of the application.
 */

var app = angular.module('emptyatlasgithubioApp', ['ngRoute', 'ngSanitize']).config(function ($httpProvider, $routeProvider, $locationProvider) {

    //    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/download', {
            templateUrl: 'views/download.html',
            controller: 'MainCtrl'
        })
        .when('/music', {
            templateUrl: 'views/music.html',
            controller: 'MainCtrl'
        })
        .when('/video', {
            templateUrl: 'views/video.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

});

app.run(function () {});

app.service("ModuleService", function () {
    return {
        activeModule: ''
    }
});

/**
 * @ngdoc function
 * @name emptyatlasgithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emptyatlasgithubioApp
 */
app.controller('MainCtrl', function ($scope, $rootScope, $log, $templateCache, $window, $document, $timeout, $sce, LyricService, ModuleService, VideoService) {

    // This link is separated to fool spam bots
    $scope.sendMail = 'mai' + 'lto' + ':' + 'hello' + '@emptyatlas.com';

    // Social links
    $scope.facebookUrl = 'http://facebook.com/emptyatlasmusic';
    $scope.instagramUrl = 'http://instagram.com/emptyatlas';
    $scope.youTubeUrl = 'https://www.youtube.com/user/emptyatlasmusic';

    // Music Links
    // Short Fiction
    $scope.iTunesUrl = 'http://itunes.apple.com/album/id1412982650?ls=1&app=itunes';
    $scope.appleMusicUrl = 'http://itunes.apple.com/album/id/1412982650';
    $scope.googlePlayUrl = 'https://play.google.com/store/music/album/Empty_Atlas_Short_Fiction?id=Bb3soszugorqekta7yew4vfbe34';
    $scope.spotifyUrl = 'https://open.spotify.com/track/10dP2wOiZgRXC7cku6nrpy';
    $scope.amazonMusicUrl = 'https://www.amazon.com/Short-Fiction-Empty-Atlas/dp/B07FMLJTJF/ref=sr_1_2';
    $scope.soundCloudUrl = 'https://soundcloud.com/empty-atlas/short-fiction-empty-atlas-single';

    // Credit
    $scope.emmiSprayberryUrl = 'https://www.emmisprayberry.com/';
    $scope.azhaSandersUrl = 'https://azhatattoos.com/';
    $scope.jbLawrenceUrl = 'https://www.facebook.com/jblawrencemusicvideoandphotography/';
    $scope.bestOkDesignsUrl = 'https://bestokdesigns.com/#/';

    $scope.songs = LyricService.songs;
    $scope.videos = VideoService.videos;
    $scope.albums = [
        {
            name: 'SHORT FICTION (single)',
            year: '2018',
            image: '/images/Short-Fiction-Cover.png',
            spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/5C3dwDvD8Tx70K8T8EpdKY'),
            appleMusicUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/short-fiction-single/1412982650?app=music'),
            iTunesUrl: $sce.trustAsResourceUrl($scope.iTunesUrl),
            soundCloudUrl: $sce.trustAsResourceUrl($scope.soundCloudUrl),
            googlePlayUrl: $sce.trustAsResourceUrl($scope.googlePlayUrl),
            amazonMusicUrl: $sce.trustAsResourceUrl($scope.amazonMusicUrl)
        },
        {
            name: 'HESTIA',
            year: '2016',
            image: '/images/Hestia_smol.jpg',
            spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/0LiGP71p9bEpbV7cY4DwLd'),
            appleMusicUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/hestia/1172021169?app=music'),
            iTunesUrl: $sce.trustAsResourceUrl('https://itunes.apple.com/us/album/hestia/1172021169'),
            soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/empty-atlas/sets/hestia-full-album-stream'),
            googlePlayUrl: $sce.trustAsResourceUrl('https://play.google.com/store/music/album/Empty_Atlas_Hestia?id=Bhygwq7rdqe6sabtmvvescbk4ce'),
            amazonMusicUrl: $sce.trustAsResourceUrl('https://www.amazon.com/dp/B01N1NZFMU/ref=cm_sw_em_r_mt_dp_U_vfGyCbENVXSZJ')
        },
        {
            name: 'ANNIVERSARY',
            year: '2012',
            image: '/images/anniversary.jpg',
            spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/7eSkqCk3UG2OUHxrrh0YFc'),
            appleMusicUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/anniversary/902603298?app=music'),
            iTunesUrl: $sce.trustAsResourceUrl('https://itunes.apple.com/us/album/anniversary/902603298'),
            soundCloudUrl: undefined,
            googlePlayUrl: $sce.trustAsResourceUrl('https://play.google.com/store/music/album/Empty_Atlas_Anniversary?id=B27zpkjzpokqbd3rngky5vtptia'),
            amazonMusicUrl: undefined
        },
        {
            name: 'HOLIDAY PARTIES (single)',
            year: '2018',
            image: '/images/holiday-parties.png',
            spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/3zndfu65WOEcM6nhWi4P0e'),
            appleMusicUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/holiday-parties-single/1445540114?app=music'),
            iTunesUrl: $sce.trustAsResourceUrl('https://itunes.apple.com/us/album/holiday-parties-single/1445540114'),
            soundCloudUrl: undefined,
            googlePlayUrl: $sce.trustAsResourceUrl('https://play.google.com/store/music/album/Empty_Atlas_Holiday_Parties?id=Bukgabgp4m4kxtfhwzdvgp6v4oe'),
            amazonMusicUrl: $sce.trustAsResourceUrl('https://www.amazon.com/dp/B07L45TC6V/ref=cm_sw_em_r_mt_dp_U_VlGyCb7GQXVTQ')
        }
    ];

    //    $(document).ready(function () {
    //        $('.parallax').parallax();
    //    });
    //
    //    $scope.$on('$viewContentLoaded', function () {
    //        $window.scrollTo(0, 0);
    //    });
    //
    //    $scope.showContactForm = function () {
    //        _gscq.push(['trackPage', '/contact']);
    //    };
    //
    //    $scope.hideMenu = function () {
    //        angular.element('#js-navbar-collapse').collapse('hide');
    //        return true;
    //    };
    //
    //    $scope.openLink = function (link) {
    //        console.log('attempting to open link [' + link + ']');
    //        $window.open(link, '_blank');
    //    };

    $scope.getCurrentYear = function () {
        try {
            return new Date().getFullYear();
        } catch (err) {
            console.error(err);
            return "2017";
        }
    };

    //    $scope.elementIsActive = function (element) {
    //        var el = document.getElementById(element);
    //        return angular.element(el).hasClass('active');
    //    };

    $rootScope.$on("$routeChangeSuccess", function () {
        $log.debug("$routeChangeSuccess is fired");
        $log.debug("ModuleService.activeModule [" + ModuleService.activeModule + "]")
        $scope.$on('$viewContentLoaded', function () {
            $log.debug("$viewContentLoaded is fired");
            if (ModuleService.activeModule !== '' && ModuleService.activeModule !== undefined) {
                $scope.scrollTo(ModuleService.activeModule);
            }
        });
    });

    $scope.clearActiveModule = function () {
        ModuleService.activeModule = '';
    };

    $scope.scrollTo = function (id, offset) {
        console.log('attempting to scroll to element: ' + id);
        ModuleService.activeModule = id;
        if (offset === undefined) offset = 0;
        var target = document.getElementById(id);
        var targetPosition = getPosition(target);
        var navBar = document.getElementById('nav');
        var navBarHeight = navBar.offsetHeight;
        if (targetPosition.y === navBarHeight) {
            console.log('target already in frame');
        } else {
            $('html, body').animate({
                scrollTop: (target.offsetTop - navBarHeight - offset),
                easing: 'slow'
            }, 1000, function () {
                // Callback after animation
                // Must change focus!
                //                var $target = $(target);
                //                $target.focus();
                //                if ($target.is(":focus")) { // Checking if the target was focused
                //                    return false;
                //                } else {
                //                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                //                    $target.focus(); // Set focus again
                //                }
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

    //    $(document).ready(function () {
    //        $('.collapsible').collapsible();
    //        $('#lyrics-display').collapsible();
    //    });

    $scope.activeSong = undefined;

    $scope.showLyrics = function (song) {
        console.log('Imma show da [' + song + '] lyrics!');
        var songs = LyricService.songs;
        var index = songs.findIndex(function (obj) {
            return obj.title === song;
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

    $('#lyrics-display').on('shown.bs.collapse', function () {
        $scope.scrollTo('lyrics-display-parent');
    });

});
