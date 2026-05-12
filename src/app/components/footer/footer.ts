import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {GLOBALS} from '../../globals';
import {SocialIcons} from '../social-icons/social-icons';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, SocialIcons],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  year = new Date().getFullYear();
  protected readonly globals = GLOBALS;
}
