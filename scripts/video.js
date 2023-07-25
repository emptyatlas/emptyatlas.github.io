'use strict';

/**
 * @ngdoc function
 * @name webApp.service:VideoService
 * @description # VideoService of the webApp
 */
angular.module('emptyatlasgithubioApp').service('VideoService', function ($sce) {

    this.videos = [
      {
        name: 'MATADOR (Official Music Video)',
        date: 'Apr 15, 2022',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/1vSJALEITMA')
      },
      {
        name: 'Valleys - LIVE at Dipping Vat Studio',
        date: 'May 12, 2021',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/nVDgqUrGCRA')
      },
      {
        name: 'Maximal - LIVE at Dipping Vat Studio',
        date: 'May 12, 2021',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/ro2a17syNdc')
      },
      {
        name: 'Famous Friends - LIVE at Dipping Vat Studio',
        date: 'Apr 28, 2021',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/CAj_TdugWeE')
      },
      {
        name: 'Florence - LIVE at Dipping Vat Studio',
        date: 'Apr 14, 2021',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/sphuUrIRNC4')
      },
      {
        name: 'Codebreaker - LIVE at Dipping Vat Studio',
        date: 'Mar 31, 2021',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/nreAK-0OaAQ')
      },
      {
        name: '“Maximal” (Lyric Video)',
        date: 'Apr 24, 2020',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/uSARWrWd9fc')
      },
      {
        name: '“Short Fiction” (Music Video)',
        date: 'Oct 12, 2018',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/6t9Ov9ord18')
      },
      {
        name: '“Boxing” (Lyric Video)',
        date: 'Jan 30, 2017',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/PMqkFWLdcO8')
      },
      {
        name: '“House Fire” (Music Video)',
        date: 'Jan 30, 2017',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/4CRuxKxCNZM')
      },
      {
        name: '“Short Fiction” (Tiny Desk Contest)',
        date: 'Mar 7, 2018',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/kNSP6VzNwC8')
      }
    ];

    /*
    * OLD VIDEOS
    * ,
      {
        name: '“All Right”',
        date: 'Sep 22, 2018',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/6ZeLhSeucbg')
      },
      {
        name: '“Boxing”',
        date: 'Sep 22, 2018',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/3klWVd87CgY')
      },
      {
        name: '“House Fire”',
        date: 'Sep 22, 2018',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/m-tJcKH2p-A')
      },
      {
        name: '“Take”',
        date: 'Sep 21, 2018',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/FcdZAGi-1lQ')
      },
      {
        name: '“Headline”',
        date: 'Sep 21, 2018',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/R2-pDlyKJB4')
      },
      {
        name: '“Vultures”',
        date: 'Sep 21, 2018',
        link: $sce.trustAsResourceUrl('https://www.youtube.com/embed/3ZF7JCxAlC4')
      }
    * */

});
