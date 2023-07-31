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
      templateUrl: 'views/main.html', controller: 'MainCtrl'
    })
    .when('/download', {
      templateUrl: 'views/share.html', controller: 'MainCtrl'
    })
    .when('/music', {
      templateUrl: 'views/music.html', controller: 'MainCtrl'
    })
    .when('/video', {
      templateUrl: 'views/video.html', controller: 'MainCtrl'
    })
    .when('/presskit', {
      templateUrl: 'views/press-kit.html', controller: 'MainCtrl'
    })
    .when('/listen', {
      templateUrl: 'views/share.html', controller: 'MainCtrl'
    })
    .when('/news', {
      templateUrl: 'views/news.html', controller: 'MainCtrl'
    })
    .when('/share', {
      templateUrl: 'views/share.html', controller: 'MainCtrl'
    })
    .when('/lyrics', {
      templateUrl: 'views/lyrics.html', controller: 'MainCtrl'
    })
    .when('/live', {
      templateUrl: 'views/live.html', controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html', controller: 'MainCtrl'
    })
    .when('/shop', {
      templateUrl: 'views/shop.html', controller: 'MainCtrl'
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
app.controller('MainCtrl', function ($scope, $rootScope, $log, $templateCache, $window, $document, $timeout, $sce, $location, $filter, $interval, LyricService, ModuleService, VideoService, NewsService) {

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
  $scope.iTunesUrl = 'https://music.apple.com/us/artist/empty-atlas/902603393?ls=1&app=itunes';
  $scope.appleMusicUrl = 'https://music.apple.com/us/artist/empty-atlas/902603393';
  $scope.appleMusicEmbedUrl = 'https://embed.music.apple.com/us/artist/empty-atlas/902603393';
  $scope.spotifyUrl = 'https://open.spotify.com/artist/3DB64zL8J0ALL9l7Op2YTn';
  $scope.spotifyEmbedUrl = 'https://open.spotify.com/embed/artist/3DB64zL8J0ALL9l7Op2YTn?utm_source=generator';
  $scope.amazonMusicUrl = 'https://www.amazon.com/music/player/artists/B01MSUTBIR/empty-atlas';
  $scope.soundCloudUrl = 'https://soundcloud.com/empty-atlas';
  $scope.youTubeMusicUrl = 'https://music.youtube.com/channel/UCvCzcTWweMYsv57bMIz2YMQ';
  $scope.tidalUrl = 'https://tidal.com/browse/artist/7186698';
  $scope.bandcampUrl = 'https://emptyatlas.bandcamp.com/';

  // Credit
  $scope.emmiSprayberryUrl = 'https://www.emmisprayberry.com/';
  $scope.azhaSandersUrl = 'https://azhatattoos.com/';
  $scope.jbLawrenceUrl = 'https://www.facebook.com/jblawrencemusicvideoandphotography/';
  $scope.kodyGautierUrl = 'https://www.kodygautier.com/';
  $scope.bestOkDesignsUrl = 'https://bestokdesigns.com/#/';
  $scope.brentMcQuillinPhotographyUrl = 'https://brent.photo/';

  $scope.songs = LyricService.songs;
  $scope.videos = VideoService.videos;

  $scope.albums = [{
    name: 'BELONG (single)',
    year: '2023',
    image: '/images/Belong-by-Empty-Atlas.jpeg',
    spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/6hLNjR2PFGjT1rXFQbEfdi?si=ntBVqqg0S0KXIRnRNe44ig'),
    spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/6hLNjR2PFGjT1rXFQbEfdi?utm_source=generator'),
    appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/belong-single/1692123174'),
    appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/belong-single/1692123174'),
    iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/belong-single/1692123174'),
    soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/empty-atlas/belong-new-single-out-72823/s-y5JXsT8qx9f?utm_source=mobi&utm_campaign=social_sharing&si=8e7420ec4b7f439b9dc241dbfb31c2c7'),
    youTubeMusicUrl: undefined, // $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_nSFTd_WN0soXTTlWEM4aRqOij4F5fxMbU&feature=share'),
    amazonMusicUrl: $sce.trustAsResourceUrl('https://amazon.com/music/player/albums/B0C7Q2SCSF?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_4TsAEGjvZaZd85fgW65PZebqN'),
    tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/album/299395849'),
    bandcampUrl: $sce.trustAsResourceUrl('https://emptyatlas.bandcamp.com/track/belong'),
    songs: [retrieveSong('Belong')]
  }, {
    name: 'I CAN\'T MAKE YOU LOVE ME (single)',
    year: '2022',
    image: '/images/I-Can\'t-Make-You-Love-Me-by-Empty-Atlas.png',
    spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/2WgmYEDI0Oo3avqBptHzQN?si=bAQYfUmdTWyiMguK2y9RJA'),
    spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/2WgmYEDI0Oo3avqBptHzQN?utm_source=generator'),
    appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/i-cant-make-you-love-me-single/1698282759'),
    appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/i-cant-make-you-love-me-single/1698282759'),
    iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/i-cant-make-you-love-me-single/1698282759'),
    soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/empty-atlas/i-cant-make-you-love-me-bonnie-raitt-cover-by-empty-atlas'),
    youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_nSFTd_WN0soXTTlWEM4aRqOij4F5fxMbU&feature=share'),
    amazonMusicUrl: $sce.trustAsResourceUrl('https://amazon.com/music/player/albums/B0CC928244?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_6v1NzPTcLM6CkqBKecVIGQM7m'),
    tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/album/305634587'),
    bandcampUrl: $sce.trustAsResourceUrl('https://emptyatlas.bandcamp.com/track/i-cant-make-you-love-me'),
    songs: [retrieveSong('I Can\'t Make You Love Me')]
  }, {
    name: 'HALF MAGIC (single)',
    year: '2022',
    image: '/images/Half-Magic-by-Empty-Atlas.jpg',
    spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/1Q2or21qEBVFMA7J5czbee?si=ayGnZAG-R2mHADTZhH0xWg'),
    spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/1Q2or21qEBVFMA7J5czbee?utm_source=generator'),
    appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/half-magic-single/1698277864'),
    appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/half-magic-single/1698277864'),
    iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/half-magic-single/1698277864'),
    soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/empty-atlas/half-magic-new-single-from-empty-atlas'),
    youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_mC5M9nfI2omX_Z7o5ppY8eu36JTDi--3g&feature=share'),
    amazonMusicUrl: $sce.trustAsResourceUrl('https://amazon.com/music/player/albums/B0CC8XY9D4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_nbdvHKnnW7cJBzXbAMGq0p7AS'),
    tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/album/305631271'),
    bandcampUrl: $sce.trustAsResourceUrl('https://emptyatlas.bandcamp.com/track/half-magic'),
    songs: [retrieveSong('Half Magic')]
  }, {
    name: 'MATADOR (single)',
    year: '2022',
    image: '/images/Matador-by-Empty-Atlas.jpg',
    spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/2mP5bHSqCnrrWYXdUpk1e7?si=eSmQycA8SWuVG-LuqtnFcg'),
    spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/2mP5bHSqCnrrWYXdUpk1e7?utm_source=generator'),
    appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/matador-single/1698313591'),
    appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/matador-single/1698313591'),
    iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/matador-single/1698313591?ls=1&app=itunes'),
    soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/empty-atlas/matador-promo'),
    youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_mzzgznnu9jvvcFp2x2-jMbG2KBK03KoWg&feature=share'),
    amazonMusicUrl: $sce.trustAsResourceUrl('https://amazon.com/music/player/albums/B0CC9NC1B8?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_noDV17iO2E9xgFIuznqF3qacI'),
    tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/album/305660541'),
    bandcampUrl: $sce.trustAsResourceUrl('https://emptyatlas.bandcamp.com/track/matador'),
    songs: [retrieveSong('Matador')]
  },
    //   {
    //   name: 'DIPPING VAT SESSIONS - LIVE',
    //   year: '2021',
    //   image: '/images/dipping-vat-sessions.jpg',
    //   spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/7q117hZ7SDeFOXFv96qAwf?si=usXiuBaxQRqNjlVfUl-zyg'),
    //   spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/7q117hZ7SDeFOXFv96qAwf?utm_source=generator'),
    //   appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/dipping-vat-sessions-live-at-dipping-vat-studio-ep/1567266981'),
    //   appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/dipping-vat-sessions-live-at-dipping-vat-studio-ep/1567266981'),
    //   iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/dipping-vat-sessions-live-at-dipping-vat-studio-ep/1567266981'),
    //   soundCloudUrl: undefined,
    //   youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_mmG0VSHrOC41Hs76ddRLBGiVwRNSNh10w&feature=share'),
    //   amazonMusicUrl: $sce.trustAsResourceUrl('https://amazon.com/music/player/albums/B094T4SDF7?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_AjF14L3ozclHHjqN8vTiqZFy0'),
    //   tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/album/183915772'),
    //   bandcampUrl: undefined,
    //   songs: [
    //     retrieveSong('Codebreaker'),
    //     retrieveSong('Florence'),
    //     retrieveSong('Famous Friends'),
    //     retrieveSong('Maximal'),
    //     retrieveSong('Valleys'),
    //     retrieveSong('Minimal')
    //   ]
    // },
    {
      name: 'KAIROS',
      year: '2020',
      image: '/images/Kairos-as-performed-by-Empty-Atlas.png',
      spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/1R6XM9xoyFz1iRUaRATuid'),
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/1R6XM9xoyFz1iRUaRATuid?utm_source=generator'),
      appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/kairos/1698345589'),
      appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/kairos/1698345589'),
      iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/kairos/1698345589?ls=1&app=itunes'),
      soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/empty-atlas'),
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_nTRorR_CNIW7h-AGftzmxbpXnSo_3NmdY'),
      amazonMusicUrl: $sce.trustAsResourceUrl('https://amazon.com/music/player/albums/B0CC9PPKBD?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_vyHm6IBgSobNb8X5evVxiSRhn'),
      tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/album/305659944'),
      bandcampUrl: $sce.trustAsResourceUrl('https://emptyatlas.bandcamp.com/album/kairos'),
      songs: [retrieveSong('Maximal'), retrieveSong('Codebreaker'), retrieveSong('Florence'), retrieveSong('Carcosa'), retrieveSong('Ouroboros'), retrieveSong('Birthday'), retrieveSong('Famous Friends'), retrieveSong('Sway'), retrieveSong('Valleys'), retrieveSong('Minimal')]
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
      spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/5C3dwDvD8Tx70K8T8EpdKY?si=BASxvGFVTjSA5GbNzFJLpQ'),
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/5C3dwDvD8Tx70K8T8EpdKY?utm_source=generator'),
      appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/short-fiction-single/1412982650'),
      appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/short-fiction-single/1412982650?app=music'),
      iTunesUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/short-fiction-single/1412982650?ls=1&app=itunes'),
      soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/empty-atlas/short-fiction-empty-atlas-single'),
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/watch?v=VXz2cdKXXH8&feature=share'),
      amazonMusicUrl: $sce.trustAsResourceUrl('https://www.amazon.com/dp/B07FMLJTJF/ref=cm_sw_em_r_mt_dp_U_25fVEbBTQMP9Y'),
      tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/track/92107037?play=true'),
      bandcampUrl: $sce.trustAsResourceUrl('https://emptyatlas.bandcamp.com/track/short-fiction'),
      songs: [retrieveSong('Short Fiction')]
    }, {
      name: 'HESTIA',
      year: '2016',
      image: '/images/Hestia_smol.jpg',
      spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/0LiGP71p9bEpbV7cY4DwLd?si=mP_Gx-cOSu2xb5F9RM66QA'),
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/0LiGP71p9bEpbV7cY4DwLd?utm_source=generator'),
      appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/hestia/1172021169'),
      appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/hestia/1172021169?app=music'),
      iTunesUrl: $sce.trustAsResourceUrl('https://itunes.apple.com/us/album/hestia/1172021169'),
      soundCloudUrl: $sce.trustAsResourceUrl('https://soundcloud.com/empty-atlas/sets/hestia-full-album-stream'),
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_kfaL5Pr94FGRO-jA236UAsfQz5nAa8ThI'),
      amazonMusicUrl: $sce.trustAsResourceUrl('https://www.amazon.com/dp/B01N1NZFMU/ref=cm_sw_em_r_mt_dp_U_vfGyCbENVXSZJ'),
      tidalUrl: undefined,
      bandcampUrl: $sce.trustAsResourceUrl('https://emptyatlas.bandcamp.com/album/hestia'),
      songs: [retrieveSong('Thousand'), retrieveSong('Boxing'), retrieveSong('House Fire'), retrieveSong('Cold Shoulder'), retrieveSong('All Right'), retrieveSong('Amen'), retrieveSong('Elements'), retrieveSong('Palindrome'), retrieveSong('Plurals'), retrieveSong('Masterpiece')]
    }, {
      name: 'ANNIVERSARY',
      year: '2014',
      image: '/images/anniversary.jpg',
      spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/7eSkqCk3UG2OUHxrrh0YFc?si=4ETl58NpQkSYlpX-kHQoVg'),
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/7eSkqCk3UG2OUHxrrh0YFc?utm_source=generator'),
      appleMusicUrl: undefined,
      appleMusicEmbedUrl: undefined, //$sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/anniversary/902603298?app=music'),
      iTunesUrl: undefined, //$sce.trustAsResourceUrl('https://itunes.apple.com/us/album/anniversary/902603298'),
      soundCloudUrl: undefined,
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_kaIwdpuMJgBQodx_wtpM1FrfBZwyjujSU'),
      amazonMusicUrl: undefined,
      tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/album/50568535?play=true'),
      bandcampUrl: $sce.trustAsResourceUrl('https://emptyatlas.bandcamp.com/album/anniversary-3'),
      songs: [retrieveSong('Headline'), retrieveSong('Merit'), retrieveSong('A Great Cloud'), retrieveSong('Strangers'), retrieveSong('Take'), retrieveSong('Vultures'), retrieveSong('Catch & Release'), retrieveSong('Good Angels'), retrieveSong('Small House')]
    }, {
      name: 'HOLIDAY PARTIES (single)',
      year: '2018',
      image: '/images/holiday-parties.png',
      spotifyUrl: $sce.trustAsResourceUrl('https://open.spotify.com/album/3zndfu65WOEcM6nhWi4P0e?si=oWaBOCvDSGav1u0aAgPccg'),
      spotifyEmbedUrl: $sce.trustAsResourceUrl('https://open.spotify.com/embed/album/3zndfu65WOEcM6nhWi4P0e?utm_source=generator'),
      appleMusicUrl: $sce.trustAsResourceUrl('https://music.apple.com/us/album/holiday-parties-single/1445540114'),
      appleMusicEmbedUrl: $sce.trustAsResourceUrl('https://embed.music.apple.com/us/album/holiday-parties-single/1445540114?app=music'),
      iTunesUrl: $sce.trustAsResourceUrl('https://itunes.apple.com/us/album/holiday-parties-single/1445540114'),
      soundCloudUrl: undefined,
      youTubeMusicUrl: $sce.trustAsResourceUrl('https://music.youtube.com/playlist?list=OLAK5uy_nvc6x42AAEgFiPgerNMIDx0M-Bme3EB6c'),
      amazonMusicUrl: $sce.trustAsResourceUrl('https://www.amazon.com/dp/B07L45TC6V/ref=cm_sw_em_r_mt_dp_U_VlGyCb7GQXVTQ'),
      tidalUrl: $sce.trustAsResourceUrl('https://tidal.com/browse/track/100389767?play=true'),
      bandcampUrl: undefined,
      songs: [retrieveSong('Holiday Parties')]
    }];

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
      return "2023";
    }
  };

  let releaseDate = new Date("2023-07-28T00:00:00.000-06:00");
  $scope.currentCountdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  updateCountdown();

  function updateCountdown() {
    let now = new Date();

    // get total seconds between the times
    let delta = Math.abs(releaseDate - now) / 1000;

    // calculate (and subtract) whole days
    let days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    let hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    let seconds = Math.floor(delta % 60);  // in theory the modulus is not required

    $scope.currentCountdown = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };

  $interval(function () {
    updateCountdown();
  }, 1000);

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
        scrollTop: (target.offsetTop - navBarHeight - offset), easing: 'slow'
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
      scrollTop: (0), easing: 'slow'
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
      x: xPosition, y: yPosition
    };
  }

  $scope.activeSong = undefined;

  function retrieveSong(songName) {
    let songs = LyricService.songs;
    // console.debug(LyricService.songs);
    let index = songs.findIndex(function (obj) {
      // console.log('Finding index of song title [' + songName + ']');
      return obj.title === songName;
    });
    let song = angular.copy(songs[index]);
    // console.debug('Index of [' + song + '] is [' + index + ']');
    return song;
  };

  $scope.showLyrics = function (song) {
    console.log('Imma show da [' + song + '] lyrics!');
    recordGoogleAnalyticsEvent('Lyrics', 'show', song);
    var songs = LyricService.songs;
    console.debug(LyricService.songs);
    var index = songs.findIndex(function (obj) {
      console.log('Finding index of song title [' + song + ']');
      return obj.title === song;
    });
    console.debug('Index of [' + song + '] is [' + index + ']');
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

  $scope.recordLinkClick = function (pageName, linkName) {
    // Skip recording GA events to our account if in development.
    if (document.location.hostname != 'localhost' && document.location.hostname != '127.0.0.1') {
      console.log('Recording Google Analytics event, category [click], link_text [' + linkName + '], page_title [' + pageName + '] page_path [' + location.hash + ']');
      // Record Google Analytics event
      gtag('event', 'click', {
        'link_text': linkName,
        'page_title': pageName,
        'page_location': '/' + location.hash
      });
    } else {
      console.log('will not record Google Analytics event due to development hostname');
    }
  };

  function recordGoogleAnalyticsEvent(eventType, pageName, linkName) {
    // Skip recording GA events to our account if in development.
    if (document.location.hostname != 'localhost' && document.location.hostname != '127.0.0.1') {
      console.log('Recording Google Analytics event, category [' + eventType + '], link_text [' + linkName + '], page_title [' + pageName + '] page_path [' + location.hash + ']');
      // Record Google Analytics event
      gtag('event', eventType, {
        'link_text': linkName,
        'page_title': pageName,
        'page_path': '/' + location.hash
      });
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

  function onCollapsibleClose(listElem) {
    let arrowIcon = listElem.querySelector('#arrow');
    arrowIcon.classList = 'fas fa-chevron-down right';
  };

  function onCollapisbleOpen(listElem) {
    let arrowIcon = listElem.querySelector('#arrow');
    arrowIcon.classList = 'fas fa-chevron-up right';
  };

  $(document).ready(function () {
    // $('.collapsible .expandable').collapsible();
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
      accordion: false, onCloseStart: onCollapsibleClose, onOpenStart: onCollapisbleOpen
    });
  });

});
