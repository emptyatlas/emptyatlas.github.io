import {Component, OnInit, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Title, Meta} from '@angular/platform-browser';
import {GLOBALS} from '../../globals';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Contact | EMPTY ATLAS');
    this.meta.updateTag({ name: 'description', content: 'Get in touch with Empty Atlas for booking, press, or general inquiries.' });
    this.meta.updateTag({ property: 'og:title', content: 'Contact | EMPTY ATLAS' });
    this.meta.updateTag({ property: 'og:description', content: 'Get in touch with Empty Atlas for booking, press, or general inquiries.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://emptyatlas.com/contact' });
  }
  protected readonly globals = GLOBALS;
  name = signal('');
  email = signal('');
  subject = signal('');
  message = signal('');
  submitted = signal(false);

  onSubmit() {
    window.location.href = `mailto:${this.globals.EMAIL}?subject=${encodeURIComponent(this.subject())}&body=${encodeURIComponent(`Name: ${this.name()}\nEmail: ${this.email()}\n\n${this.message()}`)}`;
    this.submitted.set(true);
  }

  socials = [
    {name: 'Facebook', url: this.globals.SOCIAL_FACEBOOK, handle: '@emptyatlasmusic'},
    {name: 'Instagram', url: this.globals.SOCIAL_INSTAGRAM, handle: '@emptyatlas'},
    {name: 'YouTube', url: this.globals.SOCIAL_YOUTUBE, handle: '@emptyatlasmusic'},
  ];
}
