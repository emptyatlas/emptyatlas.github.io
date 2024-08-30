'use strict';

/**
 * @ngdoc function
 * @name webApp.service:LyricService
 * @description # LyricService of the webApp
 */
angular.module('emptyatlasgithubioApp').service('LyricService', function () {

  this.songs = [
    {
      title: 'Little Voices',
      id: 'little-voices-lyrics',
      lyrics: `Talk sweet but you grind your teeth<br>
              Just to keep from the curse coming out<br>
              It goes south when you open your mouth<br>
              All half truths and wholesale doubt<br>
               <br>
              Oh poor me<br>
              When the hammer comes down<br>
              Man, it comes down hard<br>
              I concede<br>
              Right now I can feel it all<br>
               <br>
              Try to shut it out<br>
              I hear it<br>
              Little voices still break spirit<br>
              On my good days<br>
              I don't feel it<br>
              Oh you said enough<br>
               <br>
              Speak dumb, bound to hurt someone<br>
              It's an old song with a new dance to it<br>
              A simple beat you could play in your sleep<br>
              Still hits like my first time through it<br>
               <br>
              Oh poor me<br>
              When the hammer comes down<br>
              Man, it comes down hard<br>
              I concede<br>
              Right now I can feel it all<br>
               <br>
              Try to shut it out<br>
              I hear it<br>
              Little voices still break spirit<br>
              On my good days<br>
              I don't feel it<br>
              Oh you said enough<br>
               <br>
              Now and again, you leave the details out<br>
              Like when you feel the need to tear me down<br>
              Still I've got sense enough to know myself<br>
              And oh you said enough<br>
              Oh you said enough<br>
              Oh you said enough<br>
              Oh you said enough<br>
               <br>
              Try to shut it out<br>
              I hear it<br>
              Little voices still break spirit<br>
              On my good days<br>
              I don't feel it<br>
              Oh you said enough<br>
               <br>
              Try to shut it out<br>
              I hear it<br>
              Little voices still break spirit<br>
              On my good days<br>
              I don't feel it<br>
              Oh you said enough`
    },
    {
      title: 'Belong',
      id: 'belong-lyrics',
      lyrics: `Shut down when I heard the news<br>
                Wasn't sure how to get to you<br>
                But I tried<br>
                <br>
                Closed in on the interstate<br>
                Nothing left but to sit and wait<br>
                And talk to God<br>
                <br>
                And he's still talking<br>
                And I'm still listening<br>
                And the Earth's still here<br>
                In one piece and everything<br>
                <br>
                We don't belong<br>
                And so we all belong<br>
                We don't belong<br>
                And so we all belong<br>
                <br>
                Stood there while you felt it all<br>
                All spirit and animal<br>
                Let it out<br>
                <br>
                Then a quiet I won't forget<br>
                You said the work isn't finished yet<br>
                I'm not home<br>
                <br>
                And he's still talking<br>
                And I'm still listening<br>
                And the Earth's still here<br>
                In one piece and everything<br>
                <br>
                We don't belong<br>
                And so we all belong<br>
                We don't belong<br>
                And so we all belong<br>
                <br>
                And he's still talking<br>
                And I'm still listening<br>
                And the Earth's still here<br>
                In one piece and everything<br>
                <br>
                Time's not promised<br>
                We'll take what we get<br>
                And we choose to give back light<br>
                While there is light still left to give<br>
                <br>
                We don't belong<br>
                And so we all belong<br>
                We don't belong<br>
                And so we all belong<br>
                We don't belong<br>
                And so we all belong<br>
                <br>
                We all belong<br>
                We all belong<br>
                We all belong<br>
                We all belong<br>
                We all belong<br>
                We all belong<br>`
    },
    {
      title: 'Half Magic',
      id: 'half-magic-lyrics',
      lyrics: `It's half the magic<br>
                The first part of a parlor trick<br>
                You make it disappear, but you can't get it back<br>
                But you love the beginning<br>
                When they're laughing and grinning<br>
                Everyone is so in love with what you have<br>
                <br>
                So you fumble 'round and reach into the darkness<br>
                Hoping to find it, whatever it is<br>
                When at one time you had wanted yellow roses<br>
                The show is over, everyone is going home<br>
                The show is over, everyone is going home<br>
                <br>
                Maybe we're half thе magic<br>
                The end of a parlor a trick<br>
                We madе it disappear and we can't get it back<br>
                But we loved the first part<br>
                Before it ended in broken hearts<br>
                When we were both so in love with what we had<br>
                <br>
                So we fumble 'round and reach into the darkness<br>
                Trying to define it, whatever it is<br>
                When at one time we had wanted yellow roses<br>
                The show is over, everyone is going home<br>
                The show is over, maybe we should just go`
    },
    {
      title: 'Matador',
      id: 'matador-lyrics',
      lyrics: `I thought I was close again<br>
             Felt the fabric on my skin<br>
             Before it pulled away<br>
             And hey, I\'m hanging by a thread<br>
             <br>
             And it\'s not like I don\'t understand<br>
             More the slipping through my hands<br>
             That\'s driving me insane<br>
             Today I\'m only seeing red<br>
             <br>
             Like a bull to the matador<br>
             I rush in just like before<br>
             <br>
             Thinking I won\'t miss if I just keep on running<br>
             (Running, running, keep on running)<br>
             When I lose the words, I can keep on humming<br>
             (And I\'m humming, and I\'m humming)<br>
             <br>
             Maybe it\'s the beast in me<br>
             Giving in to boiling blood and gritted teeth<br>
             Like if I hit fast enough<br>
             They\'ll finally see what I can see<br>
             <br>
             When I feel a rush of wind<br>
             And I notice I missed again<br>
             I\'ll get right back on my mark <br>
             And make the most of where I\'ve been<br>
             <br>
             Like a bull to the matador<br>
             I rush in just like before<br>
             <br>
             Thinking I won\'t miss if I just keep on running<br>
             (Running, running, keep on running)<br>
             When I lose the words, I can keep on humming<br>
             (And I\'m humming, and I\'m humming)<br>
             <br>
             Find my feet on the ground (but if I move fast enough)<br>
             Nothing\'s slowing me down (nothing slowing)<br>
             Find my feet on the ground (but if I move fast enough)<br>
             Nothing\'s slowing me down (nothing slowing)<br>
             <br>
             I won\'t miss if I just keep on running<br>
             When I lose the word, I can keep on humming<br>
             <br>
             And I won\'t miss if I just keep on running<br>
             (Running, running, keep on running)<br>
             When I lose the words, I can keep on humming<br>
             (And I\'m humming)<br>
             And I find my target, kick the dirt, rub some in it when it hurts<br>
             I won\'t miss if I just keep on running<br>
             (But if I move fast enough)<br>
             I won\'t miss if I just keep on running<br>
             (Nothing slowing)`
    },
    {
      title: 'Thousand',
      id: 'thousand-lyrics',
      lyrics: `I come in cautious, like a counterfeit guest,<br>my mothball sport coat to your fetching dress,<br>in a house we own but I have no claim to yet<br><br>Rip up the carpet and repaint the doors.<br>We’ve plenty pain without these old eyesores.<br>I know you’re tired, but we need those wooden floors.<br><br>And it’s a shame your mother couldn’t see us now,<br>when we’ve made charts and graphs to prove we mapped it out.<br><br>Plug in the TV, let the snowflakes fall.<br>Wait one more hour. Give your dad a call.<br>Say we just got in, and we’re much too tired to talk.<br><br>We’ve lived alarmingly since the outset,<br>explored the attic space like Jacques Marquette.<br>I’d gladly walk the cable wire without a safety net.<br><br>And it’s a shame there’s nothing left to find<br>that hasn’t been exposed and posed a thousand times.`
    },
    {
      title: 'Boxing',
      id: 'boxing-lyrics',
      lyrics: `I weighed the boxes that were stacked on top of me,<br>and I decided that they're empty company. <br>Whole house is folded like a bad facsimile <br>of all the life that it once held.<br><br>On second thought, I guess it's not worth mentioning.<br>I turned my head and missed a quarter of a century<br>to frameless arguments and weak-wall jealousy<br>that I've been dying to dispel.<br><br>And I may never mend these fences I forced down<br><br>While I was boxing, burying the weaknesses in me.<br>Always boxing, never put an end to anything.<br><br>I set a fire to my faults when I was young.<br>It's burning brighter with each bitter song I've sung.<br>I'm to the point where I find flaws in everyone,<br>and I omit my own mistakes.<br><br>Prone to wander in my wild duplicity,<br>prone to punish anyone with faith in me,<br>until I cage the beast that I've been acting,<br>correct the mess it's made.<br><br>And I may never mend these fences I forced down<br><br>While I was boxing, burying the weaknesses in me.<br>Always boxing, never put an end to anything.<br><br>I’ve been dead more than I’ve been awake.<br>I’ve been a sinner more than I’ve been a saint.<br><br>I’ve been dead more than I’ve been awake.<br>I’ve been a sinner more than I’ve been a saint,<br>but that is going to change.<br><br>But not while I’m still boxing. I’m always boxing.<br>`
    },
    {
      title: 'House Fire',
      id: 'house-fire-lyrics',
      lyrics: 'It started in the rafters, <br>and after, it went every which way.<br>You’re always burning those hollow hallways.<br>I tracked you down, your guilty crown. <br>Flames keep falling from your mouth.<br>Still you know I’d love to put you out if I could.<br><br>You’re burning like a house fire,<br>turning blackest night as bright as day,<br>keeping all the neighborhood awake.<br>What’s it going to take for me to save you, house fire?<br>House fire.<br><br>I’m silencing the subtle way of speaking, <br>like you don’t know just what I mean.<br>You’re always turning a deaf ear toward me.<br>It’s only getting worse for you, these impulse moves<br>and vacant actions you excuse.<br>You know I’d put you out if I could.<br><br>And this is the part you see that everything I’ve done was for your good.<br><br>You’re burning like a house fire,<br>turning blackest night as bright as day,<br>keeping all the neighborhood awake.<br>What’s it going to take for me to save you?<br><br>Maybe in another place, maybe in another time.<br>No, there’s only right here, right now. No point in pulling that line.<br>Princess of ash heaps, queen of the pyre,<br>whether you think that it’s holy, <br>know that a fire’s still a fire’s still a fire’s still a fire<br>And you’re burning.<br><br>House fire, turning blackest night as bright as day,<br>keeping all the neighborhood awake.<br>What’s it going to take for me to save you?<br><br>You’re burning like a house fire,<br>turning blackest night as bright as day,<br>keeping all the neighborhood awake.<br>What’s it going to take for me to save you, house fire?<br>'
    },
    {
      title: 'Cold Shoulder',
      id: 'cold-shoulder-lyrics',
      lyrics: 'I want to find your weakness and put it to good use,<br>wield words that can swivel your neck, sweet enough to make you swoon.<br>Hey, I see you’re without company. It don’t have to stay that way.<br>I want to make you love me from the second that I say,<br><br>“Be my soft shoulder. Be my kind eyes.<br>Kindly look me over. There must be something that you like.”<br><br>My eyes are too tired to play this game all night.<br>You put a finger to my lips, and I don’t feel right.<br>I got too much to say in too little time,<br>so I won’t follow you home just ‘cause you ask nice.<br><br>This love only thrives for a season.<br>It’s a quick, hedonistic exchange.<br>I need more than a warm bed in winter,<br>getting cold and coarse when conditions change.<br><br>I need my soft shoulder. Be my kind eyes.<br>Kindly look me over. There must be something that you like<br>inside my soft shoulder, in my kind eyes.<br>Kindly look me over. There must be something that you like.<br><br>Feed my cold shoulder. Just turn my blind eye.<br>Unkindly overlook me, like I’m deserving of your spite.<br>‘Cause it’s a flash in the pan when I want to feel Pompeii,<br>cutting clean across my country every time you speak my name.<br><br>Be my soft shoulder. Be my kind eyes.<br>Kindly look me over. There must be something that you like<br>inside my soft shoulder, in my kind eyes.<br>Kindly look me over. There must be something that you like.<br><br>I can’t keep carrying on like this, but I’ll go on.<br><br>Hestia, I can’t find you. Is this home?<br>Hestia, I’m beside myself for you.<br>'
    },
    {
      title: 'All Right',
      id: 'all-right-lyrics',
      lyrics: 'You were lying, just now, <br>when you said you got lost in the hall and you got turned around.<br>‘Cause you know this place. <br>It’s exactly the same, but the furniture shifted away, away.<br><br>I’m all right if you’re doing all right.<br><br>Since you left here, for some time, <br>I’ve been pestering God to join your path with mine.<br>Keeping one eye open. Well, here’s hoping you <br>can learn to cope with the mess you put yourself through.<br><br>Do you know I’m all right if you’re doing all right?<br>Out of sight doesn’t mean you’re out of mind.<br><br>Is it wrong how long the lies you’re leaning on have held you up?<br>Is it right that I should stay awake all night to fill your cup?<br>You’ve had more than enough.<br><br>But I’m all right if you’re doing all right.<br>Out of sight doesn’t mean you’re out of mind.<br><br>Sister, I’ve been here praying for you.<br>Do you notice? Do you?<br>Sister, I keep on praying for you.<br>'
    },
    {
      title: 'Amen',
      id: 'amen-lyrics',
      lyrics: 'I tend to juxtapose the Great I Am with the great that I’m not,<br>like You’re beholden to me or I deserve something<br>more than what I’ve got.<br><br>But I’m having church in a parked car, reopening old scars, <br>counting all the ways in which You got me this far, Lord.<br>And I shouldn’t ask for more.<br><br>Yet here I am, “amen” in my throat.<br>This little light of mine is struggling to glow.<br>And I never meant to hide it, oh no, but I sure did.<br><br>Since I was a kid, playing soldiers in the woods behind my house,<br>all the greed and hate and jealousy that left my little mouth.<br>I hoped for saving grace from outer space, but never wondered how.<br>And I don’t think I understood.<br><br>It’s not a simple little prayer or a turning of the heart.<br>It’s a constant cry for help because my world is in the dark.<br>Yet You care for me, confusingly. Forgive me and restart<br>in my attempt at being good.<br><br>Yet here I am, “amen” in my throat.<br>This little light of mine is struggling to glow.<br>And I never meant to hide it, oh no, but I sure did.<br><br>And here I am, “amen” in my throat.<br>This little light of mine is struggling to glow.<br>I’m going to need Your help to light it, oh no,<br>‘cause I’ve been drowning for too long.<br><br>Here I am, “amen” in my throat.<br>This little light of mine is struggling to glow.<br>I’m going to need Your help to light it, oh no,<br>‘cause I’ve been drowning for too long.<br>And I can’t do this on my own, but I don’t have to.<br>'
    },
    {
      title: 'Elements',
      id: 'elements-lyrics',
      lyrics: 'Fire, walk with me. Tell me all the secrets that you hide inside your heat.<br>Water, come my way. Dip me in the ocean. Let the salt burn on my face.<br><br>I’ve had doubts with the earth beneath my feet.<br>It takes too much of the air inside of me.<br><br>I want to get sent back to the elements. <br>Find my origin. Make me new again. Make me.<br><br>Old friend, I know you. You’re sizing me up so I’m easier to chew.<br>I get lost, I get found, and I get found out, too.<br>So be fair now. Admit I’m just like you.<br><br>I’ve had doubts with the earth beneath my feet.<br>It takes too much of the air inside of me.<br><br>I want to get sent back to the elements. <br>Find my origin. Make me new again.<br><br>Oh, whether I’m a fire in the ocean or the earth in a cold wind, <br>I’m the same elements. I’m the same elements.<br><br>I want to get sent back to the elements. <br>Find my origin. Make me new again.<br><br>I want to get sent back to the elements. <br>Find my origin. Make me new again. Make me new.<br>'
    },
    {
      title: 'Palindrome',
      id: 'palindrome-lyrics',
      lyrics: 'Palindrome. Can’t go outside, and you can’t stay home.<br>You’re all reversed. Take your seat and face forward.<br>Still square one. Open your mouth and bite your tongue.<br>Do you feel strange? Nothing changes, nothing’s changed or will change.<br><br>Back and forth, it’s all the same. Palindrome.<br>My racecar, my level plane. Palindrome.<br><br>It’s all a wash. Caution can’t win back what you lost.<br>And it’s nice to be alone. No one to question where you really came from.<br><br>Back and forth, it’s all the same. Palindrome.<br>My racecar, my level plane. Palindrome.<br>'
    },
    {
      title: 'Plurals',
      id: 'plurals-lyrics',
      lyrics: 'You find strength in numbers, circumference in circles of friends.<br>What happens when all of your audience thins?<br>Which part will go numb first? The sidewalk gets colder at 2 a.m.,<br>and you can’t remember who you came here with.<br><br>But the plurals you know. Plurals you know.<br>Conflict begins when you’re finally alone.<br><br>Forgive me for asking, but when’s the last time you went home?<br>Padlock’s rusted shut, and your lawn’s overgrown.<br>Were you out with old friends? Have they asked how you’ve been?<br>Did you make new ones yet? Are you perfectly set?<br>God forbid that you spend any time in your head.<br>You just box your regrets up in plurals.<br><br>The plurals you know.<br><br>I was a stranger still holding an extra key.<br>But I picked the lock, and I found that the house was empty.<br>'
    },
    {
      title: 'Masterpiece',
      id: 'masterpiece-lyrics',
      lyrics: 'All the words come quickly now. Hold my head, I’m spilling out.<br>And I’m raising the scaffolding, floating up to the ceiling,<br>and I’m painting a masterpiece to be ignored for centuries.<br> <br>Feel divine and then divide when the brilliance does subside.<br>Close my eyes and I swing right, like I’m locked in a bar fight.<br>I spit venom most nights and never seem to know why.<br> <br>I’m only a moment, but I am a masterpiece in waiting. Don’t you want it?<br>'
    },
    {
      title: 'Headline',
      id: 'headline-lyrics',
      lyrics: 'Check your pulse, your vital signs<br>\'Cause it\'s visible what is on your mind<br>Though it hurts much worse to feel it than to hear<br><br>Grab my keys, I\'m walking out<br>And subconsciously, I lock the house<br>So that it\'s twice as hard for you to disappear<br><br>And I can read you like a headline<br>Bold and dark<br>Panicked scripting grips my heart<br>Like a newsflash, leaves me blind<br>I lose my sight then I lose my mind for you<br><br>Give you space to clear your head<br>When I walk in, your clothes are boxed on the bed<br>I\'m in denial like you\'re deciding what to wear<br><br>Come on, give it a try<br>Change your mind<br>Though I stray from my point with every line<br>Like the teleprompter fades to black while I\'m still on the air<br><br>And I can read you like a headline<br>Bold and dark<br>Panicked scripting grips my heart<br>Like a newsflash, leaves me blind<br>I lose my sight then I lose my mind for you<br><br>Maybe Human Interest doesn\'t suit me<br>Maybe I am much too sick for Health<br>Maybe I\'m too quick to see the bad things<br>And I should keep Opinions to myself<br><br>But were the roles reversed, it would be much worse<br>I would never even hesitate to leave you first<br>Content to write it down in the past tense<br>Bullet-pointed, modified and vacuous<br><br>Like a headline<br>Bold and dark<br>Panicked scripting grips my heart<br>Like a newsflash, leaves me blind<br>I lose my sight then I lose my mind for you<br><br>And I can read you like a headline<br>Bold and dark<br>Panicked scripting grips my heart<br>Like a newsflash, leaves me blind<br>I lose my sight then I lose my mind for you'
    },
    {
      title: 'Vultures',
      id: 'vultures-lyrics',
      lyrics: 'You hovered like a vulture with the sweetest sound<br>You held my head back as you struck me down<br>My wounded words won\'t make a difference to you now<br>I\'m wondering if they ever would<br><br>Clueless, I kissed the ground you set down on<br>From my bedroom on to your mother\'s lawn<br>You said you long to be eternalized in song<br>Not that this one is any good<br><br>Arid and careless, love, you injured me<br>You swarmed my conscience till I could not see<br>Oh lord, the lengths I gave my soul to thee<br>In ways I know I never should<br><br>Honey, leave some for the vultures, would you?<br>Honey<br>Honey'
    },
    {
      title: 'Take',
      id: 'take-lyrics',
      lyrics: 'I never saw the sun when you weren\'t here<br>You acted like it rose and sank with you<br>So I built you like a desperate engineer,<br>No heart, spare parts and super glue<br><br>Took all the strength I had to help you stand<br>When the storm would come and the wind would rage<br>You stood there at my door with your empty hands<br>There ain\'t nothing you can give me you didn\'t take<br><br>Take, take, take what you need<br>In a roundabout way, you say, it all comes back to me (eventually)<br><br>If there is nothing new under the sun<br>Then honey, you were born into the dark<br>You act like you\'re at war with everyone<br>You set it all off to find a spark<br><br>If conversation\'s spitting on a fire<br>For countless days and endless nights<br>Or like sleeping with a box of wooden matches,<br>I scratch my head while you ignite<br><br>Take, take, take what you need<br>In a roundabout way, you say, it all comes back to me<br><br>When you speak, you do so loudly<br>And the words won\'t come out right<br>But you\'re fine with how that happens; you\'re fine<br><br>And it\'s easy to be angry with the bitter pill you imbibe<br>But it\'s fine; it\'s gonna be fine<br><br>Take, take, take what you need<br>In a roundabout way, you say, it all comes back to me'
    },
    {
      title: 'Holiday Parties',
      id: 'holiday-parties-lyrics',
      lyrics: 'What\'s with the two of us at holiday parties?<br>Always miss each other heading for home<br>I thought by now at one of them one of our mutual friends<br>Would introduce us since we came here alone<br><br>You\'d tell me all about your graduate studies<br>How the work is tough but worth every dime<br>Or maybe you just have an office job<br>Turns out your building\'s right there next to mine<br><br>I don\'t know you, but I want to<br>Maybe we\'ll hit it off, maybe we won\'t<br>We\'ve got a minute now to figure something out<br>You want to dance to “White Christmas”?<br>Should I stop talking now?<br><br>What\'s with the two of us at holiday parties?<br>Like we\'re circling each other all night<br>Is it just me or does there seem to be a pattern forming<br>That we could break if only we\'d break the ice?<br><br>You\'d tell me all about your graduate studies<br>How the work is tough but worth every dime<br>Or maybe you just have an office job<br>Turns out your building\'s right there next to mine<br><br>I don\'t know you, but I want to<br>Maybe we\'ll hit it off, maybe we won\'t<br>We\'ve got a minute now to figure something out<br>You want to dance to “White Christmas”?<br>Should I stop?<br><br>I don\'t know you, but I want to<br>Maybe we\'ll hit it off, maybe we won\'t<br>We\'ve got a minute now to figure something out<br>You want to dance to “White Christmas”?<br>Should I stop talking now?'
    },
    {
      title: 'Strangers',
      id: 'strangers-lyrics',
      lyrics: 'When I couldn\'t stop myself, I drove by your house last week<br>Phased into your float glass eyes and your fencepost teeth<br>Hoped you were happy with someone else<br>Who lends you the worship I withheld<br>But is it often, if not always, you think of me?<br><br>I was just a stranger with an extra key<br>Waiting by the door until you needed me<br>Now, I\'m learning what you can live without<br><br>When I couldn\'t shake you off, you stormed through my mind again<br>Like a lightning rod that won\'t be content \'til the roof caves in<br>But after the smoke and wreckage clears<br>I\'ll bury the ghosts that I abandoned here<br>But is it always warmer where I\'m wanted<br>A brand new house where I\'m not haunted<br>Somewhere I can finally let myself rest<br><br>I was just a stranger with an extra key<br>Waiting by the door until you needed me<br>Now, I\'m learning what you can live without<br><br>You\'re always painting the door back red and green<br>Stop and go, I think you know just what I mean<br>I never said you were better off with me<br>I think you\'re better alone<br>And when you feel like the walls are closing in<br>Claustrophobia can start to wear you thin<br>For every statement that you made but can\'t defend<br>I think you\'re better alone<br><br>I was just a stranger with an extra key<br>Waiting by the door until you needed me<br>Now, I\'m learning what you can live without'
    },
    {
      title: 'A Great Cloud',
      id: 'a-great-cloud-lyrics',
      lyrics: `I\'d like to learn how to walk without this crutch<br>
                Every great man has his vices, but I feel that mine is too much<br>
                I hardly noticed that she kept my foolish hands tied<br>
                She cut my hair like Delilah, while I saw the sweeter side<br>
                <br>
                But I notice right now, that she was the easy way out<br>
                Overhead stands a great cloud of witnesses stating their doubts<br>
                I don\'t owe them anything, but all that disdain makes my ears ring<br>
                I\'m starting to think that somehow, most of me can\'t keep from wondering<br>
                <br>
                I\'d like to learn how to speak without honesty<br>
                If I form the words in my throat, then they keep marching on without me<br>
                I\'ll be honest, if I chose to compare this girl to a summer\'s day<br>
                You\'d see she\'s colder than winter, so sunlight won\'t stand in her way<br>
                <br>
                But I notice right now, that she was the easy way out<br>
                Overhead stands a great cloud, of witnesses stating their doubts<br>
                I don\'t owe them anything, but all that disdain makes my ears ring<br>
                I\'m starting to think that somehow, most of me can\'t keep from wondering<br>
                <br>
                I\'ll keep a light on and make sure you drive home safely<br>
                After all that we\'ve been through, I won\'t be so shocked if you hate me<br>
                If I could just borrow a minute, I could make you see<br>
                That maybe I did you a favor, made room for good company`
    },
    {
      title: 'Catch & Release',
      id: 'catch-and-release-lyrics',
      lyrics: `The state line looked a bit lonely without me there<br>
                So I jumped your picket fence; it got caught in my hair<br>
                Carolina, what more could you ask of me?<br>
                Have you finally grown tired of this catch and release?<br>
                <br>
                Suddenly I see the answer I don\'t want<br>
                Feel the sweep of southern comfort just vacate my lungs<br>
                Motionless but the cogs in my head are a whir<br>
                Have to compensate for something, but at least it\'s not her<br>
                <br>
                I\'d never want you to feel obligated<br>
                But if you\'d just stop by, we\'d get better acquainted<br>
                I\'m sure we\'ve both changed as we so often do<br>
                At least southern comfort\'s still impressive on you<br>
                <br>
                Natural disaster without leaving home<br>
                Up from the ground come the leaves that you\'d sewn<br>
                Lost you in gardens of columbines<br>
                A year's worth of work tangled up in those vines<br>
                <br>
                There\'s always a right and a wrong time to fight<br>
                And it\'s wrong that it ended that way<br>
                If you\'d kept your temper in check<br>
                If I weren\'t such a wreck, we just might be okay<br>
                <br>
                I\'d never want you to feel obligated<br>
                But if you\'d just stop by we\'d get better acquainted<br>
                I\'m sure we\'ve both changed as we so often do<br>
                At least southern comfort\'s still impressive on you`
    },
    {
      title: 'Small House',
      id: 'small-house-lyrics',
      lyrics: `Let\'s play a game that gives you good reason to shout<br>
                You carefully inspect my mouth to find the words I can\'t get out<br>
                You\'ll know you\'ve won when I slowly walk away<br>
                You live to fight another day ‘til someone else treats you the same<br>
                <br>
                I\'m hanging from a short string; I\'m a puppet, a plaything<br>
                But I can think for myself when I'm left on the top shelf<br>
                <br>
                And I pull the cord to hear you say the words I choose<br>
                “I love you so; you know I do.” I\'m sure at one time that was true<br>
                I\'m at the point that I can\'t figure which is worse<br>
                To hear you prove how well you curse, or to recite what you\'ve rehearsed<br>
                <br>
                I\'m hanging from a short string; I\'m a puppet, a plaything<br>
                But I can think for myself when I'm left on the top shelf<br>
                <br>
                Of all your deeds, the most wicked one may be<br>
                The day you left and you broke what I believed<br>
                <br>
                I\'m hanging from a short string; I\'m a puppet, a plaything<br>
                But I can think for myself when I'm left on the top shelf<br>
                <br>
                I\'m here with my own thoughts, and I realize that I\'m not<br>
                Meant to be left out; it gets lonely in this small house<br>`
    },
    {
      title: 'Short Fiction',
      id: 'short-fiction-lyrics',
      lyrics: `At a house on College Street<br>
                There\'s a name on a willow tree<br>
                That you carved when I wasn\'t there<br>
                You were always on a mission<br>
                In the shade reading short fiction<br>
                When you turned to me and said<br>
                <br>
                “If you wanted to run from me<br>
                I couldn\'t stop you now<br>
                If you wanted to run from me<br>
                I couldn\'t stop you”<br>
                <br>
                Five years have passed since I last touched down<br>
                I see no point in starting now<br>
                But often, I think of turning up unannounced<br>
                “Hey Ellie, how did your old book turn out?”<br>
                <br>
                If you wanted to run from me<br>
                I couldn\'t stop you now<br>
                If you wanted to run from me<br>
                I couldn\'t stop you<br>
                <br>
                I didn\'t see it till it passed me by<br>
                I didn\'t notice till it wasn\'t there<br>
                Just this vague sense that the story didn\'t turn out right<br>
                Hit the cover again - can we give it another try?<br>
                <br>
                If you wanted to love me<br>
                I couldn\'t stop you now<br>
                If you wanted to love me<br>
                I couldn\'t stop you<br>
                <br>
                If you wanted to love me<br>
                (The story didn\'t turn out right)`
    },
    {
      title: 'Merit',
      id: 'merit-lyrics',
      lyrics: `I see the value living on your own<br>
                No incentive to compromise<br>
                When I was young and yearning for a clone<br>
                With softer skin and eyes<br>
                <br>
                And she would always say the perfect thing<br>
                Ignore all my misgivings<br>
                She\'d play an instrument and learn to sing<br>
                Slightly worse than me<br>
                <br>
                Take it for just what it is and what it\'s worth to you<br>
                Merit may be devastating for what you thought you knew<br>
                What you thought you knew<br>
                <br>
                I see the worth inside suppressing doubt<br>
                Until the point that I believe<br>
                There\'s someone sterilized and waiting about<br>
                To cling to my sleeve<br>
                <br>
                And she would think that I deserve her praise<br>
                That we\'re both spotless<br>
                And she would deem it so for all her days<br>
                And we\'d die out thoughtless<br>
                <br>
                Take it for just what it is and what it\'s worth to you<br>
                Merit may be devastating for what you thought you knew<br>
                What you thought you knew<br>
                <br>
                Take it for just what it is and what it\'s worth to you<br>
                Merit may be devastating for what you thought you knew<br>
                <br>
                Take it for just what it is and what it\'s worth to you<br>
                Merit may be devastating for what you thought you knew<br>
                What you thought you knew`
    },
    {
      title: 'Good Angels',
      id: 'good-angels-lyrics',
      lyrics: `When you dream of halos among other things<br>
                Like brand-new families<br>
                I turn green, but envy fits so perfectly<br>
                That I get tempted<br>
                <br>
                I was told you moved away<br>
                And yet you\'re here in the same dress<br>
                That you wore that fateful day<br>
                When I needed more, you wanted less<br>
                <br>
                Any good angel knows<br>
                To fly the direction the wind blows<br>
                But now that I\'m thinking, I was the one that called you good<br>
                Put on your winter clothes<br>
                The north winds are calling you home<br>
                But now that I\'m sinking here in the same place that I stood<br>
                I was the one that called you good<br>
                <br>
                When you dream, continents sink below the flooding streams<br>
                Forming oceans<br>
                Thankfully, a complex entreats that you intervene<br>
                But you don\'t fool me<br>
                <br>
                And I won\'t be satisfied<br>
                ‘Til lightning rocks you like a tree<br>
                And all those feelings you denied<br>
                Come rushing out to vanquish me<br>
                <br>
                Any good angel knows<br>
                To fly the direction the wind blows<br>
                But now that I\'m thinking, I was the one that called you good<br>
                Put on your winter clothes<br>
                The north winds are calling you home<br>
                But now that I\'m sinking here in the same place that I stood<br>
                I was the one that called you good`
    },
    {
      title: 'Maximal',
      id: 'maximal-lyrics',
      lyrics: `I promise maximal effort from me<br>
                   There will never be an end to all the blood and sweat I\'ll lend to make it work<br>
                   When I get where I need, I\'ll send word for you<br>
                   Wouldn\'t burden you with details you won\'t read<br>
                   <br>
                   I promise maximal effort from me<br>
                   When my options are exhausted<br>
                   But I still won\'t lay down and give it up<br>
                   When I get what I need<br>
                   Still get hungry, bite the hand that feeds<br>
                   <br>
                   I will take from you<br>
                   I will give it to myself<br>
                   Take from you<br>
                   Give it to myself<br>
                   <br>
                   I promise maximal effort from me<br>
                   Even in my final days<br>
                   I\'ll find an outlet that still pays<br>
                   So cut me loose, stretch me till I can\'t breathe<br>
                   But I never set the goal, so it\'s always out of reach<br>
                   <br>
                   I will take from you<br>
                   I will give it to myself<br>
                   Take from you<br>
                   Give it to myself<br>
                   <br>
                   Show me a ladder, I\'ll climb it; hold my breath if you time it<br>
                   Do your worst to me above a dotted line, and I\'ll sign it<br>
                   <br>
                   Write my name down for me; dot the i\'s and cross the s\'s<br>
                   There\'s somewhere I need to be; I\'ve got no time for second guesses<br>
                   <br>
                   I\'m already past 25, some of my best years are behind me<br>
                   I could use a better hand to break me down, redefine me<br>
                   <br>
                   I want answers on my legacy, but the greatest minds in artistry<br>
                   Their speeches just don\'t speak to me ‘cause all of them are dead already`
    },
    {
      title: 'Florence',
      id: 'florence-lyrics',
      lyrics: `Did I end at the start?<br>
                 Gone deaf at the gunshot from the word “go”<br>
                 And I can’t read lips, but I know the word “no”<br>
                 <br>
                 Just time for a quick recap<br>
                 Spirit started to lift then a full collapse<br>
                 Still trust for the best, but it’s traveling slow<br>
                 <br>
                 And I think my mind’s enough to make it so<br>
                 <br>
                 Clear a path; make a way<br>
                 Ready myself \'cause the door’s swinging open someday<br>
                 <br>
                 Burned out on your star signs<br>
                 My palms only show all the work I’ve done<br>
                 Feels like all I achieved last year was once more \'round the sun<br>
                 <br>
                 Fortune favors the fortunate, I guess<br>
                 It’s all a matter of perspective<br>
                 At best, it’s providence; at worst, it’s music for my friends<br>
                 <br>
                 And I think I’m fine no matter how it ends<br>
                 I think I’ve finally started making sense<br>
                 <br>
                 Clear a path; make a way<br>
                 Ready myself \'cause the door’s swinging open someday<br>
                 <br>
                 Clear a path; make a way<br>
                 Ready myself \'cause the door’s swinging open someday<br>
                 <br>
                 Clear a path; make a way<br>
                 Ready myself \'cause the door’s swinging open someday`
    },
    {
      title: 'Codebreaker',
      id: 'codebreaker-lyrics',
      lyrics: `You say you can read me; I want to prove you wrong<br>
                   But every single pattern I make is one you\'ve already drawn<br>
                   <br>
                   I can move left and right, serpentine as much as I want<br>
                   I\'m running in the same wide circles that end where I started from<br>
                   <br>
                   Can\'t go back so I go over, overthinking everything<br>
                   Is it insane to hope it\'s somehow gonna change?<br>
                   <br>
                   There is a code to all of this<br>
                   And I\'m going to break it<br>
                   There is a code to all of this<br>
                   And I\'m going to…<br>
                   <br>
                   Keep coming up empty; hours waste away<br>
                   How many dismissive conversations can I have in one day?<br>
                   <br>
                   You say you don\'t understand; I know you can\'t<br>
                   So why do I wait? I\'m thinking that this sign of mine may arrive too late<br>
                   <br>
                   Can\'t go back so I go over, overthinking everything<br>
                   Is it insane to hope it\'s somehow gonna change?<br>
                   <br>
                   There is a code to all of this<br>
                   And I\'m going to break it<br>
                   There is a code to all of this<br>
                   And I\'m going to break it<br>
                   <br>
                   There is a code to all of this<br>
                   And I\'m going to break it<br>
                   There is a code to all of this<br>
                   And I\'m going to…`
    },
    {
      title: 'Carcosa',
      id: 'carcosa-lyrics',
      lyrics: `Carcosa - you know it\'s my fortress, but you want it<br>
                    Backdoor to my bedroom, a blind eye to the portents of my doom<br>
                    <br>
                    Carcosa, are you falling? You won\'t hold when the rain comes calling<br>
                    My dark truths get found out; empty ending to the story I wrote down<br>
                    <br>
                    It always comes down to this, down to this<br>
                    It always comes down to this, down to this<br>
                    <br>
                    Carcosa, my Graceland - my soul laid low by an old hand<br>
                    Lift me up, bring me peace, help me forget about the rubble behind me<br>
                    What I\'ve built, what I\'ve done, all for nothing if it\'s nothing to anyone<br>
                    Lift me up, bring me peace when I\'m underneath<br>
                    <br>
                    Down to this, down to this<br>
                    It always comes down to this, down to this`
    },
    {
      title: 'Ouroboros',
      id: 'ouroboros-lyrics',
      lyrics: `The night is dark; a heavy heart can only weigh you down<br>
                    The moon is dead; a new one\'s yet to shift the tides and pull you out<br>
                    In better days, you\'d celebrate by locking all your doors<br>
                    Yet here you are, a victim of the very fate you tried to ward<br>
                    <br>
                    Is this how it starts?<br>
                    <br>
                    It\'s coming around<br>
                    Nothing for it<br>
                    Ouroboros<br>
                    The peace that you\'ve found<br>
                    Could tear you to pieces<br>
                    Could be just what you needed now<br>
                    <br>
                    Let it go; tooth and claw; unhinge your jaw<br>
                    Swallow your pride and move on<br>
                    Be done with it, the infinite back and forth between good and then gone<br>
                    A bait and switch, a fever pitch; thrown by your own false alarms<br>
                    It weighs you down, coils ‘round; right in that instant, you can\'t see the harm<br>
                    <br>
                    Is this how it starts?<br>
                    <br>
                    It\'s coming around<br>
                    Nothing for it<br>
                    Ouroboros<br>
                    The peace that you\'ve found<br>
                    Could tear you to pieces<br>
                    Could be just what you needed<br>
                    <br>
                    Now, when you get what you always wanted to, it starts to go wrong<br>
                    Well, well, well enough alone isn\'t set in stone<br>
                    You may learn what it was when it\'s already gone`
    },
    {
      title: 'Birthday',
      id: 'birthday-lyrics',
      lyrics: `Subterranean expectations, like a walking hibernation<br>
                    Learn to make the most out of your age<br>
                    <br>
                    25 has arrived; still a few less friends surround you<br>
                    Tell me nothing can astound you<br>
                    Where\'s your head? Are you finished yet?<br>
                    If the world\'s not what you wanted, make a change while you\'re still on it<br>
                    <br>
                    Subterranean expectations, like a walking hibernation<br>
                    Learn to make the most out of your age<br>
                    <br>
                    Candles only burn for so long; your party mix is only 20 songs<br>
                    “First Day of My Life” sounds empty<br>
                    You just can\'t let all of them see<br>
                    <br>
                    Where\'s your head? Did you forget?<br>
                    This entire Earth\'s before you, and you\'ve barely seen it yet<br>
                    <br>
                    Subterranean expectations, like a walking hibernation<br>
                    Learn to make the most out of your age<br>
                    <br>
                    You won\'t escape what\'s haunting you<br>
                    You never really wanted to<br>
                    If you wait for it to come, it always does<br>
                    <br>
                    You\'re counting on the aftermath<br>
                    It doesn\'t have to be like that<br>
                    If you wait for it to come, it always does<br>
                    If you wait for it to come, it always does<br>
                    <br>
                    Subterranean expectations, like a walking hibernation<br>
                    Learn to make the most out of your age<br>
                    Take the time to count your blessings<br>
                    First of all, you\'re second-guessing<br>
                    Bought the book, refused to turn the page<br>
                    Happy birthday`
    },
    {
      title: 'Sway',
      id: 'sway-lyrics',
      lyrics: `Ellie, call me up on the weekend<br>
                    It\'d be good to catch up with you<br>
                    I know you miss Mississippi, and it\'s overdue<br>
                    <br>
                    I confess I\'ve got another agenda<br>
                    Word travels fast when there\'s nothing to say<br>
                    Bad news still comes ‘round in threes on your best day<br>
                    <br>
                    Everyone knows; everyone is talking<br>
                    Everyone is waiting on reactions to watch you sway<br>
                    Do you want to get angry? Do you want to get violent?<br>
                    Do you want to go back to your apartment and sleep for days?<br>
                    <br>
                    Ellie, don\'t hang up on me just yet<br>
                    You\'re gonna need a friend on your side right now<br>
                    All this would be more dramatic on payphones<br>
                    Or in hotel rooms outside of town<br>
                    <br>
                    I confess my heart is bleeding for you, kid<br>
                    It\'s like you only sing when the sky turns grey<br>
                    Bad news still comes ‘round in threes on your best day<br>
                    <br>
                    Everyone knows; everyone is talking<br>
                    Everyone is waiting on reactions to watch you sway<br>
                    Do you want to get angry? Do you want to get violent?<br>
                    Do you want to go back to your apartment and sleep for days?<br>
                    <br>
                    Go on and have a good cry<br>
                    Put me on silent<br>
                    I\'ll be holding on the line for you either way<br>
                    Either way<br>
                    <br>
                    Ellie, call me up on the weekend<br>
                    Even if you don\'t have much to say<br>
                    Bad news still comes ‘round in threes`
    },
    {
      title: 'Famous Friends',
      id: 'famous-friends-lyrics',
      lyrics: `You stand there talking to your famous friends<br>
                    I\'ll be a tether to the life you led before<br>
                    A human image of your humble upbringing<br>
                    I am statue still and pointed to the door<br>
                    <br>
                    Silver spoons eating up your stories<br>
                    Getting locked in that old attic, hearing ghostly wails<br>
                    You\'re down to earth; I\'m just ordinary<br>
                    A hapless stowaway on your upward trail<br>
                    <br>
                    But we were brothers once, you and I<br>
                    Have you finally gone dim from the glorious light<br>
                    That surrounds you at all times?<br>
                    I\'d hold up fingers, but you won\'t look me in the eye<br>
                    <br>
                    Bronze of skin<br>
                    White of teeth<br>
                    Red of wine<br>
                    Blue of face<br>
                    Black of heart<br>
                    Clear of mind<br>
                    <br>
                    You stand there talking to your famous friends<br>
                    I\'ll be imagining their plans get overturned<br>
                    But it\'s not too late to leave this acting rich and talking cheap<br>
                    We can just laugh and watch the mansions burn`
    },
    {
      title: 'Valleys',
      id: 'valleys-lyrics',
      lyrics: `On the edge of this porch, at a house where you have lived since 10 years old<br>
                    There\'s a map beside the door, marking where you\'ve been and where you want to go<br>
                    Leave these lackluster suburbs you\'ve started to think less and less of<br>
                    What\'s more, it won\'t be enough<br>
                    <br>
                    Ambition squares your shoulders; determination straightens up your neck<br>
                    You snap with every setback; it\'s so much worse if you don\'t course-correct<br>
                    Live and love your letdowns; learn to take the joy whenever it comes<br>
                    The little battles won<br>
                    <br>
                    At the end of every valley, there\'s a fell for you to climb<br>
                    Doesn\'t ask all that much of you; just your peace of mind and time<br>
                    And we could all stand more victories, but you can still be happy in the valleys<br>
                    <br>
                    At the base of this cliff, stricken with the constant vertigo of failing<br>
                    You can find a better path, draw you back to center, stop your wailing<br>
                    Work for everything you want, but don\'t wear every loss along the way<br>
                    Be more than your achievements or tarnish over all your golden days<br>
                    <br>
                    At the end of every valley, there\'s a fell for you to climb<br>
                    Doesn\'t ask all that much of you; just your peace of mind and time<br>
                    And we could all stand more victories, but you can still be happy in the valleys<br>
                    <br>
                    And when I cannot see, my strength is failing me, I know You\'re here with me in the valleys<br>
                    And when I cannot see, my strength is failing me, I know You\'re here with me in the valleys<br>
                    <br>
                    At the end of every valley, there\'s a fell for you to climb<br>
                    Doesn\'t ask all that much of you; just your peace of mind and time<br>
                    And we could all stand more victories, but you can still be happy<br>
                    <br>
                    At the end of every valley, there\'s a fell for you to climb<br>
                    Doesn\'t ask all that much of you; just your peace of mind and time<br>
                    And we could all stand more victories, but you can still be happy<br>
                    We could all stand more victories, but you can still be happy<br>
                    We could all stand more victories, but you can still be happy in the valleys`
    },
    {
      title: 'Minimal',
      id: 'minimal-lyrics',
      lyrics: `We will not move these white fences for you<br>
                    We will not move these white fences for you<br>
                    There\'s no window with a view overlooking what you knew<br>
                    You would not work for it, so it will not work for you<br>
                    <br>
                    We will not move these white fences for you<br>
                    We will not move these white fences for you<br>
                    There\'s no window with a view overlooking what you knew<br>
                    You would not work for it, so it will not work for you<br>
                    <br>
                    Kairos, I\'ve been running from you, running for you, racing toward you<br>
                    Kairos, I\'ve been running from you, running for you<br>
                    <br>
                    Kairos, I\'ve been running from you, running for you, racing toward you<br>
                    Kairos, I\'ve been running from you, running for you`
    },
    {
      title: 'I Can\'t Make You Love Me',
      id: 'i-can\'t-make-you-love-me-lyrics',
      lyrics: `Turn down the lights<br>
                Turn down the bed<br>
                Turn down these voices<br>
                Inside my head<br>
                <br>
                Lay down with me<br>
                Tell me no lies<br>
                Just hold me close<br>
                Don't patronize<br>
                <br>
                I'll close my eyes<br>
                Then I won't see<br>
                The love you don't feel<br>
                When you're holding me<br>
                <br>
                Morning will come<br>
                And I'll do what's right<br>
                Just give me till then<br>
                To give up this fight<br>
                And I will give up this fight<br>
                <br>
                'Cause I can't make you love me if you don't<br>
                You can't make your heart feel something it won't<br>
                Here in the dark, in these final hours<br>
                I will lay down my heart, and I'll feel the power<br>
                But you won't<br>
                No, you won't<br>
                'Cause I can't make you love me if you don't<br>
                <br>
                I'll close my eyes...<br>
                <br>
                'Cause I can't make you love me if you don't<br>
                You can't make your heart feel something it won't<br>
                Here in the dark, in these final hours<br>
                I will lay down my heart, and I'll feel the power<br>
                But you won't<br>
                No, you won't<br>
                'Cause I can't make you love me if you don't<br>
                <br>
                Can't make you love me if you don't<br>
                Can't make you<br>
                Can't make you<br>
                <br>
                Just when I thought I was on the right side of things<br>
                You left me another sting, I was moving until the wings gave out<br>
                Maybe I was meant to be the one who'd stay<br>
                'Cause I can't make you, I can't make you<br>
                <br>
                Yeah, I'm hurting<br>
                And I don't hate you<br>
                But I'm learning<br>
                And I don't mean to<br>
                'Cause I can't make you<br>
                I can't make you`
    }
  ];

});
