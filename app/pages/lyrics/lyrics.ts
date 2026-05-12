import {Component, HostListener, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Title, Meta} from '@angular/platform-browser';
import {LYRICS, LyricsEntry} from '../../data/lyrics';
import {RELEASES, Release} from '../../data/releases';

@Component({
  selector: 'app-lyrics',
  imports: [RouterLink],
  templateUrl: './lyrics.html',
  styleUrl: './lyrics.css',
})
export class Lyrics implements OnInit {
  release: Release | undefined;
  entry: LyricsEntry | undefined;
  openTracks = signal<Set<number>>(new Set());
  showScrollTop = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.showScrollTop.set(window.scrollY > 300);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.release = RELEASES.find(r => r.slug === slug);
    this.entry = LYRICS[slug];

    if (this.entry) {
      const pageTitle = `${this.entry.title} — Lyrics | EMPTY ATLAS`;
      this.title.setTitle(pageTitle);
      this.meta.updateTag({ name: 'description', content: `Lyrics for "${this.entry.title}" by Empty Atlas.` });
      this.meta.updateTag({ property: 'og:title', content: pageTitle });
      this.meta.updateTag({ property: 'og:url', content: `https://emptyatlas.com/music/${slug}` });
    }
  }

  toggleTrack(index: number) {
    this.openTracks.update(set => {
      const next = new Set(set);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  }

  isOpen(index: number): boolean {
    return this.openTracks().has(index);
  }
}
