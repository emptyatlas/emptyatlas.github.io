import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import {GLOBALS} from '../../globals';
import {SocialIcons} from '../../components/social-icons/social-icons';

@Component({
  selector: 'app-about',
  imports: [SocialIcons],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  protected readonly globals = GLOBALS;
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('About | EMPTY ATLAS');
    this.meta.updateTag({ name: 'description', content: 'Meet Empty Atlas — Micah Smith, Brennan Michael White, Alex Ingram, and Robert Currie Hansford. Melodic indie rock with music for fans of Manchester Orchestra, Thrice, Death Cab for Cutie and The Killers.' });
    this.meta.updateTag({ property: 'og:title', content: 'About | EMPTY ATLAS' });
    this.meta.updateTag({ property: 'og:description', content: 'Meet Empty Atlas — Micah Smith, Brennan Michael White, Alex Ingram, and Robert Currie Hansford. Melodic indie rock with music for fans of Manchester Orchestra, Thrice, Death Cab for Cutie and The Killers.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://emptyatlas.com/about' });
  }

  members = [
    {
      name: 'Alex Ingram',
      role: 'bass and keys',
      img: 'assets/img/Belong-Alex-photo-by-Jake-Slinkard.JPEG',
    },
    {
      name: 'Brennan Michael White',
      role: 'lead vocals and lead guitar',
      img: 'assets/img/Belong-Brennan-photo-by-Jake-Slinkard.JPEG',
    },
    {
      name: 'Micah Smith',
      role: 'lead vocals and rhythm guitar',
      img: 'assets/img/Belong-Micah-photo-by-Jake-Slinkard.JPEG',
    },
    {
      name: 'Robert Currie Hansford',
      role: 'drums',
      img: 'assets/img/Belong-Robert-photo-by-Jake-Slinkard.JPEG',
    },
  ];

  awards = [
    { year: '2023', competition: 'American Songwriter Song Contest', achievement: 'Rock — 1st Place' },
    { year: '2023', competition: 'Unsigned Only Music Competition', achievement: 'Semifinalist' },
    { year: '2021', competition: 'International Songwriting Competition', achievement: 'Semifinalist' },
    { year: '2020', competition: 'MissiHippi Fest Battle of the Bands', achievement: 'Elite 8' },
    { year: '2019', competition: 'Gumtree Songwriting Competition', achievement: '1st Place' },
    { year: '2019', competition: 'Music City SongStar', achievement: 'Semifinalist' },
    { year: '2019', competition: 'Small Hall Songwriter Contest', achievement: '2nd Place' },
    { year: '2018', competition: 'International Songwriting Competition', achievement: 'Semifinalist' },
    { year: '2017', competition: 'John Lennon Songwriting Contest', achievement: 'Finalist' },
    { year: '2016', competition: 'International Songwriting Competition', achievement: 'Semifinalist' },
  ];

  pressFeatures = [
    {name: 'Paste Magazine', img: 'assets/img/news/paste-2016.png'},
    {name: 'American Songwriter', img: 'assets/img/news/american-songwriter-2023-winners.png'},
    {name: 'Indie Vision Music', img: 'assets/img/news/indie-vision-music_2022.png'},
    {name: 'Kill The Music', img: 'assets/img/news/kill-the-music-2021.png'},
    {name: 'Stitched Sound', img: 'assets/img/news/stitched-sound-2020.png'},
    {name: 'Discovered Magazine', img: 'assets/img/news/discovered-magazine.png'},
  ];
}
