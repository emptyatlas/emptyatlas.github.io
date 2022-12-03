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
      templateUrl: 'views/share.html',
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
    .when('/listen', {
      templateUrl: 'views/share.html',
      controller: 'MainCtrl'
    })
    .when('/news', {
      templateUrl: 'views/news.html',
      controller: 'MainCtrl'
    })
    .when('/share', {
      templateUrl: 'views/share.html',
      controller: 'MainCtrl'
    })
    .when('/lyrics', {
      templateUrl: 'views/lyrics.html',
      controller: 'MainCtrl'
    })
    .when('/live', {
      templateUrl: 'views/live.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'MainCtrl'
    })
    .when('/shop', {
      templateUrl: 'views/shop.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

});

app.run(function () {
});

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
app.controller('MainCtrl', function ($scope, $rootScope, $log, $templateCache, $window, $document, $timeout, $sce, $location, $filter, LyricService, ModuleService, VideoService, NewsService) {

  // This link is separated to fool spam bots
  $scope.sendMail = 'mai' + 'lto' + ':' + 'hello' + '@emptyatlas.com';
  $scope.downloadHelp = $scope.sendMail + '?subject=Song%20Download%20Help&body=I%27m%20having%20trouble%20using%20the%20free%20download%20link%20on%20your%20website.%20Could%20you%20email%20me%20a%20copy%20of%20the%20song%20instead%3F%0A%0AThanks%21';

  // Social links
  $scope.facebookUrl = 'https://www.facebook.com/emptyatlasmusic';
  $scope.instagramUrl = 'https://www.instagram.com/emptyatlas/';
  $scope.youTubeUrl = 'https://www.youtube.com/user/emptyatlasmusic';
  $scope.shopSquareUrl = 'https://empty-atlas-music.square.site/';
  $scope.shopAmazonUrl = 'https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3AEmpty+Atlas&ref=bl_sl_s_ap_web_7141123011';
  $scope.tikTokUrl = 'https://www.tiktok.com/@emptyatlas';

  // Featured Music Links
  $scope.iTunesUrl = 'https://music.apple.com/us/album/matador-single/1609745159?ls=1&app=itunes';
  $scope.appleMusicUrl = 'https://music.apple.com/us/album/matador-single/1609745159';
  $scope.appleMusicEmbedUrl = 'https://embed.music.apple.com/us/album/matador-single/1609745159';
  $scope.spotifyUrl = 'https://open.spotify.com/album/2mP5bHSqCnrrWYXdUpk1e7?si=eSmQycA8SWuVG-LuqtnFcg';
  $scope.spotifyEmbedUrl = 'https://open.spotify.com/embed/album/2mP5bHSqCnrrWYXdUpk1e7';
  $scope.amazonMusicUrl = 'https://amazon.com/music/player/albums/B09SBZYKJ5?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_upPWHrhQD1htmZGGEb3nM48id';
  $scope.soundCloudUrl = 'https://soundcloud.com/empty-atlas';
  $scope.youTubeMusicUrl = 'https://music.youtube.com/playlist?list=OLAK5uy_lvCMKSOYe7MI9h79Vsv9IJUjAknLUX_rE';
  $scope.tidalUrl = 'https://tidal.com/browse/album/216405710';
  $scope.bandcampUrl = 'https://emptyatlas.bandcamp.com/';

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
      name: 'I CAN\'T MAKE YOU LOVE ME (single)',
      year: '2022',
      image: '/images/I-Can\'t-Make-You-Love-Me-by-Empty-Atlas.png',
      spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/2WgmYEDI0Oo3avqBptHzQN?si=bAQYfUmdTWyiMguK2y9RJA'),
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/2WgmYEDI0Oo3avqBptHzQN'),
      appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/i-cant-make-you-love-me-single/1642993366'),
      appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/i-cant-make-you-love-me-single/1642993366'),
      iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/i-cant-make-you-love-me-single/1642993366'),
      soundCloudUrl: undefined,
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/watch?v=aL1l_1iDd4c&feature=share'),
      amazonMusicUrl: $sce.trustAsResourceUrl('https://amazon.com/music/player/albums/B0BCSWXW4X?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_BRA5nDTDwz4oh6sBCOIOKPdBo'),
      tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/album/246155419'),
      bandcampUrl: undefined
    },
    {
      name: 'HALF MAGIC (single)',
      year: '2022',
      image: '/images/Half-Magic-by-Empty-Atlas.jpg',
      spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/1Q2or21qEBVFMA7J5czbee?si=ayGnZAG-R2mHADTZhH0xWg'),
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/1Q2or21qEBVFMA7J5czbee'),
      appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/half-magic-single/1627843726'),
      appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/half-magic-single/1627843726'),
      iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/half-magic-single/1627843726'),
      soundCloudUrl: undefined,
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/watch?v=Y4tzs-qAYTA&feature=share'),
      amazonMusicUrl: $sce.trustAsResourceUrl('https://amazon.com/music/player/albums/B0B35KBWRM?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_TCDUjm9Hqnup6IFQxFL8PgauV'),
      tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/album/232158138'),
      bandcampUrl: undefined
    },
    {
      name: 'MATADOR (single)',
      year: '2022',
      image: '/images/Matador-by-Empty-Atlas.jpg',
      spotifyUrl: $sce.trustAsResourceUrl($scope.spotifyUrl),
      spotifyEmbedUrl: $sce.trustAsResourceUrl($scope.spotifyEmbedUrl),
      appleMusicUrl: $sce.trustAsResourceUrl($scope.appleMusicUrl),
      appleMusicEmbedUrl: $sce.trustAsResourceUrl($scope.appleMusicEmbedUrl),
      iTunesUrl: $sce.trustAsResourceUrl($scope.iTunesUrl),
      soundCloudUrl: undefined,
      youTubeMusicUrl: $sce.trustAsResourceUrl($scope.youTubeMusicUrl),
      amazonMusicUrl: $sce.trustAsResourceUrl($scope.amazonMusicUrl),
      tidalUrl: $sce.trustAsResourceUrl($scope.tidalUrl),
      bandcampUrl: undefined
    },
    {
      name: 'DIPPING VAT SESSIONS - LIVE',
      year: '2021',
      image: '/images/dipping-vat-sessions.jpg',
      spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/7q117hZ7SDeFOXFv96qAwf?si=usXiuBaxQRqNjlVfUl-zyg'),
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/7q117hZ7SDeFOXFv96qAwf'),
      appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/dipping-vat-sessions-live-at-dipping-vat-studio-ep/1567266981'),
      appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/dipping-vat-sessions-live-at-dipping-vat-studio-ep/1567266981'),
      iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/dipping-vat-sessions-live-at-dipping-vat-studio-ep/1567266981'),
      soundCloudUrl: undefined,
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_mmG0VSHrOC41Hs76ddRLBGiVwRNSNh10w&feature=share'),
      amazonMusicUrl: undefined,
      tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/album/183915772'),
      bandcampUrl: undefined
    },
    {
      name: 'KAIROS',
      year: '2020',
      image: '/images/Kairos-as-performed-by-Empty-Atlas.png',
      spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/1R6XM9xoyFz1iRUaRATuid'),
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/1R6XM9xoyFz1iRUaRATuid'),
      appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/kairos/1512448187'),
      appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/kairos/1512448187'),
      iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/kairos/1512448187?ls=1&app=itunes'),
      soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/empty-atlas'),
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_n2GxDo7LgrkZK5BNZyq_HAGGDrOeQRMPg'),
      amazonMusicUrl: $sce.trustAsResourceUrl('https://www.amazon.com/Kairos-Empty-Atlas/dp/B088BH853N/ref=sr_1_1'),
      tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/album/140616400'),
      bandcampUrl: $sce.trustAsResourceUrl('https://emptyatlas.bandcamp.com/album/kairos')
    },
    // {
    //   name: 'MAXIMAL (single)',
    //   year: '2020',
    //   image: '/images/maximal-single-cover.png',
    //   spotifyUrl: undefined,
    //   spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/7l79vt3E4JzAZyO7K9QVpP'),
    //   appleMusicUrl: undefined,
    //   appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/maximal/1506115438?i=1506115442&app=music'),
    //   iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/maximal-single/1506115438?ls=1&app=itunes'),
    //   soundCloudUrl: undefined,
    //   youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/watch?v=6poLggcs9ww&feature=share'),
    //   amazonMusicUrl: $sce.trustAsResourceUrl('https://www.amazon.com/Maximal-Empty-Atlas/dp/B086QJTF4X/ref=sr_1_1'),
    //   tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/track/136269864'),
    //   bandcampUrl: undefined
    // },
    {
      name: 'SHORT FICTION (single)',
      year: '2018',
      image: '/images/Short-Fiction-Cover.png',
      spotifyUrl: undefined,
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/5C3dwDvD8Tx70K8T8EpdKY'),
      appleMusicUrl: undefined,
      appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/short-fiction-single/1412982650?app=music'),
      iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/short-fiction-single/1412982650?ls=1&app=itunes'),
      soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/empty-atlas/short-fiction-empty-atlas-single'),
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/watch?v=VXz2cdKXXH8&feature=share'),
      amazonMusicUrl: $sce.trustAsResourceUrl('https://www.amazon.com/dp/B07FMLJTJF/ref=cm_sw_em_r_mt_dp_U_25fVEbBTQMP9Y'),
      tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/track/92107037?play=true'),
      bandcampUrl: $sce.trustAsResourceUrl('https://emptyatlas.bandcamp.com/track/short-fiction')
    },
    {
      name: 'HESTIA',
      year: '2016',
      image: '/images/Hestia_smol.jpg',
      spotifyUrl: undefined,
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/0LiGP71p9bEpbV7cY4DwLd'),
      appleMusicUrl: undefined,
      appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/hestia/1172021169?app=music'),
      iTunesUrl: $sce.trustAsResourceUrl('https://itunes.apple.com/us/album/hestia/1172021169'),
      soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/empty-atlas/sets/hestia-full-album-stream'),
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_kfaL5Pr94FGRO-jA236UAsfQz5nAa8ThI'),
      amazonMusicUrl: $sce.trustAsResourceUrl('https://www.amazon.com/dp/B01N1NZFMU/ref=cm_sw_em_r_mt_dp_U_vfGyCbENVXSZJ'),
      tidalUrl: undefined,
      bandcampUrl: $sce.trustAsResourceUrl('https://emptyatlas.bandcamp.com/album/hestia')
    },
    {
      name: 'ANNIVERSARY',
      year: '2012',
      image: '/images/anniversary.jpg',
      spotifyUrl: undefined,
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/7eSkqCk3UG2OUHxrrh0YFc'),
      appleMusicUrl: undefined,
      appleMusicEmbedUrl: undefined, //$sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/anniversary/902603298?app=music'),
      iTunesUrl: undefined, //$sce.trustAsResourceUrl('https://itunes.apple.com/us/album/anniversary/902603298'),
      soundCloudUrl: undefined,
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_kaIwdpuMJgBQodx_wtpM1FrfBZwyjujSU'),
      amazonMusicUrl: undefined,
      tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/album/50568535?play=true'),
      bandcampUrl: undefined
    },
    {
      name: 'HOLIDAY PARTIES (single)',
      year: '2018',
      image: '/images/holiday-parties.png',
      spotifyUrl: undefined,
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/3zndfu65WOEcM6nhWi4P0e'),
      appleMusicUrl: undefined,
      appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/holiday-parties-single/1445540114?app=music'),
      iTunesUrl: $sce.trustAsResourceUrl('https://itunes.apple.com/us/album/holiday-parties-single/1445540114'),
      soundCloudUrl: undefined,
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_nvc6x42AAEgFiPgerNMIDx0M-Bme3EB6c'),
      amazonMusicUrl: $sce.trustAsResourceUrl('https://www.amazon.com/dp/B07L45TC6V/ref=cm_sw_em_r_mt_dp_U_VlGyCb7GQXVTQ'),
      tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/track/100389767?play=true'),
      bandcampUrl: undefined
    }
  ];

  var maxCharLength = 148;
  $scope.news = NewsService.news;
  var viewType = 'list';

  $scope.toggleNewsView = function () {
    console.log(viewType);
    if (viewType === 'column') {
      $('#news-list').addClass('card-columns');
      $('#news-list').removeClass('col-md-6 offset-md-3');
      viewType = 'list';
    } else {
      $('#news-list').removeClass('card-columns');
      $('#news-list').addClass('col-md-6 offset-md-3');
      viewType = 'column';
    }
  };

  $scope.dateSortReverse = true;
  $scope.toggleDateSort = function () {
    $scope.dateSortReverse = !$scope.dateSortReverse;
  };

  $scope.isQuoteDefined = function (newsItem) {
    return newsItem.quote === undefined;
  }

  // Trim the description for the news articles to make sure they're evenly distributed.
  angular.forEach($scope.news, function (n) {
    if (n.desc !== undefined && n.desc.length >= maxCharLength) {
      var trimmedDesc = n.desc.slice(0, maxCharLength) + '...';
      n.desc = trimmedDesc;
    }
  });

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

  $scope.clearSideNav = function () {
    $('.sidenav').sidenav('close');
  };

  $scope.scrollTo = function (id, offset) {
    console.log('attempting to scroll to element: ' + id);
    ModuleService.activeModule = id;

    recordGoogleAnalyticsEvent('ScrollTo', 'click', id);

    try {
      console.log('closing sidenav just in case');
      $('.sidenav').sidenav('close');
    } catch (error) {
      console.log('sidenav doesn\'t exist. ignoring error.');
    }

    var currentLocation = $location.url();
    console.log("currentLocation [" + currentLocation + "]");
    // if (currentLocation !== "/" && id !== 'top') {
    //   $location.url("/");
    // }

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

  $(document).on('scroll', function () {
    var t = document.getElementById('scroll-to-top');
    var position = $(document).scrollTop();
    if (position <= 500) {
      t.style.display = 'none';
    } else {
      t.style.display = '';
    }
  });

  $scope.scrollToTop = function () {
    $('html, body').animate({
      scrollTop: (0),
      easing: 'slow'
    }, 1000, function () {
      // Callback after animation
    });
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
    recordGoogleAnalyticsEvent('Lyrics', 'show', song);
    var songs = LyricService.songs;
    console.debug(LyricService.songs);
    var index = songs.findIndex(function (obj) {
      console.log('Finding index of song title ['+song+']');
      return obj.title === song;
    });
    console.debug('Index of ['+song+'] is ['+index+']');
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
      $scope.scrollTo('lyrics-display-parent');
    }
  };

  $scope.showAdditionalInfo = function () {
    console.log("Showing additional info");
    $('#show-additional-info')[0].style.display = 'none';
    $timeout(function () {
      $('#additional-info').collapse('show');
    }, 250);
  };

  // $('#lyrics-display').on('shown.bs.collapse', function () {
  //   $scope.scrollTo('lyrics-display-parent');
  // });

  /**
   * GOOGLE ANALYTICS
   */

  $scope.recordLinkClick = function (clickLocation, name) {
    // Skip recording GA events to our account if in development.
    if (document.location.hostname != 'localhost' && document.location.hostname != '127.0.0.1') {
      console.log('opening link to [' + name + ']');
      recordGoogleAnalyticsEvent('OpenLink', clickLocation, name);
    } else {
      console.log('will not record Google Analytics event due to development hostname');
    }
  };

  function recordGoogleAnalyticsEvent(category, action, label) {
    // Skip recording GA events to our account if in development.
    if (document.location.hostname != 'localhost' && document.location.hostname != '127.0.0.1') {
      console.log('Recording Google Analytics event, category [' + category + '], action [' + action + '], label [' + label + ']');
      // Record Google Analytics event
      // ga('send', {
      //   hitType: 'event',
      //   eventCategory: category,
      //   eventAction: action,
      //   eventLabel: label
      // });
    } else {
      console.log('will not record Google Analytics event due to development hostname');
    }
  }

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

  $(document).ready(function () {
    $('.fixed-action-btn').floatingActionButton();
  });

  //    $('#music').appear();

  //    $('#music').on('appear', function (event, $all_appeared_elements) {
  // this element is now inside browser viewport
  //        console.log('music element appeared');
  //        animateCss('#music', 'fadeInUp');
  //        var musicContent = $('#music > div > div');
  //    });

});
