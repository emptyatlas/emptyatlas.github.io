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
        .when('/presskit', {
            templateUrl: 'views/press-kit.html',
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
app.controller('MainCtrl', function ($scope, $rootScope, $log, $templateCache, $window, $document, $timeout, $sce, $location, LyricService, ModuleService, VideoService) {

    // This link is separated to fool spam bots
    $scope.sendMail = 'mai' + 'lto' + ':' + 'hello' + '@emptyatlas.com';
    $scope.downloadHelp = $scope.sendMail + '?subject=Song%20Download%20Help&body=I%27m%20having%20trouble%20using%20the%20free%20download%20link%20on%20your%20website.%20Could%20you%20email%20me%20a%20copy%20of%20the%20song%20instead%3F%0A%0AThanks%21';

    // Social links
    $scope.facebookUrl = 'http://facebook.com/emptyatlasmusic';
    $scope.instagramUrl = 'http://instagram.com/emptyatlas';
    $scope.youTubeUrl = 'https://www.youtube.com/user/emptyatlasmusic';

    // Music Links
    // Short Fiction
    $scope.iTunesUrl = 'https://music.apple.com/us/album/maximal-single/1506115438?ls=1&app=itunes';
    $scope.appleMusicUrl = 'https://music.apple.com/us/artist/empty-atlas/902603393';
    $scope.googlePlayUrl = 'https://play.google.com/store/music/album/Empty_Atlas_Maximal?id=Bs4jnnxm7e63fkg7xa5tq2iakqm&hl=en_US';
    $scope.spotifyUrl = 'https://open.spotify.com/track/6L6INRu2NkZgju7yzOh4D5';
    $scope.amazonMusicUrl = 'https://www.amazon.com/Maximal-Empty-Atlas/dp/B086QJTF4X/ref=sr_1_1';
    $scope.soundCloudUrl = 'https://soundcloud.com/empty-atlas';

    // Credit
    $scope.emmiSprayberryUrl = 'https://www.emmisprayberry.com/';
    $scope.azhaSandersUrl = 'https://azhatattoos.com/';
    $scope.jbLawrenceUrl = 'https://www.facebook.com/jblawrencemusicvideoandphotography/';
    $scope.kodyGautierUrl = 'https://www.kodygautier.com/';
    $scope.bestOkDesignsUrl = 'https://bestokdesigns.com/#/';

    $scope.songs = LyricService.songs;
    $scope.videos = VideoService.videos;
    $scope.albums = [
        {
          name: 'MAXIMAL (single)',
          year: '2020',
          image: '/images/maximal-single-cover.png',
          spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/7l79vt3E4JzAZyO7K9QVpP'),
          appleMusicUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/maximal/1506115438?i=1506115442?app=music'),
          iTunesUrl: $sce.trustAsResourceUrl($scope.iTunesUrl),
          soundCloudUrl: undefined,
          googlePlayUrl: $sce.trustAsResourceUrl($scope.googlePlayUrl),
          amazonMusicUrl: $sce.trustAsResourceUrl($scope.amazonMusicUrl)
        },
        {
          name: 'SHORT FICTION (single)',
          year: '2018',
          image: '/images/Short-Fiction-Cover.png',
          spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/5C3dwDvD8Tx70K8T8EpdKY'),
          appleMusicUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/short-fiction-single/1412982650?app=music'),
          iTunesUrl: $sce.trustAsResourceUrl($scope.iTunesUrl),
          soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/empty-atlas/short-fiction-empty-atlas-single'),
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
            // appleMusicUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/anniversary/902603298?app=music'),
            // iTunesUrl: $sce.trustAsResourceUrl('https://itunes.apple.com/us/album/anniversary/902603298'),
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

    $scope.getCurrentYear = function () {
        try {
            return new Date().getFullYear();
        } catch (err) {
            console.error(err);
            return "2019";
        }
    };

    angular.element(document).ready(function () {
        console.log("Page is finished loading. Try to scroll to element if necessary.");
        if (ModuleService.activeModule !== '' && ModuleService.activeModule !== undefined) {
            $scope.scrollTo(ModuleService.activeModule);
        }
    });

    $scope.clearActiveModule = function () {
        ModuleService.activeModule = '';
    };

    $scope.scrollTo = function (id, offset) {
        console.log('attempting to scroll to element: ' + id);
        ModuleService.activeModule = id;

        try {
            console.log('closing sidenav just in case');
            $('.sidenav').sidenav('close');
        } catch (error) {
            console.log('sidenav doesn\'t exist. ignoring error.');
        }

        var currentLocation = $location.url();
        console.log("currentLocation [" + currentLocation + "]");
        if (currentLocation !== "/") {
            $location.url("/");
        }

        if (offset === undefined) offset = 0;
        var target = document.getElementById(id);
        var targetPosition = getPosition(target);
        var navBar = document.getElementById('nav');
        var navBarHeight = navBar.offsetHeight;
        if (targetPosition.y === navBarHeight && id !== 'home') {
            console.log('target already in frame');
        } else {
            $('html, body').animate({
                scrollTop: (target.offsetTop - navBarHeight - offset),
                easing: 'slow'
            }, 1000, function () {
                // Callback after animation
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

    function animateCss(element, animationName, callback) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }

    $(document).ready(function () {
        $('.parallax').parallax();
    });

    //    $('#music').appear();

    //    $('#music').on('appear', function (event, $all_appeared_elements) {
    // this element is now inside browser viewport
    //        console.log('music element appeared');
    //        animateCss('#music', 'fadeInUp');
    //        var musicContent = $('#music > div > div');
    //    });

});
