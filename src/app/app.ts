import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Nav} from './components/nav/nav';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer],
  template: `
    <app-nav/>
    <main>
      <router-outlet/>
    </main>
    <app-footer/>
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class App {
}
