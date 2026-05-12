import {Component, signal, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {GLOBALS} from '../../globals';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected readonly globals = GLOBALS;
  menuOpen = signal(false);
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
