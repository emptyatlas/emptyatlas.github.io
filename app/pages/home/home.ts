import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Title, Meta} from '@angular/platform-browser';
import {SocialIcons} from '../../components/social-icons/social-icons';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SocialIcons],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, AfterViewInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('EMPTY ATLAS | Official Website');
    this.meta.updateTag({ name: 'description', content: 'Empty Atlas is a melodic indie rock band with music for fans of Manchester Orchestra, Thrice, Death Cab for Cutie and The Killers. Stream the latest single &quot;Godspeed&quot; on Spotify, Apple Music, Bandcamp, and more.' });
    this.meta.updateTag({ property: 'og:title', content: 'EMPTY ATLAS | Official Website' });
    this.meta.updateTag({ property: 'og:description', content: 'Empty Atlas is a melodic indie rock band with music for fans of Manchester Orchestra, Thrice, Death Cab for Cutie and The Killers. Stream the latest single &quot;Godspeed&quot; on Spotify, Apple Music, Bandcamp, and more.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://emptyatlas.com' });
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://widgetv3.bandsintown.com/main.min.js';
    script.async = true;
    document.body.appendChild(script);
  }

}
