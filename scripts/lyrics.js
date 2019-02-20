'use strict';

/**
 * @ngdoc function
 * @name webApp.service:LyricService
 * @description # LyricService of the webApp
 */
angular.module('emptyatlasgithubioApp').service('LyricService', function () {

    this.songs = [
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
            lyrics: 'When I couldn\'t stop myself, I drove by your house last week<br>Phased into your float glass eyes and your fencepost teeth<br>Hoped you were happy with someone else<br>Who lends you the worship I withheld<br>But is it often, if not always, you think of me?<br><br>I was just a stranger with an extra key<br>Waiting by the door until you needed me<br>Now, I\'m learning what you can live without<br><br>When I couldn\'t shake you off, you stormed through my mind again<br>A lightning rod that won\'t be content ‘til the roof caves in<br>But after the smoke and wreckage clears<br>I\'ll bury the ghosts that I abandoned here<br>But it\'s always warmer where I\'m wanted<br>A brand new home where I\'m not haunted<br>Somewhere I can finally let myself rest<br><br>I was just a stranger with an extra key<br>Waiting by the door until you needed me<br>Now, I\'m learning what you can live without<br><br>I was just a stranger with an extra key<br>Waiting by the door until you needed me<br>Now, I\'m learning what you can live without<br><br>You\'re always painting the door back red and green<br>Stop and go, I think you know just what I mean<br>I never said you\'d be were off with me<br>I think you\'re better alone<br>And if you feel like the walls are closing in<br>Claustrophobia can start to wear you thin<br>For every statement that you made but can\'t defend<br>I think you\'re better alone, alone, alone<br><br>I was just a stranger with an extra key<br>Waiting by the door until you needed me<br>Now, I\'m learning what you can live without'
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
That maybe I did you a favor, made room for good company<br>
`
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
        }
    ];

});
