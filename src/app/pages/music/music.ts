import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Title, Meta} from '@angular/platform-browser';
import {RELEASES, FEATURES} from '../../data/releases';
import {GLOBALS} from '../../globals';

@Component({
  selector: 'app-music',
  imports: [RouterLink],
  templateUrl: './music.html',
  styleUrl: './music.css'
})
export class Music implements OnInit {
  protected readonly globals = GLOBALS;
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Music | EMPTY ATLAS');
    this.meta.updateTag({ name: 'description', content: 'Explore the full discography of Empty Atlas — singles, albums, and features. Stream on Spotify, Apple Music, Bandcamp, and more.' });
    this.meta.updateTag({ property: 'og:title', content: 'Music | EMPTY ATLAS' });
    this.meta.updateTag({ property: 'og:description', content: 'Explore the full discography of Empty Atlas — singles, albums, and features. Stream on Spotify, Apple Music, Bandcamp, and more.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://emptyatlas.com/music' });
  }

  releases = RELEASES;
  features = FEATURES;

  streamingLinks = [
    {name: 'Spotify', url: this.globals.MUSIC_SPOTIFY, icon: 'spotify'},
    {name: 'Apple Music', url: this.globals.MUSIC_APPLE, icon: 'apple'},
    {name: 'Bandcamp', url: this.globals.MUSIC_BANDCAMP, icon: 'bandcamp'},
    {name: 'Amazon Music', url: this.globals.MUSIC_AMAZON, icon: 'amazon'},
    {name: 'YouTube Music', url: this.globals.MUSIC_YOUTUBE, icon: 'youtube'},
    {name: 'SoundCloud', url: this.globals.MUSIC_SOUNDCLOUD, icon: 'soundcloud'},
    {name: 'Tidal', url: this.globals.MUSIC_TIDAL, icon: 'tidal'},
  ];
}
