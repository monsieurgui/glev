import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(0)'
      })),
      state('out', style({
        transform: 'translateY(-100%)'
      })),
      transition('in => out', [
        animate('300ms ease-in')
      ]),
      transition('out => in', [
        animate('300ms ease-out')
      ])
    ])
  ]
})
export class HeaderComponent {
  constructor(public translate: TranslateService) { }

  menuVisible = false;
  
  switchLanguage() {
    this.translate.use(this.translate.currentLang === 'en' ? 'fr' : 'en');
  }
}
