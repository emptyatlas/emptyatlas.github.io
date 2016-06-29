'use strict';

/**
 * @ngdoc overview
 * @name emptyatlasgithubioApp
 * @description
 * # emptyatlasgithubioApp
 */
angular.module('emptyatlasgithubioApp').service('NewsService', function () {

    this.newsList = [{
        date: '4.7.16',
        content: `Forgive me, for it has been a ridiculously long time since my last blog post-slash-confession. But! Big news across the board, so hopefully it was worth the
        wait. First news: “Hestia” is almost complete. We finished keys, synths, guitars, drums and, with the exception of one small part, vocals.<br><br>I did a
        few touch-ups on vocal parts last night, and we also had a visit from the ultra-talented Victoria Fortenberry, who provided guest vocals for “Cold
        Shoulder.” Long story short, she did a phenomenal job. Imagine the ghost of a 1920s soul singer possessing a modern-day singer-songwriter, and you’ll have
        an idea of how Victoria crushed that song. Can’t wait for everyone to hear it!<br><br>Other big news that I can’t hold in anymore: On April 16, we’re going
        to be shooting a video for our first single from the new album. I don’t want to give many details just yet, but even that - our first video ever - feels
        pretty dang cool. I’ll let you all know more soon, but until then, keep being wonderful.`
    }, {
        date: '1.24.16',
        content: `It is currently 1:23 a.m., which is a bad time to update this, probably, because lack of sleep makes me ultra-stupid. But I'm super stoked, so I'll power
        through: We just finished main vocals for the entire album (harmonies and guest vox still on the way).<br><br>I've also kicked off the keys-recording
        process, which has been way interesting for me, as I'm not a trained keyboardist. Thankfully, Jacob's got my back and has a great ear for this stuff.
        Overall, though, we're getting near the finish line for "Hestia," a crazy big accomplishment for all of us because, despite Jacob, Chris and Sanders being
        in multiple touring bands over the years, I believe this is their first full-length record, too. Puts me in good company. I'm proud of these dudes and the
        work we've put into making "Hestia" something to be proud of forever. And daggum, I'm so ready for you all to hear it. Until then.`
    }, {
        date: '1.6.16',
        content: `Happy New Year, everyone! We’re a little late, but the sentiment stands. Just wanted to let everyone know how the album is coming along. Drums = done; bass
        = done; and now, all guitars = done! We’re in the process of recording vocals right now, so everything’s taking shape, which is really cool to see. We can
        also officially say our good friend, tattoo artist Azha Sanders, is designing the cover for “Hestia” and has turned in some tremendous work already. As soon
        as that’s ready, we’ll put it out everywhere. We have to. We’re excited.<br><br>We’ve also been performing a lot around Jackson recently, which has really
        inspired us to start playing even more, working in some of the new songs and - fingers crossed - traveling for some shows further out. We’ll keep you
        updated on everything, of course! Check out our Facebook or the “shows” tab on here to see what we’re up to. Thanks for your support and being a cool
        person.`
    }, {
        date: '9.21.15',
        content: `Yessss. We've gained a lot of traction on our first-ever full-length album, which we'll be announcing more about soon, but until then, we're in the studio
        every chance we get. So far, all drums are done, thanks to Sanders' ridiculous skill for studio work (for real). We also finished all guitars on "Plurals,"
        and I'm so proud of how it sounds. Next on the docket: finish guitars, record bass, add keys and flourishes, and vocals to bring it home.<br><br>For anyone
        who reads this, you're going to be rewarded for being so kind. We'll be releasing exclusive clips and in-studio photos on the website, and once we're all
        ready to go, brand new songs. For now, though, I just wanted to record our progress for posterity. So there you have it. Posterity is achieved.`
    }, {
        date: '7.20.15',
        content: `Hey all, it's been a while since the last post, which is totally my fault. Still going strong and playing lots of shows in the Jackson area, so if you
        haven't caught us, make sure to keep track on Facebook, Bandsintown and Reverbnation for where we'll be next.<br><br>It's been tough to get in the studio
        with everyone's busy schedules, but I've been hard at work writing more music and fine-tuning the tracks that will be on our full-length. Every little bit
        helps, so if you want to support that record, please get your copy of "Anniversary" on iTunes or Amazon, or get a T-shirt if you're the kind who wears
        clothes.<br><br>I also wanted to give a shout-out to the guys in Broadside and Old Again. I had the chance to play with them, and they're all just awesome
        people and were really complimentary of our songs, which is always cool to hear.`
    }, {
        date: '5.6.15',
        content: `Hey friends, we wanted to update everyone on what we've been up to lately. One massive thing: Sanders had a baby! While being a good dad means he's behind
        the drum set a little less, our good friend Sheffield has been killing it when Sanders isn't available.<br><br>On our upcoming album: We're finishing
        writing now, making sure we'reall practiced and planned out for when we hit the studio again. We're incredibly excited with how these songs are turning out
        and can't wait to share. In the meantime, we're playing plenty of local shows and festivals, so keep checking in.<br><br>That's all for now, but thanks so
        much for supporting us, whether it's buying a shirt or just checking out our songs on Spotify. God bless all of ya.`
    }, {
        date: '2.9.15',
        content: `<a href="http://open.spotify.com/album/7eSkqCk3UG2OUHxrrh0YFc" target="_blank">We're now on spotify!</a>`
    }, {
        date: '10.13.14',
        content: `New show up! Friday, October 17, 10 p.m. at Martin's Restaurant & Grill`
    }, {
        date: '9.24.14',
        content: `<a href="https://vine.co/u/1126300570030882816" target="_blank">We have a Vine account now!</a>
        <br>And check out our
        <a href="https://www.youtube.com/user/emptyatlasmusic">Videos</a>
        page for the "Waiting Games" teaser.`
    }, {
        date: '9.8.14',
        content: `Our bassist Chris is getting married! "Great," you might say. "But what's in it for me?" Glad you asked. For the month of September, if you tag "Empty
        Atlas" on Facebook, Instagram, or Twitter, we'll send you a discount code for 20% off all EA merch!<br>
        <a href="http://www.emptyatlas.com/#/store">Head over our store!</a>`
    }, {
        date: '8.25.14',
        content: `<a href="https://itunes.apple.com/us/album/anniversary/id902603298" target="_blank">Anniversary</a>
        is available on iTunes.`
    }, {
        date: '7.14.14',
        content: 'Put a shirt on. Ours, to be specific.<br><a href="http://www.emptyatlas.com/#/store"><img src="/images/ea-t-shirts.png" class="image-100"></a>'
    }, {
        date: '7.1.14',
        content: `<a href="https://www.youtube.com/watch?v=4KxY9yWYTq4" target="_blank">An impromptu acoustic performance of our song "Plurals".</a>
        <br>Hope you guys enjoy.`
    }, {
        date: '6.16.14',
        content: `There's big stuff happening every day lately. Shows coming in, new website, new merch being designed, new music almost ready to go. And lucky for us, we're
        going to be getting some of it to you sooner than we'd expected!<br><br>We made the decision to keep writing for our next EP. While that could have been bad
        news, we wanted to make sure it wouldn't be. We're heading into Blue Sky Studio on July 5th to record our new single, "Waiting Games," with the brilliant
        producer Casey Combest, and we couldn't be more excited to share our hard work with you all. Thanks for your love and faith in us. <br><br>-Micah</p>`
    }];

});