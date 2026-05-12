import {Component, input} from '@angular/core';
import {GLOBALS} from '../../globals';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.html',
  styleUrl: './social-icons.css'
})
export class SocialIcons {
  fontSize = input<string>('xx-large');
  protected readonly globals = GLOBALS;
}
