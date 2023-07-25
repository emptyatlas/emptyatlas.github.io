'use strict';

/**
 * @ngdoc function
 * @name webApp.service:LyricService
 * @description # LyricService of the webApp
 */
angular.module('emptyatlasgithubioApp').service('NewsService', function () {

  var newsArticleTemplate = {
    title: '',
    desc: ``,
    img: '',
    actionText: 'READ MORE',
    date: 123,
    link: ''
  };

  var newsQuoteTemplate = {
    quote: ``,
    author: '',
    date: 123,
    link: ''
  };

  this.news = [
    {
      title: '15 Best Songs About Being 25',
      desc: `Have you turned 25 and looking for some musical inspiration? The quarter-life has its ups and downs, but the music never fails to make our journey a little bit worthwhile. At this point, songs about being 25 years old are`,
      img: 'images/news/15-best-songs-about-being-25-2023.png',
      actionText: 'READ MORE',
      date: 1658878869000,
      link: 'https://www.midnightmagicsounds.com/best-songs-about-being-25/'
    },
    {
      title: 'Bring Your Baggage and Don’t Pack Light!',
      desc: `Recorded at Hal & Mal’s in Jackson, MS as the concluding event of the 2022 Mississippi Book Festival in Jackson, MS, this show has it all: laughs, funky music and, best of all for our crew, air-conditioning!`,
      img: 'images/news/thacker-mountain-radio-2022.png',
      actionText: 'READ MORE',
      date: 1661454000000,
      link: 'https://thackermountain.com/upcoming-shows/bring-your-baggage-and-dont-pack-light/'
    },
    {
      title: '30 of The Greatest Indie Bands Of 2022',
      desc: `Following up last year’s grand list with one built around this year, is our new “Indie” band list for 2022! Check out “30 Of The Greatest Indie Bands of 2022” below and make sure to follow it up with the 2 prior lists from 2020 and 2021 respectively.`,
      img: 'images/news/indie-vision-music_2022.png',
      actionText: 'READ MORE',
      date: 1651305600000,
      link: 'https://www.indievisionmusic.com/articles/30-of-the-greatest-indie-bands-of-2022/'
    },
    {
      title: 'Track By Track: Empty Atlas - Kairos',
      desc: `Mississippi-based group Empty Atlas released their most recent album "Kairos" in June 2020. We asked vocalist/guitarist Micah Smith to tell us about each track. Check out his commentary on the album below.`,
      img: 'images/news/kill-the-music-2021.png',
      actionText: 'READ MORE',
      date: 1616572800000,
      link: 'https://killthemusic.net/blog/track-by-track-empty-atlas-kairos'
    },
    {
      quote: `If you’re looking for an arena rock record that still feels intimate and personal, look no further than Empty Atlas’s new masterpiece Kairos.`,
      author: 'Jordan Mohler, Kill the Music',
      date: 1616490000000,
      link: 'https://killthemusic.net/blog/track-by-track-empty-atlas-kairos'
    },
    {
      title: 'UNDISCOVERED: EMPTY ATLAS – THE NEW WAY\n',
      desc: `Weaving such nuanced, emotive stories with their poignant lyricism and gripping melodies comes naturally to Empty Atlas’ whose sound is a product of their individual inspirations and their trust in each other as musicians.`,
      img: 'images/news/discovered-magazine.png',
      actionText: 'READ MORE',
      date: 1603108800000,
      link: 'https://www.discoveredmagazine.com/2020/10/undiscovered-empty-atlas-the-new-way/?fbclid=IwAR2sBFGjoK9GQP788bqS69W_Gkc_mm_lzEJdpzvBlq7tcHbQpAfW97fY4SQ'
    },
    {
      title: 'Indie Vision Music',
      desc: `The Best Albums of 2020 So Far From A to Z`,
      img: 'images/news/indie-vision-music.png',
      actionText: 'READ MORE',
      date: 1593849600000,
      link: 'https://www.indievisionmusic.com/articles/the-best-albums-of-2020-so-far-from-a-to-z/'
    },
    {
      title: 'Turtle Tempo',
      desc: `Empty Atlas are personifying the ancient philosophy that ‘the only constant is change’ with their new album Kairos. Taking a refreshed approach to their songwriting, the band note the differences between their debut and sophomore records; where Hestia centred on settling down, Kairos is all about shaking things up and seeking change. “Maximal” is the lead singe of their most recent release, taking a heartfelt approach to the subject of chasing one’s dreams.`,
      img: 'images/news/turtle-tempo.png',
      actionText: 'READ MORE',
      date: 1594904400000,
      link: 'https://turtletempo.co.uk/new-music-empty-atlas-maximal/'
    },
    {
      title: 'Right Chord Music',
      desc: `Empty Atlas’ new full-length album, Kairos, is the perfect soundtrack for a long drive somewhere new, or for a sleepy afternoon spent watching the ocean.`,
      img: 'images/news/right-chord-music.png',
      actionText: 'READ MORE',
      date: 1594299600000,
      link: 'https://www.rightchordmusic.co.uk/empty-atlas-maximal/?fbclid=IwAR36VvA-EYFj7D_XL206XgQIMed3GI3DdrDo0JpvNVRVJD2PCzSRe8vihm0'
    },
    {
      quote: `The perfect soundtrack for a long drive somewhere new, or for a sleepy afternoon spent watching the ocean.`,
      author: 'Rachel Makinson, Right Chord Music',
      date: 1594299600000,
      link: 'https://www.rightchordmusic.co.uk/empty-atlas-maximal/?fbclid=IwAR36VvA-EYFj7D_XL206XgQIMed3GI3DdrDo0JpvNVRVJD2PCzSRe8vihm0'
    },
    {
      title: 'Jesus Freak Hideout',
      desc: `One of my favorite discoveries last year was Jackson, Mississippi's own Empty Atlas. Their single "Short Fiction" made me an instant fan, and their new album Kairos does not disappoint.`,
      img: 'images/news/jesus-freak-hideout.png',
      actionText: 'READ MORE',
      date: 1591880400000,
      link: 'https://www.jesusfreakhideout.com/indiemusic/Kairos.asp?fbclid=IwAR2shu4uhkyH4MYWyjUPvcRxnJOBxxI4wJtC2WPiY7gXyWNvzlgVzCts6Q8'
    },
    {
      quote: `One of my favorite discoveries... Their single 'Short Fiction' made me an instant fan, and their new album Kairos does not disappoint.`,
      author: 'Scott Fryberger, Jesus Freak Hideout',
      date: 1591880400000,
      link: 'https://www.jesusfreakhideout.com/indiemusic/Kairos.asp?fbclid=IwAR2shu4uhkyH4MYWyjUPvcRxnJOBxxI4wJtC2WPiY7gXyWNvzlgVzCts6Q8'
    },
    {
      title: 'All Punked Up',
      desc: `Ally Rincón interviews Micah Smith of Jackson based alt-rock band Empty Atlas. Watch as they talk about the band's new single "Maximal," their upcoming album, and how the pandemic has affected the music industry!`,
      img: 'images/news/all-punked-up.jpg',
      actionText: 'WATCH NOW',
      date: 1588078800000,
      link: 'https://www.youtube.com/watch?v=KMQpaIUTdOE&feature=youtu.be&fbclid=IwAR2-MtTTF89r6gjdUVdYiVoAto6CmDx3_lKJouBXkbcFgmdTPY_v4-lOsOk'
    },
    {
      title: 'Best of Jackson Finalist',
      desc: `Formed in Brandon, Mississippi, in 2014, Empty Atlas has been slowly winning over a wide-reaching fan base throughout the South with its energetic, melodic indie-rock sound and its heavier lyrical core.`,
      img: 'images/news/best-of-jackson-2020.png',
      actionText: 'READ MORE',
      date: 1577887200000,
      link: 'http://www.bestofjackson.com/empty-atlas/'
    },
    {
      title: 'SINGLE PREMIERE: Stream "Maximal" by Empty Atlas',
      desc: `Jackson, Mississippi alternative rock band Empty Atlas is premiering their new single “Maximal” right here on Stitched Sound! The quartet has spent the last several months working on new music, and this single is the first track to be released from their upcoming sophomore studio album Kairos.`,
      img: 'images/news/stitched-sound-2020.png',
      actionText: 'READ MORE',
      date: 1586955600000,
      link: 'https://stitchedsound.com/maximal-empty-atlas-premiere/?fbclid=IwAR0Bze62SkezvhkiiFkPYDe1RvsQ0Yd3wS3gQuJk6iRcXfBleWzfzBOjNI0'
    },
    {
      title: 'FBT Entertainment',
      desc: `Mississippi alternative rock band, Empty Atlas, dropped their new single yesterday titled "Maximal" to tease their upcoming sophomore record Kairos.`,
      img: 'images/news/fbt-entertainment.png',
      actionText: 'READ MORE',
      date: 1587042000000,
      link: 'https://fbtentertainment.com/blogs/news/new-release-maximal-by-empty-atlas'
    },
    {
      quote: `[Maximal] makes you want to press repeat & experience the rollercoaster of feelings all over again.`,
      author: 'Deirdre Kelly, FBT Entertainment',
      date: 1587042000000,
      link: 'https://fbtentertainment.com/blogs/news/new-release-maximal-by-empty-atlas'
    },
    {
      title: 'Underground Music Collective',
      desc: `It seems like just yesterday that we had Empty Atlas‘ Micah Smith and Brennan Michael White on one of our early Quarantine Jams. That night, they told us about their then-forthcoming single, “Maximal,” set for release on April 24.`,
      img: 'images/news/underground-music-collective.png',
      actionText: 'READ MORE',
      date: 1588078800000,
      link: 'https://undergroundmusiccollective.com/2020/04/27/the-quinns-daily-spinn-tuesday-april-28/'
    },
    {
      title: 'PREMIERE: Empty Atlas share their deeply infectious new single Short Fiction',
      desc: `Since dropping their debut double EP back in 2014, Mississippi outfit Empty Atlas have carved out a unique space for themselves within the realm of indie rock.`,
      img: 'images/news/happy-mag-2018.png',
      actionText: 'READ MORE',
      date: 1532696400000,
      link: 'https://happymag.tv/premiere-empty-atlas-short-fiction/'
    },
    {
      title: 'MPB\'s Amped & Wired',
      desc: `Jackson, Mississippi’s Empty Atlas performs melodic indie rock with a lyrical focus on personal growth and connections.`,
      img: 'images/news/amped-and-wired-2018.png',
      actionText: 'WATCH NOW',
      date: 1524229200000,
      link: 'https://video.mpbonline.org/video/empty-atlas-qfmwic/'
    },
    {
      title: 'Mississippi\'s Empty Atlas opening for Young Valley',
      desc: `Mississippi-based alternative rockers Empty Atlas are making the trip across the river for their Natural State debut on Friday. The four-piece will open for fellow Jackson outfit Young Valley at Maxine's in Hot Springs.`,
      img: 'images/news/arkansas-democratic-gazette.png',
      actionText: 'READ MORE',
      date: 1517493600000,
      link: 'https://www.arkansasonline.com/news/2018/feb/01/mississippi-s-empty-atlas-opening-for-y/'
    },
    {
      title: 'Music Makers Presents: Micah Smith',
      desc: `Interview and live acoustic set with lead singer, Micah Smith.`,
      img: 'images/news/music-makers-presents-2017.png',
      actionText: 'WATCH NOW',
      date: 1491483600000,
      link: 'https://vimeo.com/212136518'
    },
    {
      title: 'Interview with Empty Atlas',
      desc: `Mississippi guitar rock without blues roots, cover art with the conceptual resonance of a classic concept album, and likeable melodic rock without the love songs… these surprises all serve to distinguish Empty Atlas from any preconception you might hazard from if supplied with only the mere facts of their origin.`,
      img: 'images/news/magic-city-bands-2017.png',
      actionText: 'READ MORE',
      date: 1498827600000,
      link: 'https://magiccitybands.com/coming-empty-atlas/'
    }
  ];

});
